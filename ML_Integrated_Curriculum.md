# 🎯 Integrated ML Curriculum

> A single learning path that merges the **roadmap.sh Machine Learning roadmap** (*what* to learn, in order)
> with the **28 Interactive Visualization Sites** (*how* to actually see and feel each concept).
>
> For every topic below, the exact visual resources to study **at that point** are attached inline.
> Work top to bottom. Don't skip a phase — each one is the prerequisite for the next.

---

## How to use this file

- ✅ **Check off** each topic as you complete it — this is your progress tracker.
- 🔗 When you reach a topic that has a **`▶ VISUALIZE`** block, stop reading and go *interact* with that site for ~30 min before moving on. Visual understanding sticks ~10× longer than reading.
- 🧭 Resources are numbered `[#1]`–`[#28]` matching the "28 Sites" list. The full index is at the bottom.
- ⭐ = the single most important resource for that topic.

**Suggested pace:** one **Phase** per 1–3 weeks depending on depth. Total path ≈ 4–8 months of consistent study.

---

# PHASE 0 — Programming Fundamentals

> You can't do ML without fluent Python. Build this first; everything else assumes it.

### Python
- [ ] Basic syntax
- [ ] Variables and data types
- [ ] Conditionals
- [ ] Loops
- [ ] Data structures (list, dict, set, tuple)
- [ ] Functions & built-in functions
- [ ] Exceptions
- [ ] Object-Oriented Programming (classes, inheritance)

### Essential Libraries
- [ ] **NumPy** — arrays, vectorized math (the backbone of all ML math)
- [ ] **Pandas** — dataframes, loading/cleaning tabular data
- [ ] **Matplotlib** — plotting
- [ ] **Seaborn** — statistical plots

*(No visualization sites for this phase — this is pure coding practice. Build 2–3 tiny scripts.)*

---

# PHASE 1 — Mathematical Foundations

> The math behind ML. You don't need to be a mathematician, but you need **intuition**. This is where the visual sites shine most.

### Linear Algebra
- [ ] Scalars, Vectors, Tensors
- [ ] Matrix & matrix operations
- [ ] Determinants, inverse of a matrix
- [ ] Eigenvalues, diagonalization
- [ ] Singular Value Decomposition (SVD)

> **▶ VISUALIZE**
> - ⭐ **[#16] Setosa Visual Explanations** — https://setosa.io/ev/ — *see* eigenvectors, PCA, and matrix transforms as live geometry. The best intuition-builder for linear algebra.

### Calculus
- [ ] Derivatives, partial derivatives
- [ ] Chain rule of derivation *(this is literally how backpropagation works — learn it well)*
- [ ] Gradient, Jacobian, Hessian

> **▶ VISUALIZE**
> - ⭐ **[#18] Gradient Descent Visualizer** — https://www.benfrederickson.com/numerical-optimization/ — watch a gradient crawl down a loss surface. This is the single most important idea in all of ML training.
> - **[#2] ML Visualized** — https://ml-visualized.com/ — animated gradient descent & the math behind optimization (3Blue1Brown-level quality).

### Statistics & Probability
- [ ] Basics of probability
- [ ] Descriptive statistics
- [ ] Types of distribution
- [ ] Random variables, PDFs
- [ ] Bayes' Theorem
- [ ] Inferential statistics
- [ ] Graphs & charts

> **▶ VISUALIZE**
> - ⭐ **[#15] Seeing Theory (Brown University)** — https://seeing-theory.brown.edu/ — probability, distributions, Bayesian inference & regression, all as interactive animations. Do the whole thing.
> - **[#16] Setosa** — https://setosa.io/ev/ — conditional probability & Markov chains as visual demos.

### Discrete Mathematics
- [ ] Basic concepts (sets, logic, combinatorics, graphs)

---

# PHASE 2 — Data Engineering

> Real ML is 80% data work. Learn to get it, clean it, and shape it before modeling.

### Data Sources & Collection
- [ ] Databases (SQL, NoSQL)
- [ ] Internet APIs
- [ ] Mobile apps, IoT

### Data Formats
- [ ] CSV, Excel
- [ ] JSON
- [ ] Parquet
- [ ] Other formats

### Data Cleaning & Preprocessing
- [ ] Preprocessing techniques
- [ ] Data cleaning (missing values, outliers)
- [ ] Feature engineering
- [ ] Feature selection
- [ ] Feature scaling & normalization

### Dimensionality Reduction
- [ ] Principal Component Analysis (PCA)

> **▶ VISUALIZE**
> - ⭐ **[#16] Setosa — PCA** — https://setosa.io/ev/ — *watch* PCA rotate and project data. The clearest PCA explanation anywhere.
> - **[#26] Embedding Projector (TensorFlow)** — https://projector.tensorflow.org/ — explore high-dimensional data reduced to 3D (great preview for later NLP work too).

---

# PHASE 3 — Core Machine Learning

> The heart of the roadmap. Classical algorithms first — they teach the fundamentals of learning from data.

### Foundations
- [ ] What is Machine Learning?
- [ ] Types of ML: Supervised · Unsupervised · Semi-supervised · Self-supervised · Reinforcement

> **▶ VISUALIZE**
> - ⭐ **[#20] A Visual Introduction to ML (R2D3, Part 1)** — http://www.r2d3.us/visual-intro-to-machine-learning-part-1/ — a scrolling animated story of how a model learns to classify. **The single best beginner intro to ML. Start here.**

## Supervised Learning

### What is Supervised Learning?
- [ ] Concept: learning from labeled data

### Classification
- [ ] Logistic Regression
- [ ] K-Nearest Neighbors (KNN)
- [ ] Support Vector Machines (SVM)
- [ ] Decision Trees & Random Forest
- [ ] Gradient Boosting Machines

> **▶ VISUALIZE**
> - ⭐ **[#19] ML Playground** — https://ml-playground.com/ — drag in training points and watch **KNN, SVM, Decision Tree & Perceptron** draw their decision boundaries side by side. Perfect for this whole section.
> - **[#20] R2D3 Part 1** — http://www.r2d3.us/visual-intro-to-machine-learning-part-1/ — how a Decision Tree splits data.

### Regression
- [ ] Linear Regression
- [ ] Polynomial Regression
- [ ] Lasso & Ridge
- [ ] ElasticNet Regularization

> **▶ VISUALIZE**
> - **[#3] Neural Network Playground (ML Visualiser)** — https://ml-visualiser.vercel.app/ — includes interactive linear regression & classification.

## Unsupervised Learning

### What is Unsupervised Learning?
- [ ] Concept: finding structure in unlabeled data

### Clustering
- [ ] Exclusive
- [ ] Overlapping
- [ ] Hierarchical
- [ ] Probabilistic

> **▶ VISUALIZE**
> - ⭐ **[#22] K-Means Visualization** — https://www.naftaliharris.com/blog/visualizing-k-means-clustering/ — place centroids, watch convergence step by step. Try overlapping clusters.
> - **[#23] DBSCAN Visualization** — https://www.naftaliharris.com/blog/visualizing-dbscan-clustering/ — see why density-based clustering handles weird shapes K-means can't.

### Dimensionality Reduction (unsupervised)
- [ ] Principal Component Analysis (revisit with data now)
- [ ] Autoencoders *(covered deeper in Phase 4)*

> **▶ VISUALIZE**
> - **[#16] Setosa — PCA** — https://setosa.io/ev/
> - **[#26] Embedding Projector** — https://projector.tensorflow.org/

## Reinforcement Learning
- [ ] What is Reinforcement Learning?
- [ ] Q-Learning
- [ ] Deep-Q Networks (DQN)
- [ ] Policy Gradient
- [ ] Actor-Critic Methods

> **▶ VISUALIZE**
> - ⭐ **[#27] Reinforcement Learning Playground (REINFORCEjs, Karpathy)** — https://cs.stanford.edu/people/karpathy/reinforcejs/gridworld_td.html — watch an agent learn a gridworld via Q-learning / SARSA / policy gradients.

---

# PHASE 4 — Model Evaluation

> How do you know your model is actually good? Learn this **before** deep learning — it applies to every model.

### What is Model Evaluation? / Why is it important?
- [ ] The concept and its importance

### Metrics
- [ ] Accuracy · Precision · Recall · F1-Score
- [ ] ROC-AUC · Log Loss
- [ ] Confusion Matrix

### The Bias–Variance Tradeoff (overfitting)
- [ ] Understand why a more complex model can perform *worse*

> **▶ VISUALIZE**
> - ⭐ **[#21] Decision Tree / Bias-Variance (R2D3, Part 2)** — http://www.r2d3.us/visual-intro-to-machine-learning-part-2/ — *watch* a deeper tree overfit on screen. The clearest picture of bias-variance you'll find.

### Validation Techniques
- [ ] K-Fold Cross Validation
- [ ] LOOCV (Leave-One-Out)

### Tooling: Scikit-learn workflow
- [ ] Data loading → Train/Test split → Data preparation → Model selection → Tuning → Prediction

---

# PHASE 5 — Deep Learning

> Neural networks. This is the largest and most visual section — use every site here.

### Neural Network Basics
- [ ] Perceptron & Multi-layer Perceptrons
- [ ] Forward propagation
- [ ] Back propagation *(remember the chain rule from Phase 1)*
- [ ] Activation functions
- [ ] Loss functions

> **▶ VISUALIZE**
> - ⭐ **[#1] TensorFlow Playground** — https://playground.tensorflow.org/ — **the** neural-network sandbox. Add layers, change activations & learning rate, watch the decision boundary form live. *If you use one site from this whole list, make it this one.*
> - **[#4] Spiral Playground (Smilkov)** — https://playground.tensorflow.org/#activation=tanh&dataset=spiral — try to solve the hardest dataset. Feel *why* depth matters.
> - **[#3] ML Visualiser** — https://ml-visualiser.vercel.app/ — watch signals propagate through the network.
> - **[#2] ML Visualized** — https://ml-visualized.com/ — animated backpropagation & the underlying math.

### Optimization
- [ ] Gradient descent variants (SGD, Momentum, Adam)

> **▶ VISUALIZE**
> - ⭐ **[#18] Gradient Descent Visualizer** — https://www.benfrederickson.com/numerical-optimization/ — compare SGD vs Momentum vs Adam on the same landscape.

## Deep Learning Architectures

### Convolutional Neural Networks (CNNs)
- [ ] Convolution
- [ ] Padding
- [ ] Strides
- [ ] Pooling

> **▶ VISUALIZE**
> - ⭐ **[#11] CNN Explainer (Polo Club)** — https://poloclub.github.io/cnn-explainer/ — click any layer to see feature maps, filters & activations. The clearest CNN explanation on the internet.
> - **[#13] Image Kernels Explained** — https://setosa.io/ev/image-kernels/ — drag filters to *see* what convolution does (edge detect, blur, sharpen).
> - **[#12] ConvNet Playground** — https://convnetplayground.fastforwardlabs.com/ — compare how VGG / ResNet / MobileNet extract features.
> - **[#14] TensorSpace.js** — https://tensorspace.org/ — rotate LeNet / AlexNet / YOLO in 3D and watch an image flow through every layer.

#### Applications of CNNs
- [ ] Image classification
- [ ] Image segmentation
- [ ] Image & video recognition
- [ ] Recommendation systems

### Recurrent Neural Networks (RNNs)
- [ ] RNN
- [ ] GRU
- [ ] LSTM

### Attention & Transformers
- [ ] Attention mechanisms
- [ ] Self-Attention
- [ ] Multi-head Attention
- [ ] Transformers

> **▶ VISUALIZE** *(do these in order)*
> - ⭐ **[#7] The Illustrated Transformer (Jay Alammar)** — https://jalammar.github.io/illustrated-transformer/ — read this first if "Attention Is All You Need" confused you.
> - **[#6] Transformer Explainer (Polo Club)** — https://poloclub.github.io/transformer-explainer/ — type a prompt, watch tokenization → attention → next-token prediction. Hover any matrix for the math.
> - **[#5] LLM Visualization (bbycroft.net)** — https://bbycroft.net/llm — a full GPT rendered in 3D; watch a token flow through the whole model.
> - **[#9] AttentionViz** — https://attentionviz.com/ — how different attention heads specialize.
> - **[#10] BertViz** — https://github.com/jessevig/bertviz — inspect attention heads for your own sentences (Colab).
> - **[#8] The Illustrated GPT-2** — https://jalammar.github.io/illustrated-gpt2/ — step-by-step visual of text generation.

### Autoencoders
- [ ] Encoder/decoder, latent space, reconstruction

### Generative Adversarial Networks (GANs)
- [ ] Generator vs discriminator, adversarial training

> **▶ VISUALIZE**
> - ⭐ **[#24] GAN Lab (Polo Club)** — https://poloclub.github.io/ganlab/ — train a GAN in the browser and watch generator & discriminator compete with live loss curves.

### Deep Learning Libraries
- [ ] TensorFlow · Keras
- [ ] PyTorch · Scikit-learn

> **▶ VISUALIZE**
> - **[#28] Netron** — https://netron.app/ — upload any model file (.onnx/.h5/.pth/.tflite) and inspect its full architecture as an interactive graph. Essential once you start using pretrained models.

---

# PHASE 6 — Advanced Concepts

> Specializations after the core. Pick based on your interest/career direction.

### Natural Language Processing (NLP)
- [ ] Tokenization
- [ ] Stemming
- [ ] Lemmatization
- [ ] Embeddings
- [ ] Attention models

> **▶ VISUALIZE**
> - ⭐ **[#26] Embedding Projector** — https://projector.tensorflow.org/ — load Word2Vec/GloVe and see similar words cluster in 3D.
> - **[#8] The Illustrated GPT-2** — https://jalammar.github.io/illustrated-gpt2/ — how a language model generates text.

### Generative / Diffusion Models
- [ ] Diffusion process (noise → image)

> **▶ VISUALIZE**
> - ⭐ **[#25] Diffusion Model Explainer (Polo Club)** — https://poloclub.github.io/diffusion-explainer/ — watch Stable Diffusion turn noise into an image; adjust prompt & guidance scale.

### Explainable AI (XAI)
- [ ] Why is it important? Interpretability & trust

> **▶ VISUALIZE**
> - ⭐ **[#17] Distill.pub** — https://distill.pub/ — research articles with stunning interactive visualizations on how networks "see," feature visualization & interpretability.

---

# 🔭 Anytime / Reference Resources

These aren't tied to one topic — return to them throughout the journey:

- **[#2] ML Visualized** — https://ml-visualized.com/ — a full animated ML textbook; look up any algorithm.
- **[#17] Distill.pub** — https://distill.pub/ — deep interactive research articles.
- **[#28] Netron** — https://netron.app/ — inspect any model architecture you download.

---

# 📚 Related Roadmaps (after this one)

- **AI Engineer Roadmap** — building AI apps with existing models
- **MLOps Roadmap** — deploying & operating models in production
- **AI & Data Scientist Roadmap** — the analytics/statistics-heavy path
- **AI Agents** — autonomous agent systems

---

# 🗂️ Full Resource Index (28 Sites → Where Used)

| # | Resource | Used in Phase / Topic |
|---|----------|------------------------|
| 1 | TensorFlow Playground | P5 · NN Basics ⭐ |
| 2 | ML Visualized | P1 Calculus · P5 Backprop · Reference |
| 3 | Neural Network Playground (ML Visualiser) | P3 Regression · P5 NN Basics |
| 4 | Spiral Playground (Smilkov) | P5 · NN Basics |
| 5 | LLM Visualization (bbycroft.net) | P5 · Transformers |
| 6 | Transformer Explainer (Polo Club) | P5 · Transformers |
| 7 | The Illustrated Transformer | P5 · Transformers ⭐ |
| 8 | The Illustrated GPT-2 | P5 Transformers · P6 NLP |
| 9 | AttentionViz | P5 · Attention |
| 10 | BertViz | P5 · Attention |
| 11 | CNN Explainer (Polo Club) | P5 · CNNs ⭐ |
| 12 | ConvNet Playground | P5 · CNNs |
| 13 | Image Kernels Explained | P5 · Convolution |
| 14 | TensorSpace.js | P5 · CNN Architectures |
| 15 | Seeing Theory | P1 · Statistics & Probability ⭐ |
| 16 | Setosa Visual Explanations | P1 Linear Algebra/Stats · P2 PCA |
| 17 | Distill.pub | P6 Explainable AI · Reference |
| 18 | Gradient Descent Visualizer | P1 Calculus · P5 Optimization ⭐ |
| 19 | ML Playground | P3 · Classification ⭐ |
| 20 | Visual Intro to ML (R2D3 Part 1) | P3 · ML Foundations ⭐ |
| 21 | Decision Tree / Bias-Variance (R2D3 Part 2) | P4 · Model Evaluation ⭐ |
| 22 | K-Means Visualization | P3 · Clustering ⭐ |
| 23 | DBSCAN Visualization | P3 · Clustering |
| 24 | GAN Lab (Polo Club) | P5 · GANs ⭐ |
| 25 | Diffusion Model Explainer | P6 · Generative Models ⭐ |
| 26 | Embedding Projector | P2 Dim. Reduction · P6 NLP |
| 27 | REINFORCEjs (Karpathy) | P3 · Reinforcement Learning ⭐ |
| 28 | Netron | P5 DL Libraries · Reference |

---

*Built from the roadmap.sh ML roadmap + "28 Sites to Learn ML Visually" (@manashR7488). Follow top to bottom, check as you go, and always interact with the ▶ VISUALIZE sites before moving on.*
