# Resources

Primary teaching happens live in the 11:00–14:00 IST session (Mon–Fri). These are the reference and reinforcement layer — use them *after* the session, not instead of it.

## Udemy

*Machine Learning A-Z [2026]: ML, DL, AI with AWS, Python & R* (Eremenko / de Ponteves). Mapped week-by-week in the **Udemy mapping** section at the end of this file.

Short version: it is a strong reinforcement layer for Weeks 8–13 and Week 24, partial for Weeks 14–16 and 23, and covers nothing at all in Weeks 1–3, 5–7 and 17–22. It is **not** the video spine — the curriculum remains self-contained, and the course supplements it.

You also own **202 Udemy courses, 32 of them Python-related**. All 32 were audited on 9 Aug 2026 — see **Your full Udemy Python library — triage** near the end of this file. Verdict: **four courses are in, twenty-eight are out**, three more are useful only as project-brief sources. Read that section before opening any of them.

## Phase 1 — Python & foundations

- *Automate the Boring Stuff with Python* (free online) — for syntax fluency only
- Real Python (realpython.com) — best short reference articles
- NumPy official "absolute beginner's guide" and the pandas *10 minutes to pandas* + *Cookbook*
- Exercism Python track — for daily 15-minute syntax drills

## Phase 2 — Math

- 3Blue1Brown, *Essence of Linear Algebra* (YouTube) — watch every episode of this, it is the single highest-leverage resource in the whole track
- 3Blue1Brown, *Essence of Calculus*
- StatQuest with Josh Starmer (YouTube) — statistics and later ML intuition
- *Mathematics for Machine Learning* (Deisenroth, Faisal, Ong) — free PDF, use as reference not cover-to-cover

## Phase 3 — Classical ML

- Andrew Ng, *Machine Learning Specialization* (Coursera) — audit free
- *Hands-On Machine Learning with Scikit-Learn, Keras & TensorFlow* (Géron) — the single best practitioner book; buy it
- scikit-learn User Guide — genuinely excellent, read the sections we cover
- Kaggle Learn micro-courses + Playground competitions

## Phase 4 — Deep learning

- Andrej Karpathy, *Neural Networks: Zero to Hero* (YouTube) — do the micrograd video in Week 14, it is mandatory
- fast.ai *Practical Deep Learning for Coders*
- PyTorch official tutorials
- *The Illustrated Transformer* (Jay Alammar) for Week 17
- *Dive into Deep Learning* (d2l.ai) — free, code-first

## Phase 5 — LLM & GenAI

- Hugging Face NLP Course and LLM Course
- Anthropic and OpenAI official prompt-engineering + tool-use docs
- LangGraph and Semantic Kernel docs; Model Context Protocol spec
- RAGAS docs for evaluation
- Chip Huyen, *AI Engineering* (2025) — the reference text for this phase

## Phase 6 — MLOps & interviews

- Chip Huyen, *Designing Machine Learning Systems* — mandatory reading for Weeks 23–24
- *Made With ML* (madewithml.com) — free MLOps course
- MLflow and DVC docs
- Alex Xu, *Machine Learning System Design Interview*
- *Introduction to Machine Learning Interviews* (Chip Huyen, free)

## Certifications (optional, Milestone 2)

| Cert | Fit | When |
|---|---|---|
| Microsoft AI-102 (Azure AI Engineer) | strongest fit given your Azure/.NET background | after Week 22 |
| Google Professional ML Engineer | most respected pure-ML cert; scenario-based | after Week 24 |
| AWS ML Engineer Associate | useful if targeting AWS shops | optional |

Certs are a tiebreaker. **Shipped projects on public GitHub are the primary hiring signal** — that ordering does not change.

## Udemy mapping

**Course:** *Machine Learning A-Z [2026]: ML, DL, AI with AWS, Python & R*
**Instructors:** Kirill Eremenko, Hadelin de Ponteves, SuperDataScience Team, Ligency
**Format:** 474 lectures · 49.5 hrs · last updated June 2026 · 15 parts
**Mapped:** 8 Aug 2026

### Verdict before you start

This is a good course and it is **not a spine**. It covers roughly **10 of your 26 weeks** — strongly for Phase 3, partially for Phase 4 and Phase 6, and **not at all** for Phases 1, 2 and 5. Treat it as a second pass over classical ML, not as a parallel curriculum.

Three things to know going in:

1. **It teaches intuition, not derivation.** The stated prerequisite is "some high school mathematics" and the target audience includes "people who are not that comfortable with coding". That is a deliberate design choice and it is the opposite of non-negotiable #3. Where the course says "here's the intuition, now run the template", your morning session will have already made you derive it. Use the course to *confirm* intuition after you've done the work — never to replace it.
2. **The code-template culture is a trap for you specifically.** The course's selling point is downloadable Python/R templates. Non-negotiable #1 says type every line. Watch the lectures; do not download the templates.
3. **The AWS half is Parts 11–15 and you deploy to Azure.** The concepts transfer almost perfectly — your `prodEng` background means you'll read SageMaker as "the managed thing" and map it onto Azure ML without friction. The click-paths don't transfer and aren't worth memorising.

**Skip the R track entirely.** It doubles the runtime and buys you nothing.

### Mapping table

| Track week | Track topic | Course part | Use it? |
|---|---|---|---|
| **1–3** | Python core, OOP, algorithms, NumPy | — | ❌ **No coverage.** The course starts at data preprocessing and assumes you can already code. Use Exercism + Real Python for these three weeks instead. |
| **4** | pandas, cleaning, visualisation | **Part 1** — Data Preprocessing (import with pandas, feature matrix/target vector, train/test split, imputation, encoding, scaling) | ✅ Good fit for D1–D3. Note it introduces train/test split early — you'll meet the *why* properly in Week 8. |
| **5–7** | Linear algebra, calculus, probability & statistics | — | ❌ **No coverage, and this is the gap that matters.** 3Blue1Brown and StatQuest are the resources for this phase. Do not let a 49-hour ML course convince you these weeks are optional; the course is proof of what happens without them. |
| **8** | Regression, loss, bias–variance, regularisation | **Part 2** — Simple/Multiple/Polynomial Linear Regression, SVR, Decision Tree & Random Forest Regression | ✅ Strong fit. Watch after D2 and D5. |
| **9** | Classification & evaluation | **Part 3** — Logistic Regression, K-NN, SVM, Kernel SVM, Naive Bayes, Decision Tree & Random Forest Classification | ✅ Strong fit — the best-matched part of the whole course. Kernel SVM lectures pair with D4. Thin on metrics/imbalance (your D2–D3); the morning session carries those. |
| **10** | Trees & ensembles | **Part 10** (XGBoost) + **Part 12** (XGBoost, LightGBM, CatBoost, ensemble models) | ✅ Good for D4. Part 12's versions are SageMaker-flavoured — watch for the algorithm intuition, ignore the console. |
| **11** | Feature engineering, leakage, pipelines, CV | **Part 10** — k-fold CV, parameter tuning, Grid Search · **Part 11** — feature engineering, ETL/Glue, SageMaker Data Wrangler | ⚠️ Partial. Covers CV and grid search well. **Does not cover data leakage** — your D2 — which is the single highest-value topic of that week. Track uses Optuna, course uses Grid Search. |
| **12** | Unsupervised learning | **Part 4** — K-Means, Hierarchical Clustering · **Part 9** — PCA, LDA, Kernel PCA | ✅ Good for D1–D2. No DBSCAN, no t-SNE/UMAP, no anomaly detection, no recommenders (D3–D4 uncovered). |
| **13** | Serialisation, FastAPI, Docker, deploy | **Part 13** — deployment methods, SageMaker endpoints, serverless vs real-time vs asynchronous inference, ECR/ECS/EKS/Lambda, CloudFormation & CDK | ⚠️ Conceptually valuable, tooling mismatch. **Watch the "serverless vs real-time vs async" lectures — that taxonomy is genuinely transferable and is exactly the framing a Week 13 interviewer wants.** The rest you already know from Azure. |
| **14–15** | NN fundamentals, backprop, PyTorch, training | **Part 8** — Artificial Neural Networks | ⚠️ Intuition only. **Framework mismatch: the course is Keras/TensorFlow, this track is PyTorch.** Watch the ANN theory lectures, skip every coding lecture. Karpathy's *Zero to Hero* micrograd video remains mandatory and is the better resource here. |
| **16** | Computer vision, CNNs, transfer learning | **Part 8** — Convolutional Neural Networks | ⚠️ Same deal. Decent on convolution/pooling intuition for D1–D2. No transfer learning, no fine-tuning, no modern architectures beyond basic CNNs. |
| **17** | Sequences, NLP, attention, transformers | **Part 7** — Bag-of-words model and NLP algorithms | ❌ **Effectively no coverage.** Part 7 is pre-transformer NLP. Watch it once as history — it's genuinely useful to see what bag-of-words *couldn't* do before D1's embeddings — then move on. Nothing on RNN/LSTM/attention/Transformer. |
| **18** | Hugging Face, BERT, PEFT/LoRA | — | ❌ No coverage. |
| **19–22** | LLM foundations, RAG, agents, LLMOps | **Part 15** — legal risks of generative AI (one section only) | ❌ **No coverage.** Despite the "AI" in the title, there is no LLM engineering content. Phase 5 runs entirely on Hugging Face's LLM course, the Anthropic/OpenAI docs, RAGAS docs and Chip Huyen's *AI Engineering*. |
| **23** | MLflow, DVC, CI/CD for ML, feature stores | **Part 14** — CodePipeline, CodeBuild, CodeCommit, CodeDeploy, SageMaker Pipelines | ✅ Conceptually well matched to D3. AWS-flavoured, and honestly below the level you already operate at — watch at 2× or skip. Nothing on MLflow or DVC. |
| **24** | Drift monitoring, retraining, scaling, responsible AI | **Part 15** — SageMaker Clarify (model/data quality + bias drift), Model Monitor, Model Cards, Inference Recommender, responsible AI, Savings Plans | ✅ **The strongest non-classical-ML part of the course for you.** Maps cleanly onto D1 (drift), D4 (bias audits, PII, responsible AI) and D3 (cost per 1k requests). Model Cards also back-fills Week 13 D1 and Week 18 D5. |
| **25–26** | Capstone, system design, interviews | — | ❌ No coverage. Alex Xu and Chip Huyen's interview book cover this. |

### Parts with no home in this curriculum

- **Part 5 — Association Rule Learning (Apriori, Eclat).** Market-basket analysis. Not in the track, rarely asked in ML engineering interviews. Skip, or watch in an idle evening during Week 12 out of curiosity.
- **Part 6 — Reinforcement Learning (UCB, Thompson Sampling).** The track mentions RL once, in Week 8 D1, as taxonomy. These two lectures are a decent 45-minute intro to the multi-armed bandit problem if you want that context. Optional.
- **Part 12's managed AI services** — Comprehend, Rekognition, Polly, Transcribe, Textract, Translate. These are "call someone else's API" services, not ML engineering. Skip unless you end up interviewing at an AWS shop.

### How to actually use it

- **Evening only, after the morning session on the same topic.** Never before, never instead.
- **1.5–2× speed, no notes.** Your notes come from the morning session. This is a second exposure to material you have already typed.
- **Do not download the code templates.** Type every line — non-negotiable #1.
- **Ignore your completion percentage.** You will finish this track having watched maybe 40% of this course, and that is the correct outcome. Completion is not a goal and will not be tracked on the dashboard.
- **Heaviest use: Weeks 8–12.** That six-week stretch is where the course genuinely earns its place. Front-load nothing before Week 4; there's nothing there for you.

Sources: [Machine Learning A-Z on Udemy](https://www.udemy.com/course/machinelearning/) · [Class Central listing](https://www.classcentral.com/course/udemy-machinelearning-23826)

## Your full Udemy Python library — triage

**Audited:** 9 Aug 2026 · 202 courses owned, **32 match "python"**.

### Read this before the table

**The account is shared.** Completion percentages on any of these courses belong to whoever watched them, not necessarily to Harsh. He is at **0% on all of them**. Treat every "% complete" figure in the Udemy UI as noise — it is not a progress metric for this track, it will never appear on the dashboard, and no recommendation below is based on it.

The real finding is the redundancy. Roughly **fifteen of the thirty-two are the same beginner Python course** wearing different thumbnails: *Python for beginners*, *Python Complete Course For Beginners*, *The Python Programming For Everyone*, *Start Your Career as Python Programmer*, *Python with Practical Approach*, *Python Programming - From Basics to Advanced*, *Complete PYTHON Programming for Beginners 2026*, *The Python Programming A-Z Definitive Diploma*, *Python: From Zero to Hero*, *No Nonsense Python*, *Learn to Code in Python 3*, *Python Masterclass*, *Python Programming for Beginners (Hindi)*, *Learn Python Programming From A-Z*, *Python: Master Programming with 15 Projects*.

Fifteen beginner courses is not fifteen times the learning. It is one course and fourteen decisions you don't have to make again. Pick one, and the choice is closed for 26 weeks.

**So: four courses are in. Twenty-eight are out.** Not "deprioritised" — out. If a topic isn't covered by the four below, the morning session and the free resources in this file cover it.

One caveat on quality: most of these instructors are not names I can vouch for from reputation, and I have not watched the material. The picks below are made on **scope fit and recency**, not on verified teaching quality. The free resources in this file — Real Python, *Automate the Boring Stuff*, 3Blue1Brown, StatQuest, Karpathy — are known quantities and remain the primary reference layer. If a Udemy pick turns out to be weak in Week 1, say so and we drop it; nothing here is load-bearing.

### The four that earn a place

| # | Course | Instructor | Where it fits | Why this one |
|---|---|---|---|---|
| 1 | **Complete PYTHON Programming for Beginners – 2026** | Hemanth Kumar Gurrala | **Weeks 1–2**, evenings | Chosen for **recency** — a 2026 course will match the Python 3.12 syntax, f-strings, type hints and tooling you're actually using, where the 2021–22 courses will not. Backup if it disappoints: *Learn Python Programming From A-Z* (Galvan/Wael). Pick one on Day 1 of Week 1 and never reopen the question. |
| 2 | **Data Manipulation in Python: Master Python, Numpy & Pandas** | Meta Brains | **Week 3 D3–D5** (NumPy), **Week 4 D1–D3** (pandas) | The only course in your library that treats NumPy and pandas as the subject rather than a footnote. This is the one that pairs directly with the two weeks where your `dataWrangling` axis moves from 8 to 40+. |
| 3 | **The Data Science Course: Complete Data Science Bootcamp 2026** | 365 Careers | **Weeks 5–7** (math & stats) | **This is the find.** ML A-Z covers nothing in Phase 2 — the phase I told you separates engineers from prompt-copiers. 365 Careers has a genuinely good statistics module (distributions, CLT, confidence intervals, hypothesis testing, regression assumptions). Watch its stats sections during Week 7. It does not cover linear algebra or calculus — 3Blue1Brown still owns Weeks 5–6. |
| 4 | **Machine Learning A-Z [2026]** *(13% done)* | Eremenko / de Ponteves | **Weeks 8–13, 24** | Already mapped in detail above. Unchanged. |

### Three used as problem banks, not courses

Do not watch these. Open them, steal the project brief and the dataset, close the video, and build it yourself.

- **100 Days Data Science Bootcamp: Build 100 Real Life Projects** (Pianalytix) — mine for Week 11–12 practice problems
- **40 Days Bootcamp: 40 Data Science & ML Projects** (Pianalytix) — same
- **28 Real World Data Science & Machine Learning Projects 2022** (TheMachineLearning Org) — good source for your P2 problem statement in Week 13

Every one of these is a "watch me build it" format, which is the least effective way to learn and the most effective way to feel like you're learning. Their value is the *problem list*, nothing else.

### Two conditional

- **Natural Language Processing Real-World Projects in Python** (Shan Singh) — **Week 17 D1 only**, and only if you want extra reps on tokenisation and bag-of-words. It is pre-transformer, same limitation as ML A-Z Part 7. Nothing in it for Weeks 17 D2–D5 or Week 18.
- **Data Analytics A-Z with Python** (Yaswanth Sai Palaghat) — optional second pass for **Week 4 D4** visualisation. Skip if Meta Brains is enough.

### Explicitly out — and why

| Course | Why it's out |
|---|---|
| Python and Django Full Stack Web Developer Bootcamp (Jose Portilla) | Portilla is the one instructor here with a genuine reputation, and this is still out — **Django is web development, not ML.** Zero overlap with the 26 weeks. Worth your time *after* Feb 2027 if you want it. |
| Django Masterclass: Build 9 Real World Django Projects | Same. Out. |
| Learn Python Programming: by Building a Facebook ChatBot App | 2018-era chatbot ≠ 2026 LLM agents. Actively misleading for Phase 5. |
| Python Masterclass 2021: Python for Everything [AI+ML+WebDev] | "Everything" courses teach nothing to sufficient depth. Also five years stale. |
| Python Programming for Beginners \| Full Course in Hindi | Redundant with #1. |
| 2022 Complete Data Structures: Data Structures With Python | Week 3 D1–D2 covers what you need. You have 20 years of engineering — you know what a hash table is. Out. |
| Crash course: Data analytics in Python using Pandas · No Nonsense Python · Data Science: Python for Data Analysis Full Bootcamp · Data Analytics Real-World Projects in Python · Data Science 101 NYC · Learn Python for Data Science & ML from A-Z · The Python Programming A-Z Definitive Diploma · Python: From Zero to Hero · Learn to Code in Python 3 · Python with Practical Approach · Python Programming From Basics to Advanced · The Python Programming For Everyone · Start Your Career as Python Programmer · Python Complete Course For Beginners · Python for beginners · Complete PYTHON Programming for Beginners 2026 · Python: Master Programming with 15 Projects | All redundant with #1 or #2, at a similar or lower level. Owning them changes nothing. |

### The rule going forward

**Zero minutes of Udemy before the morning session. Maximum 45 minutes after it, on the same topic, at 1.5×.** If an evening's choice is "watch a lecture" or "type more code", type more code. Every time.

Course completion is **not** tracked on the dashboard and never will be — doubly so on a shared account, where the number isn't even yours. The only progress metrics that count are quiz scores, exam scores, skill axes, and commits to `aiml-journey`.

And don't buy another course during these 26 weeks. There are 202 on the account already. The constraint was never access to material.

## Datasets we'll use

Titanic and Ames Housing (Week 8–9), Credit-card fraud (Week 9, imbalance), a Kaggle tabular playground (Week 10), a retail/customer dataset (Week 12), CIFAR-10 or a custom image set (Week 16), IMDB or AG News (Week 18), and your own document corpus for the RAG project (Week 20).
