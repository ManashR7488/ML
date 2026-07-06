# ML Quest — Interactive Machine Learning Curriculum

ML Quest is a front-end-only learning app that turns a Machine Learning roadmap into a gamified journey.
It combines:

- a structured phase-by-phase ML curriculum
- curated interactive visual resources (28 playgrounds)
- progress tracking with XP, levels, ranks, and badges

The project is designed to run directly in a browser with no build tools and no backend.

## What This Project Includes

- Guided curriculum from fundamentals to advanced ML topics
- Topic-level progress tracking with local persistence
- XP and level system with animated feedback
- Trophy room and achievement badges
- Resource hub for all 28 visualization tools
- Activity logging bridge intended for calendar integration
- Modern visual interface (Tailwind CDN + custom CSS)

## Current Pages

- `index.html`
	Main journey page with:
	- phase cards
	- per-topic checklist
	- progress ring
	- sticky HUD
	- inline linked resources

- `badges.html`
	Trophy room page showing unlocked vs locked achievements.

- `resource.html`
	Directory of all 28 visual ML resources with visited tracking.

- `calendar.html`
	Currently a placeholder page (minimal HTML shell). Not yet wired to a working calendar UI.

## Tech Stack

- HTML5
- Vanilla JavaScript
- Tailwind CSS via CDN (`@tailwindcss/browser`)
- Custom shared stylesheet (`styles.css`)
- Google Fonts (`Space Grotesk`, `Inter`)
- Browser `localStorage` for state
- Web Audio API for sound effects
- Canvas API for confetti effects

No package manager, bundler, framework, or server is required.

## Project Structure

```text
00.LEARN/
├─ index.html                      # Main learning journey
├─ badges.html                     # Trophy/achievement view
├─ resource.html                   # 28-resource index view
├─ calendar.html                   # Placeholder calendar page (incomplete)
├─ app.js                          # Core app data + rendering + game mechanics
├─ calendar.js                     # Empty (calendar logic not implemented yet)
├─ styles.css                      # Shared styles + calendar component styles
├─ ML_Integrated_Curriculum.md     # Long-form integrated curriculum reference
├─ README.md                       # This file
└─ docs/
	 ├─ machine-learning.pdf
	 └─ ML_Visualization_Resources.pdf
```

## How To Run

Because this is a static site, you can open it directly or use a simple local server.

### Option 1: Open Directly

1. Open `index.html` in your browser.

### Option 2: Run a Local Static Server (recommended)

If you already have Python:

```powershell
python -m http.server 5500
```

Then open:

- `http://localhost:5500/index.html`

Using a local server helps avoid edge-case restrictions and is better for future feature growth.

## Core App Behavior

`app.js` contains all core logic:

- Resource library (`RESOURCES`) with 28 external links
- Curriculum model (`CURRICULUM`) with phases, sections, topics, and recommended resources
- Derived progress logic for completion, XP, level, rank, and percentages
- Dynamic rendering for:
	- journey rail
	- phases/sections/topics
	- badges
	- resource index
- Event wiring for:
	- topic toggle
	- resource visit tracking
	- accordion expansion
	- sound toggle
	- reset progress

## Gamification Model

- XP per topic: `10`
- XP per level: `100`
- Levels mapped to rank titles from "Curious Mind" to "ML Master"
- Badges include milestone badges, phase completion badges, exploration badges, and full-completion badge
- Celebration effects:
	- toast notifications
	- confetti bursts
	- level-up modal
	- sound effects

## Persistence Model (localStorage)

State is stored under key: `ml-quest-v1`

Stored fields include:

- `done`: completed topic IDs
- `visited`: visited resource IDs
- `open`: open phase accordion states
- `badges`: badge state holder
- `sound`: sound preference
- `log`: date-wise completed topics
- `phaseLog`: date-wise completed phases

All persistence is local to the browser profile/device.

## Calendar Integration Status

The project has partial preparation for calendar features:

- `styles.css` contains extensive calendar-specific UI classes.
- `app.js` exposes an activity bridge:
	- `window.MLQuest.getActivityLog()`
	- returns completed topics and phase logs by date

However:

- `calendar.html` is not implemented
- `calendar.js` is empty

So the calendar feature is currently not functional.

## Data Source and Learning Path Context

The curriculum and resource mapping are aligned with:

- roadmap.sh Machine Learning learning flow
- the "28 Sites to Learn ML Visually" resource curation

The extended content blueprint is also documented in:

- `ML_Integrated_Curriculum.md`

## Known Limitations

- No backend sync (progress is local only)
- No user accounts/authentication
- No tests yet
- Calendar page is unfinished
- Accessibility and keyboard coverage could be expanded further

## Suggested Next Development Steps

1. Implement full calendar UI in `calendar.html` + `calendar.js` using the existing `window.MLQuest.getActivityLog()` bridge.
2. Add import/export for progress JSON to move data across devices.
3. Add search and filtering for topics and resources.
4. Add optional "study streak" and reminders on top of existing activity logs.
5. Add lightweight test coverage for core progression and badge logic.

## License and Credits

Educational project. External resource links belong to their respective creators and platforms.

Primary inspiration and content sources:

- roadmap.sh Machine Learning roadmap
- Visual ML resources list credited in-project to @manashR7488
