/* ============================================================================
   ML QUEST — interactive, gamified ML curriculum
   Data + state + rendering + game mechanics. No build step, no dependencies.
   ========================================================================== */

/* ---------------------------------------------------------------------------
   1. RESOURCE LIBRARY  (the 28 visual playgrounds)
   ------------------------------------------------------------------------- */
const RESOURCES = {
  1: {
    name: "TensorFlow Playground",
    url: "https://playground.tensorflow.org/",
    short: "Interactive neural-network sandbox.",
  },
  2: {
    name: "ML Visualized",
    url: "https://ml-visualized.com/",
    short: "Animated ML textbook — every algorithm moves.",
  },
  3: {
    name: "Neural Network Playground",
    url: "https://ml-visualiser.vercel.app/",
    short: "Watch signals propagate; incl. regression & CNNs.",
  },
  4: {
    name: "Spiral Playground (Smilkov)",
    url: "https://playground.tensorflow.org/#activation=tanh&dataset=spiral",
    short: "Solve the hardest dataset — feel why depth matters.",
  },
  5: {
    name: "LLM Visualization (bbycroft.net)",
    url: "https://bbycroft.net/llm",
    short: "A complete GPT model rendered in 3D.",
  },
  6: {
    name: "Transformer Explainer",
    url: "https://poloclub.github.io/transformer-explainer/",
    short: "GPT-2: tokenize → attention → next token.",
  },
  7: {
    name: "The Illustrated Transformer",
    url: "https://jalammar.github.io/illustrated-transformer/",
    short: "The gold-standard transformer explainer.",
  },
  8: {
    name: "The Illustrated GPT-2",
    url: "https://jalammar.github.io/illustrated-gpt2/",
    short: "Visual, step-by-step text generation.",
  },
  9: {
    name: "AttentionViz",
    url: "https://attentionviz.com/",
    short: "How attention heads specialize.",
  },
  10: {
    name: "BertViz",
    url: "https://github.com/jessevig/bertviz",
    short: "Inspect attention heads for any sentence (Colab).",
  },
  11: {
    name: "CNN Explainer",
    url: "https://poloclub.github.io/cnn-explainer/",
    short: "See feature maps, filters & activations live.",
  },
  12: {
    name: "ConvNet Playground",
    url: "https://convnetplayground.fastforwardlabs.com/",
    short: "Compare VGG / ResNet / MobileNet features.",
  },
  13: {
    name: "Image Kernels Explained",
    url: "https://setosa.io/ev/image-kernels/",
    short: "What convolution actually does — drag & drop.",
  },
  14: {
    name: "TensorSpace.js",
    url: "https://tensorspace.org/",
    short: "3D pretrained models — LeNet, AlexNet, YOLO.",
  },
  15: {
    name: "Seeing Theory",
    url: "https://seeing-theory.brown.edu/",
    short: "Probability & statistics, fully animated.",
  },
  16: {
    name: "Setosa Visual Explanations",
    url: "https://setosa.io/ev/",
    short: "PCA, eigenvectors, Markov chains, probability.",
  },
  17: {
    name: "Distill.pub",
    url: "https://distill.pub/",
    short: "Interactive deep-learning research articles.",
  },
  18: {
    name: "Gradient Descent Visualizer",
    url: "https://www.benfrederickson.com/numerical-optimization/",
    short: "Optimizers crawling a loss landscape.",
  },
  19: {
    name: "ML Playground",
    url: "https://ml-playground.com/",
    short: "KNN / SVM / Tree decision boundaries, side by side.",
  },
  20: {
    name: "Visual Intro to ML (R2D3 · 1)",
    url: "http://www.r2d3.us/visual-intro-to-machine-learning-part-1/",
    short: "The best beginner intro to ML — a scrolling story.",
  },
  21: {
    name: "Bias-Variance (R2D3 · 2)",
    url: "http://www.r2d3.us/visual-intro-to-machine-learning-part-2/",
    short: "Watch a deeper tree overfit, on screen.",
  },
  22: {
    name: "K-Means Visualization",
    url: "https://www.naftaliharris.com/blog/visualizing-k-means-clustering/",
    short: "Place centroids, watch them converge.",
  },
  23: {
    name: "DBSCAN Visualization",
    url: "https://www.naftaliharris.com/blog/visualizing-dbscan-clustering/",
    short: "Density clustering for weird-shaped blobs.",
  },
  24: {
    name: "GAN Lab",
    url: "https://poloclub.github.io/ganlab/",
    short: "Train a GAN in your browser, live loss curves.",
  },
  25: {
    name: "Diffusion Model Explainer",
    url: "https://poloclub.github.io/diffusion-explainer/",
    short: "Noise → image, step by step.",
  },
  26: {
    name: "Embedding Projector",
    url: "https://projector.tensorflow.org/",
    short: "High-dimensional embeddings in interactive 3D.",
  },
  27: {
    name: "REINFORCEjs (Karpathy)",
    url: "https://cs.stanford.edu/people/karpathy/reinforcejs/gridworld_td.html",
    short: "An agent learns a gridworld via Q-learning.",
  },
  28: {
    name: "Netron",
    url: "https://netron.app/",
    short: "Inspect any model file as an interactive graph.",
  },
};

/* ---------------------------------------------------------------------------
   2. CURRICULUM  (roadmap topics, in order, with resources attached)
   Each topic id is stable — it is the localStorage key for completion.
   res: { n: <resource #>, star: bool, note: contextual "why here" }
   ------------------------------------------------------------------------- */
const CURRICULUM = [
  {
    number: 0,
    title: "Programming Fundamentals",
    icon: "🐍",
    accent: "from-emerald-500 to-teal-500",
    subtitle:
      "You can't do ML without fluent Python. Build this bedrock first.",
    sections: [
      {
        title: "Python",
        topics: [
          ["p0-syntax", "Basic syntax"],
          ["p0-vars", "Variables & data types"],
          ["p0-cond", "Conditionals"],
          ["p0-loops", "Loops"],
          ["p0-ds", "Data structures (list, dict, set, tuple)"],
          ["p0-func", "Functions & built-in functions"],
          ["p0-exc", "Exceptions"],
          ["p0-oop", "Object-Oriented Programming"],
        ],
      },
      {
        title: "Essential Libraries",
        topics: [
          ["p0-numpy", "NumPy — arrays & vectorized math"],
          ["p0-pandas", "Pandas — dataframes"],
          ["p0-mpl", "Matplotlib — plotting"],
          ["p0-sns", "Seaborn — statistical plots"],
        ],
      },
    ],
  },
  {
    number: 1,
    title: "Mathematical Foundations",
    icon: "📐",
    accent: "from-violet-500 to-indigo-500",
    subtitle:
      "The math behind ML. Aim for intuition, not proofs — this is where visuals shine most.",
    sections: [
      {
        title: "Linear Algebra",
        topics: [
          ["p1-la-scalars", "Scalars, Vectors, Tensors"],
          ["p1-la-matops", "Matrix & matrix operations"],
          ["p1-la-det", "Determinants & inverse of a matrix"],
          ["p1-la-eig", "Eigenvalues & diagonalization"],
          ["p1-la-svd", "Singular Value Decomposition (SVD)"],
        ],
        res: [
          {
            n: 16,
            star: true,
            note: "See eigenvectors & matrix transforms as live geometry.",
          },
        ],
      },
      {
        title: "Calculus",
        topics: [
          ["p1-cal-deriv", "Derivatives & partial derivatives"],
          ["p1-cal-chain", "Chain rule — this IS backpropagation"],
          ["p1-cal-grad", "Gradient, Jacobian, Hessian"],
        ],
        res: [
          {
            n: 18,
            star: true,
            note: "Watch a gradient descend a loss surface — the core of all training.",
          },
          {
            n: 2,
            note: "Animated gradient descent & the math behind optimization.",
          },
        ],
      },
      {
        title: "Statistics & Probability",
        topics: [
          ["p1-st-prob", "Basics of probability"],
          ["p1-st-desc", "Descriptive statistics"],
          ["p1-st-dist", "Types of distribution"],
          ["p1-st-rv", "Random variables & PDFs"],
          ["p1-st-bayes", "Bayes' Theorem"],
          ["p1-st-inf", "Inferential statistics"],
          ["p1-st-charts", "Graphs & charts"],
        ],
        res: [
          {
            n: 15,
            star: true,
            note: "Probability, distributions & Bayes as interactive animations. Do it all.",
          },
          { n: 16, note: "Conditional probability & Markov chains, visually." },
        ],
      },
      {
        title: "Discrete Mathematics",
        topics: [
          ["p1-dm", "Basic concepts (sets, logic, combinatorics, graphs)"],
        ],
      },
    ],
  },
  {
    number: 2,
    title: "Data Engineering",
    icon: "🗄️",
    accent: "from-cyan-500 to-sky-500",
    subtitle:
      "Real ML is 80% data work. Get it, clean it, and shape it before modeling.",
    sections: [
      {
        title: "Data Sources & Collection",
        topics: [
          ["p2-db", "Databases (SQL, NoSQL)"],
          ["p2-api", "Internet APIs"],
          ["p2-iot", "Mobile apps & IoT"],
        ],
      },
      {
        title: "Data Formats",
        topics: [
          ["p2-csv", "CSV & Excel"],
          ["p2-json", "JSON"],
          ["p2-parquet", "Parquet"],
          ["p2-other", "Other formats"],
        ],
      },
      {
        title: "Data Cleaning & Preprocessing",
        topics: [
          ["p2-prep", "Preprocessing techniques"],
          ["p2-clean", "Data cleaning (missing values, outliers)"],
          ["p2-fe", "Feature engineering"],
          ["p2-fs", "Feature selection"],
          ["p2-scale", "Feature scaling & normalization"],
        ],
      },
      {
        title: "Dimensionality Reduction",
        topics: [["p2-pca", "Principal Component Analysis (PCA)"]],
        res: [
          {
            n: 16,
            star: true,
            note: "Watch PCA rotate & project data — the clearest PCA demo anywhere.",
          },
          { n: 26, note: "Explore high-dimensional data reduced to 3D." },
        ],
      },
    ],
  },
  {
    number: 3,
    title: "Core Machine Learning",
    icon: "🤖",
    accent: "from-fuchsia-500 to-pink-500",
    subtitle:
      "The heart of the roadmap. Classical algorithms teach how learning works.",
    sections: [
      {
        title: "Foundations",
        topics: [
          ["p3-what", "What is Machine Learning?"],
          ["p3-types", "Types of ML (supervised → reinforcement)"],
        ],
        res: [
          {
            n: 20,
            star: true,
            note: "A scrolling animated story of how a model learns. Start here.",
          },
        ],
      },
      {
        title: "Supervised Learning",
        topics: [
          ["p3-sup-what", "What is supervised learning? (labeled data)"],
        ],
      },
      {
        title: "Classification",
        topics: [
          ["p3-cls-log", "Logistic Regression"],
          ["p3-cls-knn", "K-Nearest Neighbors (KNN)"],
          ["p3-cls-svm", "Support Vector Machines (SVM)"],
          ["p3-cls-tree", "Decision Trees & Random Forest"],
          ["p3-cls-gbm", "Gradient Boosting Machines"],
        ],
        res: [
          {
            n: 19,
            star: true,
            note: "Drag in points; watch KNN, SVM & Trees draw boundaries side by side.",
          },
          { n: 20, note: "How a decision tree splits data." },
        ],
      },
      {
        title: "Regression",
        topics: [
          ["p3-reg-lin", "Linear Regression"],
          ["p3-reg-poly", "Polynomial Regression"],
          ["p3-reg-lr", "Lasso & Ridge"],
          ["p3-reg-en", "ElasticNet Regularization"],
        ],
        res: [
          { n: 3, note: "Interactive linear regression & classification." },
        ],
      },
      {
        title: "Unsupervised Learning",
        topics: [
          ["p3-uns-what", "What is unsupervised learning? (finding structure)"],
        ],
      },
      {
        title: "Clustering",
        topics: [
          ["p3-clu-exc", "Exclusive clustering"],
          ["p3-clu-ovl", "Overlapping clustering"],
          ["p3-clu-hier", "Hierarchical clustering"],
          ["p3-clu-prob", "Probabilistic clustering"],
        ],
        res: [
          {
            n: 22,
            star: true,
            note: "Place centroids, watch K-means converge. Try overlapping clusters.",
          },
          { n: 23, note: "Why DBSCAN handles shapes K-means can't." },
        ],
      },
      {
        title: "Dimensionality Reduction",
        topics: [
          ["p3-dr-pca", "PCA (revisit with real data)"],
          ["p3-dr-ae", "Autoencoders (preview)"],
        ],
        res: [
          { n: 16, note: "PCA as geometry." },
          { n: 26, note: "Reduce & explore embeddings in 3D." },
        ],
      },
      {
        title: "Reinforcement Learning",
        topics: [
          ["p3-rl-what", "What is reinforcement learning?"],
          ["p3-rl-q", "Q-Learning"],
          ["p3-rl-dqn", "Deep-Q Networks (DQN)"],
          ["p3-rl-pg", "Policy Gradient"],
          ["p3-rl-ac", "Actor-Critic Methods"],
        ],
        res: [
          {
            n: 27,
            star: true,
            note: "Watch an agent learn a gridworld via Q-learning & policy gradients.",
          },
        ],
      },
    ],
  },
  {
    number: 4,
    title: "Model Evaluation",
    icon: "🎯",
    accent: "from-amber-500 to-orange-500",
    subtitle:
      "How do you know a model is good? Learn this before deep learning — it applies to everything.",
    sections: [
      {
        title: "Fundamentals",
        topics: [["p4-what", "What is model evaluation & why it matters"]],
      },
      {
        title: "Metrics",
        topics: [
          ["p4-m-apr", "Accuracy · Precision · Recall · F1-Score"],
          ["p4-m-roc", "ROC-AUC · Log Loss"],
          ["p4-m-cm", "Confusion Matrix"],
        ],
      },
      {
        title: "The Bias–Variance Tradeoff",
        topics: [["p4-bv", "Understand overfitting (complexity can hurt)"]],
        res: [
          {
            n: 21,
            star: true,
            note: "Watch a deeper tree overfit — the clearest bias-variance picture.",
          },
        ],
      },
      {
        title: "Validation Techniques",
        topics: [
          ["p4-kfold", "K-Fold Cross Validation"],
          ["p4-loocv", "LOOCV (Leave-One-Out)"],
        ],
      },
      {
        title: "Scikit-learn Workflow",
        topics: [["p4-sk", "Load → split → prep → select → tune → predict"]],
      },
    ],
  },
  {
    number: 5,
    title: "Deep Learning",
    icon: "🧠",
    accent: "from-indigo-500 to-violet-600",
    subtitle:
      "Neural networks — the biggest, most visual phase. Use every playground here.",
    sections: [
      {
        title: "Neural Network Basics",
        topics: [
          ["p5-nn-perc", "Perceptron & Multi-layer Perceptrons"],
          ["p5-nn-fwd", "Forward propagation"],
          ["p5-nn-bwd", "Back propagation (remember the chain rule)"],
          ["p5-nn-act", "Activation functions"],
          ["p5-nn-loss", "Loss functions"],
        ],
        res: [
          {
            n: 1,
            star: true,
            note: "THE sandbox. Add layers, change activations, watch boundaries form live.",
          },
          { n: 4, note: "Solve the spiral — feel why depth matters." },
          { n: 3, note: "Watch signals propagate through the net." },
          { n: 2, note: "Animated backpropagation & the math." },
        ],
      },
      {
        title: "Optimization",
        topics: [["p5-opt", "Gradient descent variants (SGD, Momentum, Adam)"]],
        res: [
          {
            n: 18,
            star: true,
            note: "Compare SGD vs Momentum vs Adam on one landscape.",
          },
        ],
      },
      {
        title: "Convolutional Neural Networks",
        topics: [
          ["p5-cnn-conv", "Convolution"],
          ["p5-cnn-pad", "Padding"],
          ["p5-cnn-stride", "Strides"],
          ["p5-cnn-pool", "Pooling"],
        ],
        res: [
          {
            n: 11,
            star: true,
            note: "Click any layer to see feature maps & filters. The clearest CNN explainer.",
          },
          { n: 13, note: "Drag filters to see what convolution does." },
          { n: 12, note: "Compare how VGG/ResNet/MobileNet extract features." },
          { n: 14, note: "Rotate LeNet/AlexNet/YOLO in 3D." },
        ],
      },
      {
        title: "Applications of CNNs",
        topics: [
          ["p5-app-cls", "Image classification"],
          ["p5-app-seg", "Image segmentation"],
          ["p5-app-rec", "Image & video recognition"],
          ["p5-app-recsys", "Recommendation systems"],
        ],
      },
      {
        title: "Recurrent Neural Networks",
        topics: [
          ["p5-rnn", "RNN"],
          ["p5-gru", "GRU"],
          ["p5-lstm", "LSTM"],
        ],
      },
      {
        title: "Attention & Transformers",
        topics: [
          ["p5-att", "Attention mechanisms"],
          ["p5-self", "Self-Attention"],
          ["p5-mha", "Multi-head Attention"],
          ["p5-tf", "Transformers"],
        ],
        res: [
          {
            n: 7,
            star: true,
            note: 'Read first if "Attention Is All You Need" confused you.',
          },
          { n: 6, note: "Type a prompt: tokenize → attention → prediction." },
          { n: 5, note: "A full GPT rendered in 3D." },
          { n: 9, note: "How attention heads specialize." },
          { n: 10, note: "Inspect attention heads on your own sentences." },
          { n: 8, note: "Step-by-step visual of text generation." },
        ],
      },
      {
        title: "Autoencoders",
        topics: [["p5-ae", "Encoder/decoder, latent space, reconstruction"]],
      },
      {
        title: "Generative Adversarial Networks",
        topics: [
          ["p5-gan", "Generator vs discriminator, adversarial training"],
        ],
        res: [
          {
            n: 24,
            star: true,
            note: "Train a GAN in-browser; watch the two networks compete.",
          },
        ],
      },
      {
        title: "Deep Learning Libraries",
        topics: [
          ["p5-lib-tf", "TensorFlow · Keras"],
          ["p5-lib-pt", "PyTorch · Scikit-learn"],
        ],
        res: [{ n: 28, note: "Inspect any model you download as a graph." }],
      },
    ],
  },
  {
    number: 6,
    title: "Advanced Concepts",
    icon: "🚀",
    accent: "from-rose-500 to-fuchsia-600",
    subtitle:
      "Specializations after the core. Pick by interest and career direction.",
    sections: [
      {
        title: "Natural Language Processing",
        topics: [
          ["p6-tok", "Tokenization"],
          ["p6-stem", "Stemming"],
          ["p6-lem", "Lemmatization"],
          ["p6-emb", "Embeddings"],
          ["p6-attm", "Attention models"],
        ],
        res: [
          {
            n: 26,
            star: true,
            note: "Load Word2Vec/GloVe; see similar words cluster in 3D.",
          },
          { n: 8, note: "How a language model generates text." },
        ],
      },
      {
        title: "Generative / Diffusion Models",
        topics: [["p6-diff", "The diffusion process (noise → image)"]],
        res: [
          {
            n: 25,
            star: true,
            note: "Watch Stable Diffusion turn noise into an image.",
          },
        ],
      },
      {
        title: "Explainable AI",
        topics: [["p6-xai", "Interpretability & trust — why it matters"]],
        res: [
          {
            n: 17,
            star: true,
            note: 'Interactive articles on how networks "see".',
          },
        ],
      },
    ],
  },
];

// Phase-completion badge metadata
const PHASE_BADGE = {
  0: { icon: "🐍", name: "Python Pathfinder" },
  1: { icon: "📐", name: "Math Magus" },
  2: { icon: "🗄️", name: "Data Whisperer" },
  3: { icon: "🤖", name: "Model Maker" },
  4: { icon: "🎯", name: "Sharpshooter" },
  5: { icon: "🧠", name: "Deep Diver" },
  6: { icon: "🚀", name: "Frontier Explorer" },
};

const LEVEL_TITLES = [
  "Curious Mind",
  "Code Initiate",
  "Math Apprentice",
  "Data Wrangler",
  "ML Practitioner",
  "Model Builder",
  "Deep Learner",
  "Neural Architect",
  "AI Specialist",
  "ML Expert",
  "ML Master",
];

const XP_PER_TOPIC = 10;
const XP_PER_LEVEL = 100;

/* ---------------------------------------------------------------------------
   3. DERIVED CONSTANTS
   ------------------------------------------------------------------------- */
const ALL_TOPIC_IDS = CURRICULUM.flatMap((p) =>
  p.sections.flatMap((s) => s.topics.map((t) => t[0])),
);
const TOTAL_TOPICS = ALL_TOPIC_IDS.length;
const phaseTopicIds = (i) =>
  CURRICULUM[i].sections.flatMap((s) => s.topics.map((t) => t[0]));

/* ---------------------------------------------------------------------------
   4. STATE + PERSISTENCE
   ------------------------------------------------------------------------- */
const STORE_KEY = "ml-quest-v1";
const DEFAULT_STATE = {
  done: {},
  visited: {},
  unlock: {},
  open: {},
  badges: {},
  sound: true,
  log: {}, // { "YYYY-MM-DD": [topicId, ...] } — dates ML topics were completed
  phaseLog: {}, // { "YYYY-MM-DD": [phaseNumber, ...] } — dates phases were cleared
};
let state = load();

function load() {
  try {
    const raw = localStorage.getItem(STORE_KEY);
    if (!raw) return structuredClone(DEFAULT_STATE);
    const parsed = JSON.parse(raw);
    return Object.assign(structuredClone(DEFAULT_STATE), parsed);
  } catch {
    return structuredClone(DEFAULT_STATE);
  }
}
function save() {
  try {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  } catch {}
}

// Local (not UTC) ISO date key, e.g. "2026-07-06"
function todayKey() {
  const d = new Date();
  const p = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${p(d.getMonth() + 1)}-${p(d.getDate())}`;
}
// Record that a topic was completed today (for the Calendar's auto-log)
function logTopic(id) {
  const k = todayKey();
  (state.log[k] = state.log[k] || []);
  if (!state.log[k].includes(id)) state.log[k].push(id);
}
function unlogTopic(id) {
  for (const k of Object.keys(state.log)) {
    state.log[k] = state.log[k].filter((x) => x !== id);
    if (!state.log[k].length) delete state.log[k];
  }
}
function logPhase(num) {
  const k = todayKey();
  (state.phaseLog[k] = state.phaseLog[k] || []);
  if (!state.phaseLog[k].includes(num)) state.phaseLog[k].push(num);
}

/* ---------- derived getters ---------- */
const completedCount = () =>
  ALL_TOPIC_IDS.reduce((n, id) => n + (state.done[id] ? 1 : 0), 0);
const visitedCount = () =>
  Object.keys(state.visited).filter((k) => state.visited[k]).length;
const phaseDone = (i) =>
  phaseTopicIds(i).reduce((n, id) => n + (state.done[id] ? 1 : 0), 0);
const phaseComplete = (i) => phaseDone(i) === phaseTopicIds(i).length;
const xp = () => completedCount() * XP_PER_TOPIC;
const level = () =>
  Math.min(LEVEL_TITLES.length, Math.floor(xp() / XP_PER_LEVEL) + 1);
const rankTitle = () => LEVEL_TITLES[level() - 1];
const overallPct = () => Math.round((completedCount() / TOTAL_TOPICS) * 100);

// A phase is unlocked if it's the first, the previous phase is complete, or manually unlocked.
const isUnlocked = (i) => i === 0 || phaseComplete(i - 1);
// Current = first unlocked phase that isn't fully complete.
function currentPhase() {
  for (let i = 0; i < CURRICULUM.length; i++) {
    if (isUnlocked(i) && !phaseComplete(i)) return i;
  }
  return CURRICULUM.length - 1;
}

/* ---------------------------------------------------------------------------
   5. BADGES
   ------------------------------------------------------------------------- */
function buildBadges() {
  const b = [
    {
      id: "first",
      icon: "🌱",
      name: "First Steps",
      desc: "Complete your first topic",
      test: () => completedCount() >= 1,
    },
    {
      id: "ten",
      icon: "🔥",
      name: "Warming Up",
      desc: "Complete 10 topics",
      test: () => completedCount() >= 10,
    },
    {
      id: "quarter",
      icon: "📈",
      name: "Quarter Master",
      desc: "Reach 25% of the journey",
      test: () => overallPct() >= 25,
    },
    {
      id: "explorer",
      icon: "🧭",
      name: "Explorer",
      desc: "Open 5 visual playgrounds",
      test: () => visitedCount() >= 5,
    },
    {
      id: "half",
      icon: "⚡",
      name: "Halfway Hero",
      desc: "Reach 50% of the journey",
      test: () => overallPct() >= 50,
    },
  ];
  CURRICULUM.forEach((p, i) =>
    b.push({
      id: "phase-" + i,
      icon: PHASE_BADGE[i].icon,
      name: PHASE_BADGE[i].name,
      desc: `Complete Phase ${p.number}: ${p.title}`,
      test: () => phaseComplete(i),
    }),
  );
  b.push({
    id: "scholar",
    icon: "👁️",
    name: "Visual Scholar",
    desc: "Open 15 visual playgrounds",
    test: () => visitedCount() >= 15,
  });
  b.push({
    id: "allviz",
    icon: "🔭",
    name: "Completionist",
    desc: "Open all 28 playgrounds",
    test: () => visitedCount() >= 28,
  });
  b.push({
    id: "master",
    icon: "👑",
    name: "ML Master",
    desc: "Complete the entire journey",
    test: () => overallPct() >= 100,
  });
  return b;
}
const BADGES = buildBadges();
const earnedBadgeIds = () =>
  new Set(BADGES.filter((x) => x.test()).map((x) => x.id));

/* ---------------------------------------------------------------------------
   6. DOM HELPERS
   ------------------------------------------------------------------------- */
const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const esc = (s) =>
  String(s).replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c],
  );

/* ---------------------------------------------------------------------------
   7. RENDERING  (build static structure once; numbers updated separately)
   ------------------------------------------------------------------------- */
function resourceCardHTML(r) {
  const R = RESOURCES[r.n];
  const visited = state.visited[r.n] ? "visited" : "";
  const star = r.star
    ? '<span class="text-amber-300 text-xs ml-1" title="Most important here">★</span>'
    : "";
  const numCls = r.star
    ? "bg-gradient-to-br from-amber-400 to-orange-500 text-black"
    : "bg-white/8 text-cyan-200";
  return `
    <a class="res ${visited} group flex items-center gap-3 p-3 rounded-2xl bg-white/[.03] border border-white/8"
       data-res="${r.n}" href="${R.url}" target="_blank" rel="noopener noreferrer">
      <span class="rnum shrink-0 w-9 h-9 rounded-xl grid place-items-center font-display font-bold text-xs ${numCls} transition">${r.n}</span>
      <span class="grow min-w-0">
        <span class="block font-display font-semibold text-[13.5px] text-white/90 truncate">${esc(R.name)}${star}</span>
        <span class="block text-[12px] text-white/45 truncate">${esc(r.note || R.short)}</span>
      </span>
      <span class="ropen shrink-0 text-[11px] font-semibold text-cyan-200 whitespace-nowrap">Open&nbsp;↗</span>
    </a>`;
}

function topicHTML(t, pi) {
  const [id, label] = t;
  const done = state.done[id] ? "done" : "";
  return `
    <button class="topic ${done} w-full flex items-center gap-3 py-2 px-2.5 rounded-xl text-left"
            data-topic="${id}" data-pi="${pi}">
      <span class="cbx shrink-0 w-6 h-6 rounded-lg border-2 border-white/20 grid place-items-center bg-white/[.03]">
        <svg viewBox="0 0 24 24" class="w-4 h-4" fill="none" stroke="white" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12.5l4 4L19 7" />
        </svg>
      </span>
      <span class="label grow text-[14px] text-white/85 leading-snug">${esc(label)}</span>
      <span class="xp-chip shrink-0 text-[10px] font-display font-bold text-cyan-200/90 px-2 py-0.5 rounded-full bg-cyan-400/10">+${XP_PER_TOPIC} XP</span>
    </button>`;
}

function sectionHTML(s, pi) {
  const topics = s.topics.map((t) => topicHTML(t, pi)).join("");
  let res = "";
  if (s.res && s.res.length) {
    res = `
      <div class="mt-3 ml-1 pl-3 border-l-2 border-fuchsia-500/30">
        <div class="flex items-center gap-2 mb-2">
          <span class="text-[10px] font-display font-bold tracking-widest text-fuchsia-300/90 uppercase">▶ Visualize</span>
          <span class="text-[10px] text-white/30">— play with these before moving on</span>
        </div>
        <div class="grid sm:grid-cols-2 gap-2">${s.res.map(resourceCardHTML).join("")}</div>
      </div>`;
  }
  return `
    <div class="sec">
      <h4 class="font-display font-semibold text-[13px] uppercase tracking-wider text-white/45 mb-1.5 mt-1">${esc(s.title)}</h4>
      <div class="topics">${topics}</div>
      ${res}
    </div>`;
}

function phaseHTML(p, i) {
  const sections = p.sections
    .map((s) => sectionHTML(s, i))
    .join('<div class="h-4"></div>');
  const total = phaseTopicIds(i).length;
  return `
    <article class="phase reveal glass rounded-3xl overflow-hidden" data-pi="${i}" id="phase-${i}">
      <button class="phase-header w-full flex items-center gap-4 p-4 sm:p-5 text-left" data-toggle="${i}">
        <div class="pnum shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-white/[.06] grid place-items-center text-2xl border border-white/10">
          <span data-pnum-icon>${p.icon}</span>
        </div>
        <div class="grow min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-[10px] font-display font-bold tracking-widest text-white/40 uppercase">Phase ${p.number}</span>
            <span data-badge-done="${i}" class="hidden text-[10px] font-bold text-emerald-300 bg-emerald-400/15 px-2 py-0.5 rounded-full">✓ CLEARED</span>
            <span data-badge-locked="${i}" class="hidden text-[10px] font-bold text-amber-200/90 bg-amber-400/10 px-2 py-0.5 rounded-full">🔒 LOCKED · PREVIEW</span>
          </div>
          <h3 class="font-display font-bold text-lg sm:text-xl tracking-tight text-white leading-tight">${esc(p.title)}</h3>
          <p class="text-white/45 text-[12.5px] mt-0.5 pr-4 hidden sm:block">${esc(p.subtitle)}</p>
          <div class="mt-2.5 flex items-center gap-3">
            <div class="grow h-2 rounded-full bg-white/8 overflow-hidden max-w-xs">
              <div class="pbar-fill h-full grad-line rounded-full" data-pfill="${i}" style="width:0%"></div>
            </div>
            <span class="text-[11px] text-white/50 tabular-nums shrink-0"><span data-pdone="${i}">0</span>/${total}</span>
          </div>
        </div>
        <div class="shrink-0 flex flex-col items-end gap-2">
          <span data-ppct="${i}" class="font-display font-bold text-lg tabular-nums text-white/80">0%</span>
          <svg class="chev w-5 h-5 text-white/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 9l6 6 6-6"/></svg>
        </div>
      </button>

      <div class="acc" data-acc="${i}">
        <div class="acc-inner">
          <div class="lock-note items-center gap-2.5 mx-4 sm:mx-5 mt-4 px-3.5 py-2.5 rounded-xl bg-amber-400/10 border border-amber-400/25 text-amber-100/90 text-[12.5px] leading-snug">
            <span class="text-base shrink-0">🔒</span>
            <span>Preview only — finish <span class="font-semibold text-amber-100">Phase ${p.number - 1}</span> to unlock this phase and start checking topics off.</span>
          </div>
          <div class="px-4 sm:px-5 pb-5 pt-1 border-t border-white/8">${sections}</div>
        </div>
      </div>
    </article>`;
}

function journeyHTML() {
  const nodes = CURRICULUM.map(
    (p, i) => `
    <button class="jitem group relative flex items-center gap-3 w-full py-2" data-jump="${i}">
      <span class="node z-10 shrink-0 w-11 h-11 rounded-2xl grid place-items-center font-display font-bold border border-white/10" data-node="${i}">
        <span data-node-inner="${i}">${p.number}</span>
      </span>
      <span class="text-left leading-tight">
        <span class="block text-[9px] uppercase tracking-widest text-white/35">Phase ${p.number}</span>
        <span class="block text-[12.5px] font-medium text-white/70 group-hover:text-white transition">${esc(p.title)}</span>
      </span>
    </button>`,
  ).join("");
  return `
    <div class="absolute left-[22px] top-4 bottom-4 w-[3px] bg-white/8 rounded-full overflow-hidden">
      <div id="rail-fill" class="rail-fill absolute top-0 left-0 right-0 grad-line rounded-full" style="height:0%"></div>
    </div>
    <div class="relative space-y-1">${nodes}</div>`;
}

function badgeHTML(b) {
  return `
    <div class="badge glass rounded-2xl p-4 text-center border-white/8" data-badge="${b.id}" title="${esc(b.desc)}">
      <div class="text-3xl mb-2" data-badge-icon>${b.icon}</div>
      <div class="font-display font-semibold text-[13px] text-white/90 leading-tight">${esc(b.name)}</div>
      <div class="text-[11px] text-white/45 mt-1 leading-snug">${esc(b.desc)}</div>
      <div class="mt-2 text-[10px] font-bold uppercase tracking-wider" data-badge-status></div>
    </div>`;
}

function resourceIndexHTML() {
  return Object.entries(RESOURCES)
    .map(([n, R]) => {
      const visited = state.visited[n] ? "visited" : "";
      return `
      <a class="res ${visited} group flex items-center gap-3 p-3 rounded-2xl glass border-white/8" data-res="${n}" href="${R.url}" target="_blank" rel="noopener noreferrer">
        <span class="rnum shrink-0 w-9 h-9 rounded-xl grid place-items-center font-display font-bold text-xs bg-white/8 text-cyan-200 transition">${n}</span>
        <span class="grow min-w-0">
          <span class="block font-display font-semibold text-[13.5px] text-white/90 truncate">${esc(R.name)}</span>
          <span class="block text-[12px] text-white/45 truncate">${esc(R.short)}</span>
        </span>
        <span class="ropen shrink-0 text-[11px] font-semibold text-cyan-200">Open&nbsp;↗</span>
      </a>`;
    })
    .join("");
}

// null-safe DOM setters — each page only contains the elements it needs
const setText = (sel, v) => { const el = $(sel); if (el) el.textContent = v; };
const setHTML = (sel, v) => { const el = $(sel); if (el) el.innerHTML = v; };
const setStyle = (sel, prop, v) => { const el = $(sel); if (el) el.style[prop] = v; };

function render() {
  // default accordion state: open only the current phase (first run)
  if (Object.keys(state.open).length === 0) {
    state.open[currentPhase()] = true;
  }
  setHTML("#journey", journeyHTML());
  setHTML("#phases", CURRICULUM.map(phaseHTML).join(""));
  setHTML("#badges", BADGES.map(badgeHTML).join(""));
  setHTML("#resource-index", resourceIndexHTML());
  setText("#stat-total", TOTAL_TOPICS);
  setText("#badge-total", BADGES.length);
  setupReveal();
  updateAll();
}

/* ---------------------------------------------------------------------------
   8. UPDATE (numbers, bars, states — no structural changes)
   ------------------------------------------------------------------------- */
function updateAll() {
  const done = completedCount();
  const pct = overallPct();
  const lv = level();
  const xpNow = xp();
  const xpInto = Math.min(XP_PER_LEVEL, xpNow - (lv - 1) * XP_PER_LEVEL);
  const atMax = lv === LEVEL_TITLES.length;

  // HUD (present on every page)
  setText("#hud-level", lv);
  setText("#hud-rank", rankTitle());
  setStyle("#hud-xp-fill", "width", (atMax ? 100 : (xpInto / XP_PER_LEVEL) * 100) + "%");
  setText("#hud-xp-text", atMax ? `${xpNow} XP · MAX` : `${xpInto} / ${XP_PER_LEVEL} XP`);
  setText("#hud-progress", pct + "%");

  // Hero ring + header stats (only where present)
  setStyle("#ring-fill", "strokeDashoffset", 326.7 * (1 - pct / 100));
  setText("#ring-pct", pct + "%");
  setText("#ring-sub", `Level ${lv} · ${rankTitle()}`);
  setText("#stat-topics", done);
  setText("#stat-resources", visitedCount());
  setText("#stat-badges", earnedBadgeIds().size);

  const cur = currentPhase();

  // Journey rail + nodes (only on the Path page)
  if ($("#journey")) {
    const railPct =
      (CURRICULUM.reduce((n, _, i) => n + (phaseComplete(i) ? 1 : 0), 0) /
        CURRICULUM.length) *
      100;
    setStyle("#rail-fill", "height", railPct + "%");
    CURRICULUM.forEach((_, i) => {
      const node = $(`[data-node="${i}"]`);
      const inner = $(`[data-node-inner="${i}"]`);
      if (!node || !inner) return;
      node.classList.remove("done", "current", "unlocked", "locked");
      if (phaseComplete(i)) {
        node.classList.add("done");
        inner.textContent = "✓";
      } else if (i === cur) {
        node.classList.add("current");
        inner.textContent = CURRICULUM[i].number;
      } else if (isUnlocked(i)) {
        node.classList.add("unlocked");
        inner.textContent = CURRICULUM[i].number;
      } else {
        node.classList.add("locked");
        inner.innerHTML = "🔒";
      }
    });
  }

  // Phase cards (only on the Path page)
  if ($("#phases")) {
    CURRICULUM.forEach((_, i) => {
      const card = $(`#phase-${i}`);
      if (!card) return;
      const total = phaseTopicIds(i).length;
      const d = phaseDone(i);
      const p = Math.round((d / total) * 100);
      setStyle(`[data-pfill="${i}"]`, "width", p + "%");
      setText(`[data-pdone="${i}"]`, d);
      setText(`[data-ppct="${i}"]`, p + "%");
      const unlocked = isUnlocked(i);
      const complete = phaseComplete(i);
      card.classList.toggle("locked", !unlocked);
      card.classList.toggle("current", unlocked && !complete && i === cur);
      card.classList.toggle("done", complete);
      card.classList.toggle("open", !!state.open[i]);
      const bd = $(`[data-badge-done="${i}"]`);
      if (bd) bd.classList.toggle("hidden", !complete);
      const bl = $(`[data-badge-locked="${i}"]`);
      if (bl) bl.classList.toggle("hidden", unlocked);
    });
  }

  // Topics (Path page; already null-guarded)
  ALL_TOPIC_IDS.forEach((id) => {
    const el = $(`[data-topic="${id}"]`);
    if (el) el.classList.toggle("done", !!state.done[id]);
  });

  // Resources visited (Path inline + Playgrounds page)
  $$("[data-res]").forEach((el) =>
    el.classList.toggle("visited", !!state.visited[el.dataset.res]),
  );

  // Badges (Trophy page)
  const earned = earnedBadgeIds();
  setText("#badge-count", earned.size);
  if ($("#badges")) {
    BADGES.forEach((b) => {
      const el = $(`[data-badge="${b.id}"]`);
      if (!el) return;
      const has = earned.has(b.id);
      el.classList.toggle("earned", has);
      el.classList.toggle("locked", !has);
      const status = $("[data-badge-status]", el);
      if (status) {
        status.textContent = has ? "Unlocked" : "Locked";
        status.style.color = has ? "#6ee7b7" : "rgba(255,255,255,.3)";
      }
    });
  }

  // Sound icon (present on every page)
  setText("#icon-sound", state.sound ? "🔊" : "🔇");
}

/* ---------------------------------------------------------------------------
   9. GAME MECHANICS — toggling, milestones, celebration
   ------------------------------------------------------------------------- */
function snapshot() {
  return {
    level: level(),
    phases: CURRICULUM.map((_, i) => phaseComplete(i)),
    badges: earnedBadgeIds(),
  };
}

function toggleTopic(id, pi, rowEl) {
  // Locked phases are preview-only — topics can be read but not checked off.
  if (!isUnlocked(pi)) {
    toast("🔒", "Phase locked", `Finish Phase ${CURRICULUM[pi].number - 1} to unlock this.`);
    sfx("uncheck");
    return;
  }
  const wasDone = !!state.done[id];
  const before = snapshot();

  if (wasDone) {
    delete state.done[id];
    unlogTopic(id);
  } else {
    state.done[id] = true;
    logTopic(id);
  }
  save();

  // instant visual feedback on the row
  rowEl.classList.toggle("done", !wasDone);
  const cbx = $(".cbx", rowEl);
  if (!wasDone) {
    cbx.classList.remove("pop");
    void cbx.offsetWidth;
    cbx.classList.add("pop");
    xpFloat(rowEl, `+${XP_PER_TOPIC} XP`);
  }

  updateAll();

  const after = snapshot();

  if (wasDone) {
    sfx("uncheck");
    return;
  }

  // ----- celebrations (only when checking ON) -----
  let celebrated = false;

  // level up?
  if (after.level > before.level) {
    showLevelUp(after.level);
    celebrated = true;
  }

  // phase newly completed?
  after.phases.forEach((c, i) => {
    if (c && !before.phases[i]) {
      burst(0.5, 0.4);
      logPhase(CURRICULUM[i].number);
      toast(
        "🏆",
        `Phase ${CURRICULUM[i].number} cleared!`,
        `${CURRICULUM[i].title} — nicely done.`,
      );
      // auto-open the next phase now that it's unlocked
      const next = i + 1;
      if (next < CURRICULUM.length) {
        state.open[next] = true;
      }
      celebrated = true;
    }
  });

  // 100% ?
  if (
    before.badges &&
    !before.badges.has("master") &&
    after.badges.has("master")
  ) {
    finale();
    celebrated = true;
  }

  // newly earned badges (excluding phase/master already toasted/handled)
  after.badges.forEach((id2) => {
    if (!before.badges.has(id2)) {
      const b = BADGES.find((x) => x.id === id2);
      if (!b) return;
      if (id2 === "master") return; // handled by finale
      if (id2.startsWith("phase-")) {
        // already toasted above, just pop the badge
        pulseBadge(id2);
        return;
      }
      toast(b.icon, "Achievement!", b.name);
      pulseBadge(id2);
    }
  });

  if (!celebrated) sfx("check");
  else sfx("level");

  // re-apply open class if we changed it
  updateAll();
}

function pulseBadge(id) {
  const el = $(`[data-badge="${id}"] [data-badge-icon]`);
  if (!el) return;
  const card = el.closest(".badge");
  card.classList.remove("just-earned");
  void card.offsetWidth;
  card.classList.add("just-earned");
}

/* ---------------------------------------------------------------------------
   10. EFFECTS — xp float, toast, confetti, level-up modal, sound
   ------------------------------------------------------------------------- */
function xpFloat(anchor, text) {
  const r = anchor.getBoundingClientRect();
  const el = document.createElement("div");
  el.className = "xpfloat";
  el.textContent = text;
  el.style.left = r.left + 34 + "px";
  el.style.top = r.top + 2 + "px";
  document.body.appendChild(el);
  setTimeout(() => el.remove(), 1000);
}

let toastTimer = 0;
function toast(icon, title, sub) {
  const wrap = $("#toast-wrap");
  const el = document.createElement("div");
  el.className =
    "toast glass rounded-2xl p-3.5 flex items-center gap-3 border-white/12 shadow-glow";
  el.innerHTML = `
    <div class="text-2xl shrink-0">${icon}</div>
    <div class="min-w-0">
      <div class="font-display font-bold text-[13px] text-white leading-tight">${esc(title)}</div>
      <div class="text-[12px] text-white/55 truncate">${esc(sub)}</div>
    </div>`;
  wrap.appendChild(el);
  requestAnimationFrame(() => el.classList.add("show"));
  setTimeout(() => {
    el.classList.add("hide");
    setTimeout(() => el.remove(), 500);
  }, 3600);
}

/* ---- Confetti (self-contained canvas) ---- */
const cvs = $("#confetti");
const ctx = cvs.getContext("2d");
let confettiParts = [];
let confettiRAF = 0;
function sizeCanvas() {
  cvs.width = innerWidth;
  cvs.height = innerHeight;
}
sizeCanvas();
addEventListener("resize", sizeCanvas);
const CONF_COLORS = [
  "#8b5cf6",
  "#ec4899",
  "#06b6d4",
  "#f59e0b",
  "#34d399",
  "#a78bfa",
  "#f0abfc",
];

function burst(cx = 0.5, cy = 0.5, count = 90) {
  const ox = cx * cvs.width,
    oy = cy * cvs.height;
  for (let i = 0; i < count; i++) {
    const a = (Math.PI * 2 * i) / count + Math.random();
    const speed = 4 + Math.random() * 8;
    confettiParts.push({
      x: ox,
      y: oy,
      vx: Math.cos(a) * speed,
      vy: Math.sin(a) * speed - 4,
      g: 0.16 + Math.random() * 0.12,
      size: 5 + Math.random() * 7,
      rot: Math.random() * 6.28,
      vr: (Math.random() - 0.5) * 0.4,
      color: CONF_COLORS[(Math.random() * CONF_COLORS.length) | 0],
      life: 1,
      decay: 0.008 + Math.random() * 0.008,
      shape: Math.random() < 0.5 ? "rect" : "circle",
    });
  }
  if (!confettiRAF) confettiRAF = requestAnimationFrame(stepConfetti);
}
function stepConfetti() {
  ctx.clearRect(0, 0, cvs.width, cvs.height);
  confettiParts = confettiParts.filter(
    (p) => p.life > 0 && p.y < cvs.height + 40,
  );
  confettiParts.forEach((p) => {
    p.vy += p.g;
    p.x += p.vx;
    p.y += p.vy;
    p.vx *= 0.99;
    p.rot += p.vr;
    p.life -= p.decay;
    ctx.save();
    ctx.globalAlpha = Math.max(0, p.life);
    ctx.translate(p.x, p.y);
    ctx.rotate(p.rot);
    ctx.fillStyle = p.color;
    if (p.shape === "rect")
      ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.6);
    else {
      ctx.beginPath();
      ctx.arc(0, 0, p.size / 2, 0, 6.28);
      ctx.fill();
    }
    ctx.restore();
  });
  if (confettiParts.length) confettiRAF = requestAnimationFrame(stepConfetti);
  else {
    confettiRAF = 0;
    ctx.clearRect(0, 0, cvs.width, cvs.height);
  }
}
function finale() {
  let n = 0;
  const iv = setInterval(() => {
    burst(Math.random(), Math.random() * 0.5, 70);
    if (++n >= 6) clearInterval(iv);
  }, 260);
  toast("👑", "ML MASTER!", "You completed the entire journey. Legendary.");
}

/* ---- Level up modal ---- */
function showLevelUp(newLevel) {
  burst(0.5, 0.35, 120);
  $("#levelup-level").textContent = newLevel;
  $("#levelup-rank").textContent = LEVEL_TITLES[newLevel - 1];
  const modal = $("#levelup");
  const medal = $("#levelup-medal");
  modal.classList.remove("pointer-events-none");
  modal.classList.add("show");
  medal.classList.remove("medal-spin");
  void medal.offsetWidth;
  medal.classList.add("medal-spin");
  sfx("level");
}
function closeLevelUp() {
  const modal = $("#levelup");
  if (!modal) return;
  modal.classList.remove("show");
  setTimeout(() => modal.classList.add("pointer-events-none"), 400);
}

/* ---- Sound (Web Audio, no files) ---- */
let audio = null;
function ensureAudio() {
  if (!audio) {
    try {
      audio = new (window.AudioContext || window.webkitAudioContext)();
    } catch {}
  }
  if (audio && audio.state === "suspended") audio.resume();
}
function tone(freq, dur, when, type = "sine", vol = 0.18) {
  if (!audio) return;
  const o = audio.createOscillator(),
    g = audio.createGain();
  o.type = type;
  o.frequency.value = freq;
  const t = audio.currentTime + when;
  g.gain.setValueAtTime(0, t);
  g.gain.linearRampToValueAtTime(vol, t + 0.015);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g);
  g.connect(audio.destination);
  o.start(t);
  o.stop(t + dur + 0.02);
}
function sfx(kind) {
  if (!state.sound) return;
  ensureAudio();
  if (!audio) return;
  if (kind === "check") {
    tone(660, 0.12, 0, "triangle");
    tone(990, 0.12, 0.05, "triangle");
  } else if (kind === "uncheck") {
    tone(360, 0.12, 0, "sine", 0.12);
  } else if (kind === "level") {
    [523, 659, 784, 1047].forEach((f, i) =>
      tone(f, 0.22, i * 0.08, "triangle", 0.16),
    );
  } else if (kind === "open") {
    tone(500, 0.08, 0, "sine", 0.08);
  }
}

/* ---------------------------------------------------------------------------
   11. REVEAL ON SCROLL
   ------------------------------------------------------------------------- */
function setupReveal() {
  const items = $$(".reveal");
  if (
    !("IntersectionObserver" in window) ||
    matchMedia("(prefers-reduced-motion: reduce)").matches
  ) {
    items.forEach((el) => el.classList.add("in"));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.08 },
  );
  items.forEach((el) => io.observe(el));
}

/* ---------------------------------------------------------------------------
   12. EVENT WIRING (delegation)
   ------------------------------------------------------------------------- */
$("#phases")?.addEventListener("click", (e) => {
  // toggle a topic
  const topic = e.target.closest("[data-topic]");
  if (topic) {
    ensureAudio();
    toggleTopic(topic.dataset.topic, +topic.dataset.pi, topic);
    return;
  }

  // mark a resource visited (link still opens in new tab)
  const res = e.target.closest("[data-res]");
  if (res) {
    markVisited(res.dataset.res);
    return;
  }

  // toggle accordion
  const head = e.target.closest("[data-toggle]");
  if (head) {
    const i = +head.dataset.toggle;
    // locked phases can still be expanded to preview (but not checked off)
    state.open[i] = !state.open[i];
    save();
    $(`#phase-${i}`).classList.toggle("open", state.open[i]);
    sfx("open");
  }
});

// resource index clicks
$("#resource-index")?.addEventListener("click", (e) => {
  const res = e.target.closest("[data-res]");
  if (res) markVisited(res.dataset.res);
});

function markVisited(n) {
  if (state.visited[n]) return;
  const before = earnedBadgeIds();
  state.visited[n] = true;
  save();
  updateAll();
  const after = earnedBadgeIds();
  after.forEach((id) => {
    if (!before.has(id)) {
      const b = BADGES.find((x) => x.id === id);
      if (b) {
        toast(b.icon, "Achievement!", b.name);
        pulseBadge(id);
      }
    }
  });
}

// journey jump
$("#journey")?.addEventListener("click", (e) => {
  const j = e.target.closest("[data-jump]");
  if (!j) return;
  const i = +j.dataset.jump;
  state.open[i] = true;
  save();
  $(`#phase-${i}`)?.classList.add("open");
  document
    .getElementById("phase-" + i)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
});

// continue button → jump to current phase
$("#btn-continue")?.addEventListener("click", () => {
  const i = currentPhase();
  state.open[i] = true;
  save();
  updateAll();
  document
    .getElementById("phase-" + i)
    ?.scrollIntoView({ behavior: "smooth", block: "start" });
});

// sound toggle
$("#btn-sound")?.addEventListener("click", () => {
  state.sound = !state.sound;
  save();
  updateAll();
  if (state.sound) {
    ensureAudio();
    sfx("check");
  }
});

// reset
$("#btn-reset")?.addEventListener("click", () => {
  if (
    !confirm(
      "Reset all progress? This clears completed topics, visited tools, and badges.",
    )
  )
    return;
  state = structuredClone(DEFAULT_STATE);
  save();
  render();
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// level-up modal close
$("#levelup-close")?.addEventListener("click", closeLevelUp);
$("#levelup")?.addEventListener("click", (e) => {
  if (e.target.id === "levelup") closeLevelUp();
});
addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeLevelUp();
});

/* ---------------------------------------------------------------------------
   Calendar bridge — read-only ML activity log for calendar.js.
   Returns { topics: {date:[label,...]}, phases: {date:[num,...]} }.
   ------------------------------------------------------------------------- */
window.MLQuest = window.MLQuest || {};
window.MLQuest.getActivityLog = function () {
  const label = (id) => {
    for (const p of CURRICULUM)
      for (const s of p.sections)
        for (const t of s.topics) if (t[0] === id) return t[1];
    return id;
  };
  const topics = {};
  for (const [date, ids] of Object.entries(state.log || {})) {
    topics[date] = ids.map(label);
  }
  return { topics, phases: structuredClone(state.phaseLog || {}) };
};

/* ---------------------------------------------------------------------------
   13. GO
   ------------------------------------------------------------------------- */
render();
