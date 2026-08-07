# AI/ML Engineer Track — Harsh Singh

**Goal:** ship-capable AI/ML Engineer (build, train, deploy, and operate models) in 26 weeks.
**Starting point:** strong .NET / architecture background, **fresher in Python and ML**.
**Format:** Mon–Fri **11:00–14:00 IST** (3 hrs) tutor session + Saturday 12:00–13:00 IST exam.
**Orientation day:** Fri 7 Aug 2026 (morning) — environment setup.
**Real Day 1:** **Fri 7 Aug 2026, 11:00 IST** *(brought forward from Mon 10 Aug at Harsh's request)*. **Final day:** Fri 5 Feb 2027. **Final exam:** Sat 6 Feb 2027.

> **Schedule amendment · 7 Aug 2026.** The weekday window moved from 09:00–12:00 to **11:00–14:00 IST**, permanently. Saturday exams stay at 12:00–13:00. Day 1 was brought forward to Fri 7 Aug; Week 1 therefore runs Fri 7 → Thu 13 Aug with **Fri 14 Aug as a buffer/review day**. Exam 1 remains Sat 15 Aug. Every subsequent week, exam date and milestone date is unchanged.
**Milestone 1 (job-ready junior/associate ML engineer):** Fri 6 Nov 2026 (end of Week 13).
**Milestone 2 (AI/ML Engineer, market-validated):** Fri 5 Feb 2027 (end of Week 26).

**Total:** 130 weekday sessions × 3 hrs = **390 hrs** + 26 Saturday exams × 1 hr = **416 hrs**.

---

## Daily session shape (Mon–Fri, 3 hrs)

| Block | Time (IST) | What happens |
|---|---|---|
| Concept | 11:00–11:50 | Deep teaching of the day's topic. Diagrams, math worked by hand, "when would you use this". Ends with 3 reflection questions Harsh must answer. |
| Lab | 11:50–13:20 | Runnable, hands-on code. Harsh types every line himself. Build → break → fix. |
| Quiz | 13:20–13:45 | 10 questions (MCQ + short answer + 1 code-reading/debug question). Scored /100, strict grading. |
| Log | 13:45–14:00 | Notes, commit to GitHub, dashboard update, tomorrow's preview. |

## Saturday exam shape (1 hr, 12:00–13:00 IST)

25 questions on the week just finished + spaced repetition of all prior weeks:
- 10 MCQ on this week
- 6 MCQ cumulative (prior weeks)
- 4 short-answer "explain the tradeoff"
- 3 code-debug / code-output questions
- 2 mini design questions ("how would you build…")

Weighted: current week 40, cumulative retention 30, applied/design 30. **Pass gate = 70.**

## Gates (non-negotiable)

- Weekly exam < 70 → Monday becomes a **remediation day**; the week's topics repeat before advancing.
- Two consecutive exams < 70 → the phase is extended by one week and optional topics are cut.
- A phase cannot be marked complete until its project is pushed publicly to GitHub with a README.
- Every lab must end in committed, running code. No commit = the day is not logged.

---

# PHASE 1 · Python & Engineering Foundations
**Weeks 1–4 · 7 Aug – 4 Sep 2026 · 60 hrs**
*Outcome: write idiomatic, tested, typed Python; comfortable with NumPy and pandas; first EDA notebook shipped.*

### Week 1 (7–13 Aug) — Python core
- **D1 Fri 7 Aug** — Environment (Python 3.12, uv, VS Code, Jupyter), Python execution model, variables, types, operators, REPL vs script
- **D2 Mon 10 Aug** — Control flow, loops, functions, arguments, scope, `*args`/`**kwargs`, pure functions
- **D3 Tue 11 Aug** — list / tuple / dict / set, mutability, comprehensions, unpacking
- **D4 Wed 12 Aug** — Strings & formatting, file I/O, exceptions, modules & packages, `__main__`
- **D5 Thu 13 Aug** — Idiomatic Python (`enumerate`, `zip`, slicing, `pathlib`), mini CLI project
- **Fri 14 Aug** — buffer / review day (no new topic, no quiz)
- **Exam 1 · Sat 15 Aug**

### Week 2 (17–21 Aug) — OOP, tooling, Git
- **D1** Classes, instances, attributes, `__init__`, dunder methods
- **D2** Inheritance vs composition, ABCs, `dataclass`, `Enum`
- **D3** Iterators, generators, decorators, context managers
- **D4** Type hints + mypy, virtual envs with uv, project layout, `pytest` basics
- **D5** Git & GitHub workflow, branching, PRs, README; push the Week-1 CLI project
- **Exam 2 · Sat 22 Aug**

### Week 3 (24–28 Aug) — Algorithms + NumPy
- **D1** Big-O, arrays vs linked structures, why complexity matters in ML pipelines
- **D2** Sorting, searching, hashing, recursion, memoisation
- **D3** NumPy `ndarray`: dtype, shape, indexing, slicing, views vs copies
- **D4** Broadcasting, axes, reshaping, linear-algebra ops, random number generation & seeds
- **D5** Vectorisation vs loops (benchmark it), implement k-NN in pure NumPy
- **Exam 3 · Sat 29 Aug**

### Week 4 (31 Aug – 4 Sep) — pandas & visualisation
- **D1** Series & DataFrame, indexing (`loc`/`iloc`), selection, dtypes
- **D2** Cleaning: missing values, duplicates, outliers, type coercion, categorical data
- **D3** `groupby`, merge/join, pivot, reshaping, time-series basics
- **D4** Matplotlib fundamentals + seaborn; what chart for what question; how to lie with axes
- **D5** Phase 1 wrap: end-to-end EDA notebook on a real dataset; notebook hygiene & reproducibility
- **Exam 4 · Sat 5 Sep** *(Phase 1 gate — must score ≥ 70 to unlock Phase 2)*

---

# PHASE 2 · Math for ML + Data Work
**Weeks 5–7 · 7 – 25 Sep 2026 · 45 hrs**
*Outcome: can derive and implement the math behind a model, not just call `.fit()`. Project P1 ships.*

### Week 5 (7–11 Sep) — Linear algebra
- **D1** Vectors, vector spaces, norms, dot product, cosine similarity (the basis of embeddings)
- **D2** Matrices, matrix multiplication, identity, inverse, rank, linear systems
- **D3** Determinants, eigenvalues & eigenvectors — geometric intuition
- **D4** SVD; PCA derived from scratch in NumPy
- **D5** Lab: image compression with SVD; visualise variance explained
- **Exam 5 · Sat 12 Sep**

### Week 6 (14–18 Sep) — Calculus & optimisation
- **D1** Derivatives, partial derivatives, gradients, Jacobians
- **D2** Chain rule and computational graphs (the backprop prerequisite)
- **D3** Gradient descent from scratch; learning rate, convergence, divergence
- **D4** Convexity, local minima, SGD / momentum / RMSProp / Adam — intuition and when each matters
- **D5** Lab: fit linear regression with hand-written gradient descent; compare to closed-form solution
- **Exam 6 · Sat 19 Sep**

### Week 7 (21–25 Sep) — Probability & statistics
- **D1** Probability rules, random variables, key distributions (Bernoulli, binomial, normal, Poisson)
- **D2** Expectation, variance, covariance, correlation ≠ causation, CLT
- **D3** Conditional probability, Bayes' theorem, MLE and MAP
- **D4** Sampling, hypothesis testing, p-values, confidence intervals, A/B testing done properly
- **D5** **Ship P1** — full EDA + statistical report with defensible conclusions
- **Exam 7 · Sat 26 Sep** *(Phase 2 gate)*

---

# PHASE 3 · Classical Machine Learning
**Weeks 8–13 · 28 Sep – 6 Nov 2026 · 90 hrs**
*Outcome: build, evaluate, tune and deploy classical models correctly. Project P2 ships. MILESTONE 1.*

### Week 8 (28 Sep – 2 Oct) — ML foundations & workflow
- **D1** Supervised / unsupervised / reinforcement; the real ML lifecycle; framing a business problem as an ML problem
- **D2** Linear regression: math, assumptions, `scikit-learn` API and estimator contract
- **D3** Loss functions, bias–variance tradeoff, over/underfitting, learning curves
- **D4** Regularisation: ridge, lasso, elastic net — and what each does to coefficients
- **D5** Lab: regression end-to-end with honest train/val/test discipline
- **Exam 8 · Sat 3 Oct**

### Week 9 (5–9 Oct) — Classification & evaluation
- **D1** Logistic regression, sigmoid, log-loss, decision boundaries
- **D2** Metrics: accuracy, precision, recall, F1, ROC-AUC, PR-AUC — and choosing the right one
- **D3** Class imbalance: resampling, SMOTE, class weights, threshold tuning, calibration
- **D4** k-NN, Naive Bayes, SVM and the kernel trick
- **D5** Lab: multi-class classifier with a full evaluation report and confusion-matrix analysis
- **Exam 9 · Sat 10 Oct**

### Week 10 (12–16 Oct) — Trees & ensembles
- **D1** Decision trees, entropy/gini, splitting, pruning, interpretability
- **D2** Bagging & random forests, OOB error, feature importance (and its traps)
- **D3** Boosting: AdaBoost, gradient boosting from first principles
- **D4** XGBoost / LightGBM / CatBoost — practical tuning and when trees beat neural nets
- **D5** Lab: full tabular competition run, leaderboard-style scoring
- **Exam 10 · Sat 17 Oct**

### Week 11 (19–23 Oct) — Feature engineering & pipelines
- **D1** Encoding categoricals, scaling, binning, transformations, dates & text features
- **D2** Feature selection; **data leakage** — how to detect it and how it destroys projects
- **D3** `Pipeline`, `ColumnTransformer`, custom transformers, reproducible preprocessing
- **D4** Cross-validation strategies (k-fold, stratified, time-series), hyperparameter search with Optuna
- **D5** Lab: reproducible pipeline with MLflow experiment tracking
- **Exam 11 · Sat 24 Oct**

### Week 12 (26–30 Oct) — Unsupervised learning
- **D1** k-Means, hierarchical clustering, DBSCAN; choosing k honestly
- **D2** Dimensionality reduction in practice: PCA, t-SNE, UMAP
- **D3** Anomaly / outlier detection (isolation forest, one-class SVM)
- **D4** Recommenders: collaborative filtering, matrix factorisation, cold start
- **D5** Lab: customer segmentation with a business-facing writeup
- **Exam 12 · Sat 31 Oct**

### Week 13 (2–6 Nov) — First deployment + MILESTONE 1
- **D1** Model serialisation & versioning (joblib, ONNX), model cards
- **D2** FastAPI: serve a model as a real API with validation and schemas
- **D3** Docker: containerise the service; image size, layers, reproducible builds
- **D4** Deploy to Azure Container Apps; logging, health checks, basic monitoring
- **D5** **Ship P2** + Milestone 1 self-assessment
- **Exam 13 · Sat 7 Nov — MILESTONE 1 ASSESSMENT (50 questions, 2 hrs)** *(Phase 3 gate)*

---

# PHASE 4 · Deep Learning
**Weeks 14–18 · 9 Nov – 11 Dec 2026 · 75 hrs**
*Outcome: implement, train, debug and fine-tune neural networks in PyTorch. Project P3 ships.*

### Week 14 (9–13 Nov) — Neural network fundamentals
- **D1** Perceptron → MLP; activation functions and why non-linearity matters
- **D2** Forward pass, loss, **backpropagation derived by hand** on paper
- **D3** Build a 2-layer neural net from scratch in pure NumPy (no frameworks)
- **D4** PyTorch: tensors, autograd, devices, the mental model
- **D5** First PyTorch model: `Dataset`, `DataLoader`, training loop, validation loop
- **Exam 14 · Sat 14 Nov**

### Week 15 (16–20 Nov) — Training deep networks
- **D1** Optimisers and learning-rate schedules in practice
- **D2** Regularisation: dropout, batch norm, weight decay, early stopping
- **D3** Weight initialisation, vanishing/exploding gradients, residual connections
- **D4** Debugging training: overfit-one-batch, gradient checks, loss curves that lie
- **D5** Lab: tune an MLP properly with a written experiment log
- **Exam 15 · Sat 21 Nov**

### Week 16 (23–27 Nov) — Computer vision
- **D1** Convolution, filters, stride, padding, pooling — computed by hand first
- **D2** CNN architectures: LeNet → VGG → ResNet, and what each fixed
- **D3** Data augmentation, transfer learning, feature extraction vs fine-tuning
- **D4** Fine-tune a pretrained backbone on a custom dataset
- **D5** Lab: image classifier fine-tuned, evaluated, and served
- **Exam 16 · Sat 28 Nov**

### Week 17 (30 Nov – 4 Dec) — Sequences, NLP & attention
- **D1** Text preprocessing, tokenisation, embeddings (word2vec/GloVe), semantic similarity
- **D2** RNN, LSTM, GRU — and why they struggle
- **D3** seq2seq and the attention mechanism
- **D4** The Transformer, end to end: Q/K/V, multi-head, positional encoding, layer norm
- **D5** Lab: implement scaled dot-product self-attention from scratch
- **Exam 17 · Sat 5 Dec**

### Week 18 (7–11 Dec) — Transformers in practice
- **D1** Hugging Face ecosystem: `transformers`, `datasets`, `tokenizers`
- **D2** Fine-tune BERT for text classification
- **D3** NLP evaluation and error analysis; slicing failures by segment
- **D4** PEFT / LoRA / QLoRA, quantisation — fine-tuning on a budget
- **D5** **Ship P3** — fine-tuned model, deployed with an API and a model card
- **Exam 18 · Sat 12 Dec** *(Phase 4 gate)*

---

# PHASE 5 · LLM & GenAI Engineering
**Weeks 19–22 · 14 Dec 2026 – 8 Jan 2027 · 60 hrs**
*Outcome: build production-grade LLM applications with retrieval, tools, evals and guardrails. Project P4 ships.*

> Note: 25 Dec and 1 Jan fall on Fridays. Those two days run as lighter **catch-up / review** sessions — no new topic, no quiz. Their Saturday exams still run.

### Week 19 (14–18 Dec) — LLM foundations
- **D1** How LLMs actually work: pretraining, SFT, RLHF/DPO, emergent behaviour
- **D2** Prompting as engineering: few-shot, chain-of-thought, structured output, prompt evaluation
- **D3** Tokenisation, context windows, latency and cost budgeting
- **D4** LLM APIs in code: Azure OpenAI / OpenAI / Anthropic SDKs, streaming, retries
- **D5** Lab: structured-extraction service with schema validation
- **Exam 19 · Sat 19 Dec**

### Week 20 (21–25 Dec) — Retrieval-Augmented Generation
- **D1** Embeddings and vector similarity, revisited with real math
- **D2** Vector stores: Chroma, pgvector, Azure AI Search
- **D3** Chunking strategies, hybrid search, reranking, metadata filtering
- **D4** RAG evaluation: groundedness, faithfulness, answer relevance, RAGAS
- **D5** *(25 Dec — review/catch-up day)*
- **Exam 20 · Sat 26 Dec**

### Week 21 (28 Dec – 1 Jan) — Agents & tool use
- **D1** Function/tool calling, the ReAct loop, when agents beat pipelines
- **D2** Agent frameworks: LangGraph, Semantic Kernel, MCP
- **D3** Multi-step agents: planning, memory, state, failure recovery
- **D4** Guardrails: prompt injection, output validation, safety, cost caps
- **D5** *(1 Jan — review/catch-up day)*
- **Exam 21 · Sat 2 Jan**

### Week 22 (4–8 Jan) — LLMOps
- **D1** Eval harnesses, golden datasets, LLM-as-judge and its failure modes
- **D2** Observability: tracing, token/cost/latency dashboards
- **D3** Caching, batching, streaming, fallbacks, rate limits
- **D4** Fine-tune vs RAG vs prompt: a decision framework with cost math
- **D5** **Ship P4** — production-shaped RAG + agent application with an eval suite
- **Exam 22 · Sat 9 Jan** *(Phase 5 gate)*

---

# PHASE 6 · MLOps, Capstone & Interview Mastery
**Weeks 23–26 · 11 Jan – 5 Feb 2027 · 60 hrs**
*Outcome: operate ML in production and interview credibly as an AI/ML Engineer. Capstone P5 ships. MILESTONE 2.*

### Week 23 (11–15 Jan) — MLOps foundations
- **D1** Experiment tracking and model registry with MLflow
- **D2** Data & model versioning (DVC), reproducibility guarantees
- **D3** CI/CD for ML with GitHub Actions; how you actually test ML code
- **D4** Feature stores; batch vs online inference; training/serving skew
- **D5** Lab: complete CI/CD pipeline that trains, tests, registers and deploys a model
- **Exam 23 · Sat 16 Jan**

### Week 24 (18–22 Jan) — Production ML systems
- **D1** Monitoring: data drift, concept drift, model decay, alerting
- **D2** Retraining pipelines and orchestration (Airflow / Prefect)
- **D3** Scaling inference: GPU serving, batching, ONNX, quantisation, cost per 1k requests
- **D4** Security, privacy, PII, and responsible AI — bias audits and documentation
- **D5** **ML system design drills #1** (3 full designs, whiteboard style)
- **Exam 24 · Sat 23 Jan**

### Week 25 (25–29 Jan) — Capstone build week
- **D1** Capstone scoping: problem, data, success metric, architecture, ADRs
- **D2** Data pipeline + baseline model
- **D3** Model iteration + evaluation harness
- **D4** Deployment, monitoring, CI/CD wiring
- **D5** **Ship P5** — demo, README, architecture diagram, cost analysis
- **Exam 25 · Sat 30 Jan**

### Week 26 (1–5 Feb) — Interview mastery + MILESTONE 2
- **D1** ML system design drills #2 (recommender, RAG platform, fraud detection)
- **D2** ML coding interviews: implement algorithms from scratch under time pressure
- **D3** ML theory rapid-fire; resume, GitHub and portfolio polish
- **D4** Behavioural / STAR stories mapped to your .NET-lead experience + portfolio walkthrough
- **D5** Full mock interview (design + coding + theory), scored 1–10, with a written gap plan
- **Exam 26 · Sat 6 Feb — FINAL ASSESSMENT (60 questions, 2 hrs)** *(Milestone 2 gate)*

---

## Portfolio projects

| # | Project | Phase | What it proves |
|---|---|---|---|
| P1 | Data Analysis & Statistical Report | Phase 2 | Python, pandas, statistics, communication |
| P2 | End-to-End Classical ML Service | Phase 3 | Full ML lifecycle, FastAPI, Docker, cloud deploy |
| P3 | Fine-Tuned Deep Learning Model | Phase 4 | PyTorch, transfer learning, transformers, model cards |
| P4 | Production RAG + Agent Application | Phase 5 | LLM engineering, retrieval, evals, guardrails |
| P5 | Capstone: End-to-End ML Platform | Phase 6 | MLOps, monitoring, CI/CD, architecture, cost |

Every project needs: public GitHub repo · README with architecture diagram · reproducible setup · tests · a short writeup of decisions and tradeoffs.

## "You are an AI/ML Engineer when…"

**Milestone 1 · Job-ready (6 Nov 2026)**
- All 8 skill axes ≥ 55
- Python, pandas/NumPy, classical ML axes ≥ 70
- P1 and P2 shipped publicly
- Can build, evaluate and deploy a model end-to-end unaided
- Rolling 4-week exam average ≥ 75
- Curriculum ≥ 50% complete

**Milestone 2 · AI/ML Engineer (5 Feb 2027)**
- All 8 skill axes ≥ 75; Python, classical ML, deep learning, LLM/GenAI ≥ 85
- P1–P5 all shipped publicly
- Capstone deployed and monitored in production
- Mock interview ≥ 8/10 across design + coding + theory
- Rolling exam average ≥ 80; final assessment ≥ 80
- Curriculum ≥ 95% complete
- Optional but strongly recommended: one cloud ML certification (Azure AI Engineer AI-102, or GCP Professional ML Engineer)

## Non-negotiables

1. **Type every line of code yourself.** No copy-paste from the tutor's output.
2. **Commit daily.** GitHub green squares are the receipt.
3. **Math by hand before math in code.** Derive it on paper, then implement it.
4. **No skipping the boring weeks.** Weeks 5–7 (math) are the ones that separate engineers from prompt-copiers.
5. **Every model gets an honest evaluation.** A number without a baseline is meaningless.
