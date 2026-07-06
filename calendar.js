/* ============================================================================
   ML QUEST — Calendar  (calendar.js)
   A personal planner (tasks / events / goals / milestones) with recurring
   items, priorities, times, plus a read-only auto-log of ML activity pulled
   from app.js (window.MLQuest.getActivityLog).

   Wrapped in an IIFE so its identifiers never collide with app.js globals
   ($ , toast, state, …) — both are classic scripts sharing window scope.
   ========================================================================== */
(function () {
  "use strict";

  /* ---------------------------------------------------------------------------
     DOM + small helpers  (locally scoped — do NOT leak to window)
     ------------------------------------------------------------------------- */
  const qs = (s, r = document) => r.querySelector(s);
  const qsa = (s, r = document) => [...r.querySelectorAll(s)];
  const escHtml = (s) =>
    String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const uid = () =>
    "c" + Date.now().toString(36) + Math.random().toString(36).slice(2, 7);

  // Reuse app.js's toast if present; otherwise no-op.
  const toast = (icon, title, sub) =>
    typeof window.toast === "function" ? window.toast(icon, title, sub) : undefined;
  // Reuse app.js confetti burst if present.
  const burst = (x, y, n) =>
    typeof window.burst === "function" ? window.burst(x, y, n) : undefined;

  /* ---------- date utilities (all LOCAL time, no UTC drift) ---------- */
  const pad = (n) => String(n).padStart(2, "0");
  const keyOf = (d) => `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  const parseKey = (k) => {
    const [y, m, d] = k.split("-").map(Number);
    return new Date(y, m - 1, d);
  };
  const todayKey = () => keyOf(new Date());
  const addDays = (d, n) => { const x = new Date(d); x.setDate(x.getDate() + n); return x; };
  const sameMonth = (a, b) => a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
  const MONTHS = ["January","February","March","April","May","June","July","August","September","October","November","December"];
  const WEEKDAYS = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

  /* ---------------------------------------------------------------------------
     STATE — separate localStorage key, independent of ML progress reset
     Item: { id, date:"YYYY-MM-DD", title, notes, category, allDay, time,
             priority, recur, done, doneDates:{} }
     doneDates tracks completion per-instance for recurring items.
     ------------------------------------------------------------------------- */
  const CAL_KEY = "ml-quest-calendar-v1";
  const CATEGORIES = {
    task:      { label: "Task",      icon: "📋", color: "#38bdf8" },
    event:     { label: "Event",     icon: "📎", color: "#a78bfa" },
    goal:      { label: "Goal",      icon: "🎯", color: "#34d399" },
    milestone: { label: "Milestone", icon: "🏁", color: "#fbbf24" },
  };
  const PRIOS = { low: "Low", med: "Medium", high: "High" };

  let data = loadCal();
  let cursor = new Date(); cursor.setDate(1);      // first of the visible month
  let selectedKey = todayKey();

  function loadCal() {
    try {
      const raw = localStorage.getItem(CAL_KEY);
      const parsed = raw ? JSON.parse(raw) : null;
      const items = parsed && Array.isArray(parsed.items) ? parsed.items : [];
      return { items };
    } catch {
      return { items: [] };
    }
  }
  function saveCal() {
    try { localStorage.setItem(CAL_KEY, JSON.stringify(data)); } catch {}
  }

  /* ---------------------------------------------------------------------------
     RECURRENCE — does a stored item occur on the given day?
     ------------------------------------------------------------------------- */
  function occursOn(item, dayKey) {
    if (item.date === dayKey) return true;
    if (!item.recur || item.recur === "none") return false;
    const start = parseKey(item.date);
    const day = parseKey(dayKey);
    if (day < start) return false;
    if (item.recur === "daily") return true;
    if (item.recur === "weekly") return start.getDay() === day.getDay();
    if (item.recur === "monthly") return start.getDate() === day.getDate();
    return false;
  }
  // completion is tracked per-day so recurring instances complete independently
  const isDone = (item, dayKey) =>
    item.recur && item.recur !== "none"
      ? !!(item.doneDates && item.doneDates[dayKey])
      : !!item.done;

  function setDone(item, dayKey, val) {
    if (item.recur && item.recur !== "none") {
      item.doneDates = item.doneDates || {};
      if (val) item.doneDates[dayKey] = true;
      else delete item.doneDates[dayKey];
    } else {
      item.done = val;
    }
  }

  // All (item, occurrence) pairs for a given day, sorted for display.
  function itemsForDay(dayKey) {
    const out = [];
    for (const it of data.items) if (occursOn(it, dayKey)) out.push(it);
    out.sort((a, b) => {
      const ad = isDone(a, dayKey), bd = isDone(b, dayKey);
      if (ad !== bd) return ad ? 1 : -1;                 // incomplete first
      const at = a.allDay ? "" : a.time || "99:99";
      const bt = b.allDay ? "" : b.time || "99:99";
      if (at !== bt) return at < bt ? -1 : 1;            // by time
      return 0;
    });
    return out;
  }

  /* ---------- ML auto-log (read-only, from app.js) ---------- */
  function mlLog() {
    try {
      return (window.MLQuest && window.MLQuest.getActivityLog)
        ? window.MLQuest.getActivityLog()
        : { topics: {}, phases: {} };
    } catch {
      return { topics: {}, phases: {} };
    }
  }
  function mlForDay(log, dayKey) {
    const topics = log.topics[dayKey] || [];
    const phases = log.phases[dayKey] || [];
    return { topics, phases, count: topics.length + phases.length };
  }

  /* ---------------------------------------------------------------------------
     STATS (independent of ML XP) — done count, planned count, daily streak
     ------------------------------------------------------------------------- */
  function computeStats() {
    let done = 0, total = 0;
    for (const it of data.items) {
      if (it.recur && it.recur !== "none") {
        const dd = Object.keys(it.doneDates || {}).length;
        done += dd;
        total += dd; // only materialized (completed) recurrences count as "planned done"
        total += 1;  // plus the base occurrence
      } else {
        total += 1;
        if (it.done) done += 1;
      }
    }
    // streak: consecutive days up to today with ≥1 completed item (calendar or ML)
    const log = mlLog();
    const hasCompletion = (dayKey) => {
      for (const it of data.items) if (occursOn(it, dayKey) && isDone(it, dayKey)) return true;
      if ((log.topics[dayKey] || []).length || (log.phases[dayKey] || []).length) return true;
      return false;
    };
    let streak = 0;
    let d = new Date();
    // if nothing done today yet, streak can still count back from yesterday
    if (!hasCompletion(keyOf(d))) d = addDays(d, -1);
    for (let i = 0; i < 366; i++) {
      if (hasCompletion(keyOf(d))) { streak++; d = addDays(d, -1); }
      else break;
    }
    return { done, total, streak };
  }

  /* ---------------------------------------------------------------------------
     RENDER — month grid
     ------------------------------------------------------------------------- */
  function renderGrid() {
    const grid = qs("#cal-grid");
    if (!grid) return;
    qs("#cal-title").textContent = `${MONTHS[cursor.getMonth()]} ${cursor.getFullYear()}`;

    const first = new Date(cursor.getFullYear(), cursor.getMonth(), 1);
    const startOffset = first.getDay();                 // 0=Sun
    const gridStart = addDays(first, -startOffset);
    const tKey = todayKey();
    const log = mlLog();

    let html = "";
    for (let i = 0; i < 42; i++) {
      const day = addDays(gridStart, i);
      const dk = keyOf(day);
      const outside = !sameMonth(day, cursor);
      const weekend = day.getDay() === 0 || day.getDay() === 6;
      const items = itemsForDay(dk);
      const ml = mlForDay(log, dk);

      const classes = ["cal-cell"];
      if (outside) classes.push("outside");
      if (weekend) classes.push("weekend");
      if (dk === tKey) classes.push("today");
      if (dk === selectedKey) classes.push("selected");

      // chips: up to 3, ML activity gets its own chip
      const chips = [];
      if (ml.count > 0) {
        chips.push(
          `<div class="cal-chip cat-ml" title="${escHtml(ml.topics.concat(ml.phases.map((p)=>"Phase "+p+" cleared")).join(", "))}">
             <span class="cal-dot"></span>🧠 ${ml.count} ML</div>`
        );
      }
      for (const it of items) {
        if (chips.length >= 3) break;
        const done = isDone(it, dk) ? " done" : "";
        const t = it.allDay || !it.time ? "" : `<span class="opacity-70">${escHtml(it.time)}</span> `;
        chips.push(
          `<div class="cal-chip cat-${it.category}${done}" title="${escHtml(it.title)}">
             <span class="cal-dot"></span>${t}${escHtml(it.title)}</div>`
        );
      }
      const extra = items.length + (ml.count > 0 ? 1 : 0) - chips.length;
      const more = extra > 0 ? `<div class="cal-more">+${extra} more</div>` : "";

      html += `
        <div class="${classes.join(" ")}" data-day="${dk}" role="button" tabindex="0" aria-label="${escHtml(WEEKDAYS[day.getDay()])} ${day.getDate()}">
          <div class="flex items-center justify-between">
            <span class="cal-daynum">${day.getDate()}</span>
          </div>
          ${chips.join("")}${more}
        </div>`;
    }
    grid.innerHTML = html;
  }

  /* ---------------------------------------------------------------------------
     RENDER — day panel (selected day)
     ------------------------------------------------------------------------- */
  function renderPanel() {
    const list = qs("#cal-panel-list");
    if (!list) return;
    const d = parseKey(selectedKey);
    qs("#cal-panel-weekday").textContent = WEEKDAYS[d.getDay()] + (selectedKey === todayKey() ? " · Today" : "");
    qs("#cal-panel-date").textContent = `${MONTHS[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;

    const items = itemsForDay(selectedKey);
    const log = mlLog();
    const ml = mlForDay(log, selectedKey);

    let html = "";

    // ML auto-log block (read-only)
    if (ml.count > 0) {
      const rows = [];
      for (const t of ml.topics) rows.push(`✅ ${escHtml(t)}`);
      for (const p of ml.phases) rows.push(`🏆 Phase ${escHtml(p)} cleared`);
      html += `
        <div class="cal-item ml cat-ml cal-enter">
          <div class="text-lg leading-none pt-0.5">🧠</div>
          <div class="min-w-0 grow">
            <div class="cal-item-title font-semibold text-[14px] text-white/90">ML activity</div>
            <div class="text-[12px] text-white/55 mt-0.5 space-y-0.5">${rows.map((r) => `<div>${r}</div>`).join("")}</div>
            <div class="text-[10px] text-white/30 mt-1">Auto-logged from your Path progress</div>
          </div>
        </div>`;
    }

    if (!items.length && ml.count === 0) {
      html += `
        <div class="text-center py-8 text-white/40 cal-fade">
          <div class="text-3xl mb-2">🗓️</div>
          <div class="text-sm">Nothing planned yet.</div>
          <div class="text-[12px] mt-1">Click <span class="text-violet-200">+ Add</span> to schedule something.</div>
        </div>`;
    }

    for (const it of items) {
      const done = isDone(it, selectedKey);
      const cat = CATEGORIES[it.category] || CATEGORIES.task;
      const meta = [];
      if (!it.allDay && it.time) meta.push(it.time);
      else meta.push("All-day");
      meta.push(`${cat.icon} ${cat.label}`);
      if (it.recur && it.recur !== "none") meta.push("↻ " + it.recur);
      const prioCls = it.priority === "high" ? "prio-high" : it.priority === "low" ? "prio-low" : "prio-med";

      html += `
        <div class="cal-item cat-${it.category}${done ? " done" : ""} cal-enter" data-item="${it.id}" data-day="${selectedKey}">
          <button class="cal-check" data-check="${it.id}" title="Toggle complete" aria-label="Toggle complete">
            <svg viewBox="0 0 24 24" class="w-3.5 h-3.5" fill="none" stroke="#0b0b12" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12.5l4 4L19 7"/></svg>
          </button>
          <div class="min-w-0 grow cursor-pointer" data-edit="${it.id}">
            <div class="flex items-center gap-2">
              <span class="prio-dot ${prioCls}" title="${PRIOS[it.priority] || "Medium"} priority"></span>
              <span class="cal-item-title font-semibold text-[14px] text-white/90 truncate">${escHtml(it.title)}</span>
            </div>
            <div class="text-[11.5px] text-white/45 mt-0.5">${meta.map(escHtml).join(" · ")}</div>
            ${it.notes ? `<div class="text-[12px] text-white/55 mt-1 line-clamp-2">${escHtml(it.notes)}</div>` : ""}
          </div>
        </div>`;
    }

    list.innerHTML = html;
  }

  /* ---------------------------------------------------------------------------
     RENDER — upcoming (next items from today forward)
     ------------------------------------------------------------------------- */
  function renderUpcoming() {
    const box = qs("#cal-upcoming");
    if (!box) return;
    const start = new Date(); start.setHours(0, 0, 0, 0);
    const found = [];
    for (let i = 0; i < 60 && found.length < 6; i++) {
      const day = addDays(start, i);
      const dk = keyOf(day);
      for (const it of itemsForDay(dk)) {
        if (isDone(it, dk)) continue;
        found.push({ it, dk, day });
        if (found.length >= 6) break;
      }
    }
    if (!found.length) {
      box.innerHTML = `<div class="text-[12.5px] text-white/40 py-2">No upcoming items. Enjoy the free time! ✨</div>`;
      return;
    }
    box.innerHTML = found
      .map(({ it, dk, day }) => {
        const cat = CATEGORIES[it.category] || CATEGORIES.task;
        const rel =
          dk === todayKey() ? "Today" :
          dk === keyOf(addDays(new Date(), 1)) ? "Tomorrow" :
          `${MONTHS[day.getMonth()].slice(0, 3)} ${day.getDate()}`;
        const t = it.allDay || !it.time ? "" : ` · ${escHtml(it.time)}`;
        return `
          <button class="w-full text-left flex items-center gap-2.5 p-2 rounded-xl hover:bg-white/5 transition" data-goto="${dk}" data-edit="${it.id}">
            <span class="w-2 h-2 rounded-full shrink-0" style="background:${cat.color}"></span>
            <span class="grow min-w-0">
              <span class="block text-[13px] text-white/85 truncate">${escHtml(it.title)}</span>
              <span class="block text-[11px] text-white/40">${rel}${t}</span>
            </span>
            <span class="text-sm shrink-0">${cat.icon}</span>
          </button>`;
      })
      .join("");
  }

  function renderStats() {
    const s = computeStats();
    const set = (id, v) => { const el = qs(id); if (el) el.textContent = v; };
    set("#cal-stat-done", s.done);
    set("#cal-stat-total", s.total);
    set("#cal-stat-streak", s.streak);
  }

  function renderAll() {
    renderGrid();
    renderPanel();
    renderUpcoming();
    renderStats();
  }

  /* ---------------------------------------------------------------------------
     EDITOR MODAL
     ------------------------------------------------------------------------- */
  let editingId = null;

  function segValue(seg) {
    const active = qs(`#${seg} .cal-seg-btn.active`);
    return active ? active.dataset.val : null;
  }
  function setSeg(seg, val) {
    qsa(`#${seg} .cal-seg-btn`).forEach((b) =>
      b.classList.toggle("active", b.dataset.val === val),
    );
  }

  function openModal(item, presetDate) {
    editingId = item ? item.id : null;
    qs("#cal-modal-title").textContent = item ? "Edit item" : "New item";
    qs("#f-id").value = item ? item.id : "";
    qs("#f-title").value = item ? item.title : "";
    qs("#f-date").value = item ? item.date : (presetDate || selectedKey || todayKey());
    qs("#f-time").value = item && item.time ? item.time : "";
    qs("#f-allday").checked = item ? !!item.allDay : true;
    qs("#f-notes").value = item ? item.notes || "" : "";
    qs("#f-recur").value = item ? item.recur || "none" : "none";
    setSeg("f-category", item ? item.category : "task");
    setSeg("f-priority", item ? item.priority : "med");
    qs("#cal-delete").classList.toggle("hidden", !item);
    syncTimeDisabled();

    const modal = qs("#cal-modal");
    modal.classList.remove("pointer-events-none");
    modal.classList.add("show");
    setTimeout(() => qs("#f-title").focus(), 60);
  }
  function closeModal() {
    const modal = qs("#cal-modal");
    modal.classList.remove("show");
    setTimeout(() => modal.classList.add("pointer-events-none"), 320);
    editingId = null;
  }
  function syncTimeDisabled() {
    const allday = qs("#f-allday").checked;
    const time = qs("#f-time");
    time.disabled = allday;
    time.style.opacity = allday ? ".4" : "1";
  }

  function submitForm(e) {
    e.preventDefault();
    const title = qs("#f-title").value.trim();
    if (!title) return;
    const allDay = qs("#f-allday").checked;
    const payload = {
      title,
      date: qs("#f-date").value || todayKey(),
      time: allDay ? "" : qs("#f-time").value,
      allDay,
      notes: qs("#f-notes").value.trim(),
      category: segValue("f-category") || "task",
      priority: segValue("f-priority") || "med",
      recur: qs("#f-recur").value || "none",
    };

    if (editingId) {
      const it = data.items.find((x) => x.id === editingId);
      if (it) Object.assign(it, payload);
      toast("✏️", "Updated", title);
    } else {
      data.items.push(Object.assign({ id: uid(), done: false, doneDates: {} }, payload));
      toast("✅", "Added to calendar", title);
    }
    saveCal();
    // jump selection to the item's date so the user sees it
    selectedKey = payload.date;
    if (!sameMonth(parseKey(payload.date), cursor)) {
      cursor = new Date(payload.date.slice(0, 4), +payload.date.slice(5, 7) - 1, 1);
    }
    renderAll();
    closeModal();
  }

  function deleteItem() {
    if (!editingId) return;
    const it = data.items.find((x) => x.id === editingId);
    data.items = data.items.filter((x) => x.id !== editingId);
    saveCal();
    toast("🗑️", "Deleted", it ? it.title : "");
    renderAll();
    closeModal();
  }

  /* ---------------------------------------------------------------------------
     COMPLETE toggle
     ------------------------------------------------------------------------- */
  function toggleComplete(id, dayKey) {
    const it = data.items.find((x) => x.id === id);
    if (!it) return;
    const now = !isDone(it, dayKey);
    setDone(it, dayKey, now);
    saveCal();
    if (now) {
      // celebrate goals & milestones a little extra
      if (it.category === "goal" || it.category === "milestone") burst(0.5, 0.35, 70);
      toast(now ? "🎉" : "", now ? "Nice!" : "", it.title);
    }
    renderAll();
  }

  /* ---------------------------------------------------------------------------
     EVENTS
     ------------------------------------------------------------------------- */
  function wire() {
    // month navigation
    qs("#cal-prev")?.addEventListener("click", () => { cursor = new Date(cursor.getFullYear(), cursor.getMonth() - 1, 1); renderGrid(); });
    qs("#cal-next")?.addEventListener("click", () => { cursor = new Date(cursor.getFullYear(), cursor.getMonth() + 1, 1); renderGrid(); });
    qs("#cal-today")?.addEventListener("click", () => {
      cursor = new Date(); cursor.setDate(1);
      selectedKey = todayKey();
      renderAll();
    });
    qs("#cal-add")?.addEventListener("click", () => openModal(null, selectedKey));
    qs("#cal-panel-add")?.addEventListener("click", () => openModal(null, selectedKey));

    // grid: select a day (click) / open editor (dblclick on empty)
    qs("#cal-grid")?.addEventListener("click", (e) => {
      const cell = e.target.closest("[data-day]");
      if (!cell) return;
      selectedKey = cell.dataset.day;
      renderGrid();
      renderPanel();
    });
    qs("#cal-grid")?.addEventListener("dblclick", (e) => {
      const cell = e.target.closest("[data-day]");
      if (!cell) return;
      openModal(null, cell.dataset.day);
    });
    // keyboard access on cells
    qs("#cal-grid")?.addEventListener("keydown", (e) => {
      const cell = e.target.closest("[data-day]");
      if (!cell) return;
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); selectedKey = cell.dataset.day; renderGrid(); renderPanel(); }
    });

    // day panel: toggle complete / edit
    qs("#cal-panel-list")?.addEventListener("click", (e) => {
      const chk = e.target.closest("[data-check]");
      if (chk) { toggleComplete(chk.dataset.check, selectedKey); return; }
      const ed = e.target.closest("[data-edit]");
      if (ed) {
        const it = data.items.find((x) => x.id === ed.dataset.edit);
        if (it) openModal(it);
      }
    });

    // upcoming: jump + edit
    qs("#cal-upcoming")?.addEventListener("click", (e) => {
      const b = e.target.closest("[data-goto]");
      if (!b) return;
      selectedKey = b.dataset.goto;
      const d = parseKey(selectedKey);
      if (!sameMonth(d, cursor)) cursor = new Date(d.getFullYear(), d.getMonth(), 1);
      renderAll();
      const it = data.items.find((x) => x.id === b.dataset.edit);
      if (it) openModal(it);
    });

    // modal
    qs("#cal-form")?.addEventListener("submit", submitForm);
    qs("#cal-modal-x")?.addEventListener("click", closeModal);
    qs("#cal-delete")?.addEventListener("click", deleteItem);
    qs("#f-allday")?.addEventListener("change", syncTimeDisabled);
    qs("#cal-modal")?.addEventListener("click", (e) => { if (e.target.id === "cal-modal") closeModal(); });

    // segmented controls
    qsa(".cal-seg").forEach((seg) =>
      seg.addEventListener("click", (e) => {
        const btn = e.target.closest(".cal-seg-btn");
        if (!btn) return;
        qsa(".cal-seg-btn", seg).forEach((b) => b.classList.remove("active"));
        btn.classList.add("active");
      }),
    );

    // esc closes modal
    addEventListener("keydown", (e) => {
      if (e.key === "Escape" && qs("#cal-modal").classList.contains("show")) closeModal();
    });

    // if ML progress is reset elsewhere / another tab edits calendar, refresh
    addEventListener("storage", (e) => {
      if (e.key === CAL_KEY) { data = loadCal(); renderAll(); }
      if (e.key === "ml-quest-v1") renderAll();
    });
  }

  /* ---------------------------------------------------------------------------
     GO
     ------------------------------------------------------------------------- */
  function start() {
    wire();
    renderAll();
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
