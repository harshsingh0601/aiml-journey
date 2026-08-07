# Day 0 · Orientation — Harsh Singh

**Prepared:** Fri 7 Aug 2026 (scheduled run — Harsh not present)
**To be worked through:** Sat 8 Aug 2026, 60–90 minutes
**Real Day 1:** Mon 10 Aug 2026, 09:00 IST

> This ran as an automated task, so the interactive parts (pasting terminal output, answering the baseline questions, giving me your Udemy course title) couldn't happen live. Everything below is written so you can work it yourself on Saturday. Paste any failures into the next session and I'll diagnose them. Sections marked **[NEEDS YOU]** stay open until you come back with the answer.

---

## 1. What you actually signed up for

**416 hours.** 130 weekday sessions × 3 hours, plus 26 Saturday exams. Roughly six months of your mornings, Monday to Saturday, no exceptions built in. That's the honest number — look at it before you start, not in Week 9 when it hurts.

You start with a real advantage and a real deficit. The advantage: you already know how software gets built, deployed and operated. Nobody has to teach you what a container is, why CI matters, or how to reason about a system. The deficit: you have never written Python, you have not touched matrix notation since school, and ML theory is new ground. The plan is built around exactly that shape — it moves fast through engineering, slow through syntax and math.

### The six phases

| Phase | Weeks | Dates | Hours | What changes about you |
|---|---|---|---|---|
| 1 · Python & Engineering Foundations | 1–4 | 10 Aug – 4 Sep | 60 | You write idiomatic, typed, tested Python. NumPy and pandas stop feeling foreign. |
| 2 · Math for ML + Data Work | 5–7 | 7 – 25 Sep | 45 | You can derive the math behind a model instead of calling `.fit()` and hoping. |
| 3 · Classical Machine Learning | 8–13 | 28 Sep – 6 Nov | 90 | You build, evaluate, tune and **deploy** models. This is where you become hireable. |
| 4 · Deep Learning (PyTorch) | 14–18 | 9 Nov – 11 Dec | 75 | Backprop by hand, CNNs, transformers, fine-tuning. |
| 5 · LLM & GenAI Engineering | 19–22 | 14 Dec – 8 Jan | 60 | Production RAG, agents, evals, guardrails, cost control. |
| 6 · MLOps, Capstone & Interview | 23–26 | 11 Jan – 5 Feb | 60 | You operate ML in production and interview credibly. |

### The two milestones

- **Milestone 1 — job-ready junior/associate ML engineer · Fri 6 Nov 2026.** All 8 skill axes ≥ 55; Python, data and classical ML ≥ 70; P1 and P2 shipped publicly; rolling 4-week exam average ≥ 75. At this point you could take an ML engineering role and not drown.
- **Milestone 2 — AI/ML Engineer · Fri 5 Feb 2027.** All 8 axes ≥ 75, the four core axes ≥ 85; P1–P5 shipped; capstone deployed *and monitored*; mock interview ≥ 8/10; final exam ≥ 80.

Milestone 1 is 13 weeks away. That is the one to keep in your head.

### The five portfolio projects

| # | Project | Ships | What a hiring manager reads from it |
|---|---|---|---|
| P1 | Data Analysis & Statistical Report | Week 7 (25 Sep) | You can handle data and defend a conclusion |
| P2 | End-to-End Classical ML Service | Week 13 (6 Nov) | You can take a model to production |
| P3 | Fine-Tuned Deep Learning Model | Week 18 (11 Dec) | You understand modern architectures, not just APIs |
| P4 | Production RAG + Agent Application | Week 22 (8 Jan) | You can build LLM systems that are actually evaluated |
| P5 | Capstone: End-to-End ML Platform | Week 25 (29 Jan) | You can design the whole thing |

Every one of them: public repo, README with architecture diagram, reproducible setup, tests, and a writeup of the tradeoffs you made. The writeup is not optional garnish — it is the part that separates you from a hundred other GitHub profiles.

### The rhythm

**Weekdays 09:00–12:00 IST:**

- 09:00–09:50 — Concept. Deep teaching, diagrams, math worked by hand. Ends with three reflection questions you have to answer.
- 09:50–11:20 — Lab. Runnable code you type yourself. Build, break, fix.
- 11:20–11:45 — Quiz. 10 questions, scored /100, graded strictly.
- 11:45–12:00 — Log, commit, dashboard update, tomorrow's preview.

**Saturdays 12:00–13:00 IST:** 25-question exam. 10 MCQ on the week just done, 6 cumulative from prior weeks, 4 "explain the tradeoff", 3 code-debug, 2 mini design questions. Pass gate is 70.

The cumulative section is the point. You cannot cram a week, pass, and forget it — Week 14's exam will still ask you about Week 3.

---

## 2. Environment setup — work through this one step at a time

Do **not** paste all of these at once. Run one block, read the output, and only move on when it's clean. If something fails, stop and bring me the exact error.

### Step 2.1 — Install uv and Python 3.12

```bash
curl -LsSf https://astral.sh/uv/install.sh | sh
```

Then reload your shell:

```bash
exec $SHELL
uv --version
```

**Expected:** a version string like `uv 0.x.y`.
**If `uv: command not found`:** the installer wrote to `~/.local/bin`, which isn't on your PATH. Add `export PATH="$HOME/.local/bin:$PATH"` to `~/.zshrc`, then `exec $SHELL` again.

```bash
uv python install 3.12
uv python pin 3.12
uv run python --version
```

**Expected:** `Python 3.12.x`.
**Note:** `uv run python --version` is the check that matters, not bare `python3 --version` — the latter still points at Apple's system Python and will mislead you. Get used to `uv run` as the prefix for everything; it's the equivalent of not fighting with your SDK version.

### Step 2.2 — Project workspace and packages

```bash
mkdir -p ~/Documents/aiml-track/labs
cd ~/Documents/aiml-track
uv init --name aiml-track --python 3.12
```

**Watch out:** `~/Documents/aiml-track` already contains the curriculum files. `uv init` in a non-empty directory is fine — it adds `pyproject.toml`, `.python-version` and a `README.md`. If it refuses, add `--bare` and we'll wire it up manually. It should not overwrite anything you care about; if it offers to, say no and tell me.

```bash
cd ~/Documents/aiml-track
uv add numpy pandas matplotlib seaborn scikit-learn jupyterlab ipykernel
uv add --dev pytest ruff mypy
```

This takes a few minutes on first run. Verify:

```bash
cd ~/Documents/aiml-track
uv run python -c "import numpy, pandas, sklearn; print(numpy.__version__, pandas.__version__, sklearn.__version__)"
```

**Expected:** three version numbers on one line.
**If `ModuleNotFoundError`:** you're outside the project directory, or running system `python` instead of `uv run python`.

### Step 2.3 — VS Code

Install these five extensions (Cmd+Shift+X, search each by name):

- **Python** — Microsoft
- **Jupyter** — Microsoft
- **Ruff** — Astral (linting and formatting)
- **Pylance** — Microsoft (type checking; this is the one that will save you most as a C# developer, it gives you something close to IntelliSense)
- **GitLens** — optional

Then set the interpreter: `Cmd+Shift+P` → *Python: Select Interpreter* → choose the one inside `~/Documents/aiml-track/.venv`.

**Check it worked:** open a new `.py` file in the project, type `import numpy`, and confirm you get autocomplete and no red squiggle. If the squiggle stays, you picked the wrong interpreter.

### Step 2.4 — Jupyter Lab

```bash
cd ~/Documents/aiml-track
uv run jupyter lab
```

A browser tab opens. Create a new notebook, put `print("ready")` in the first cell, hit **Shift+Enter**. You should see `ready`. Then shut it down with Ctrl+C in the terminal.

If the browser doesn't open, copy the `http://localhost:8888/lab?token=...` URL from the terminal output into Chrome manually.

### Step 2.5 — Git config

```bash
git config --global user.name "Harsh Singh"
git config --global user.email "harsh.singh0607@gmail.com"
git config --global init.defaultBranch main
git config --global --list | grep -E "user\.|init\."
```

**Expected:** your name, your email, and `init.defaultbranch=main`.

### Step 2.6 — The `aiml-journey` repo

First create the `.gitignore` — **before** the first commit, so the venv never enters history:

```bash
cd ~/Documents/aiml-track
cat > .gitignore <<'EOF'
.venv/
__pycache__/
.ipynb_checkpoints/
*.pkl
*.joblib
data/raw/
.env
mlruns/
.DS_Store
EOF
```

(I added `.DS_Store` — there's already one in the folder and macOS will keep making them.)

Now on github.com create a **public** repo named `aiml-journey`. No README, no .gitignore, no licence — empty, so the push isn't rejected.

Public is not a detail. This repo *is* the hiring signal. Six months of green squares and five shipped projects, visible, is worth more than any line on your CV.

```bash
cd ~/Documents/aiml-track
git init
git add -A
git status --short
```

**Stop and read that `git status` output.** If `.venv/` appears in it, your `.gitignore` isn't being picked up — fix it before committing, because removing a venv from git history later is genuinely annoying.

```bash
git commit -m "chore: bootstrap AI/ML track"
git remote add origin https://github.com/<your-username>/aiml-journey.git
git branch -M main
git push -u origin main
```

**If the push asks for a password:** GitHub killed password auth. Use a Personal Access Token (Settings → Developer settings → Tokens (classic) → `repo` scope) as the password, or set up SSH. Tell me which you prefer and I'll walk you through it.

### Setup checklist

- [ ] `uv` installed, Python 3.12 pinned, `uv run python --version` prints 3.12.x
- [ ] Project initialised, all packages import cleanly
- [ ] VS Code extensions installed, `.venv` interpreter selected, autocomplete working
- [ ] Jupyter Lab launches and runs a cell
- [ ] Git configured with name, email, `main` default
- [ ] Public `aiml-journey` repo created, `.gitignore` in place, first commit pushed
- [ ] Notebook, pen, distraction-free desk ready for Monday 09:00

---

## 3. Accounts to create — **[NEEDS YOU]**

Four free accounts. Do all four on Saturday even though three aren't needed for weeks — you don't want to be creating a Hugging Face account in the middle of a Week 18 lab.

| Service | URL | Why | First needed |
|---|---|---|---|
| **GitHub** | github.com | Public `aiml-journey` repo. Your portfolio. | Day 1 |
| **Kaggle** | kaggle.com | Datasets and competitions. Verify your phone number — it's required for the API and for GPU/TPU quota. | Week 4 |
| **Hugging Face** | huggingface.co | Models, datasets, Spaces. | Week 18 |
| **Google Colab** | colab.research.google.com | Free GPU. Just open it once with your Google account and run a cell. | Week 14 |

Also worth doing while you're there: install the Kaggle CLI token (`kaggle.json` into `~/.kaggle/`) — we'll use it in Week 4, and it's easier to do now.

Two more, later: **MLflow** runs locally (nothing to sign up for) or **Weights & Biases** if you prefer hosted — decide in Week 11. And your **Azure** account, which you almost certainly already have, for the Week 13 deployment.

Confirm each one back to me on Monday and I'll tick them off.

---

## 4. Udemy course mapping — ✅ DONE

Your course is *Machine Learning A-Z [2026]: ML, DL, AI with AWS, Python & R* (Eremenko / de Ponteves, 474 lectures, 49.5 hrs). Full week-by-week mapping is now in `resources.md` under **Udemy mapping**.

The honest summary: it covers about **10 of your 26 weeks**. Excellent for Weeks 8–13 and Week 24. Partial for 14–16 and 23. **Nothing at all** for Weeks 1–3 (no Python fundamentals), Weeks 5–7 (no math) and Weeks 17–22 (no transformers, no LLM engineering). So it's a reinforcement layer, not a spine — start using it in Week 4, not before.

Three rules:

- **Evening only, after the morning session on the same topic.** 1.5–2× speed, no notes.
- **Do not download the code templates.** The course's selling point is downloadable Python/R templates. Non-negotiable #1 says type every line. Watch, then type it yourself.
- **Skip the R track entirely**, and skip every coding lecture in Part 8 — the course is Keras/TensorFlow, this track is PyTorch.

One thing worth internalising: the course's stated prerequisite is "some high school mathematics", and its audience includes people "not that comfortable with coding". That is exactly the level this track is designed to take you *past*. When Week 5 gets tedious, remember that the difference between you and the median graduate of that course is the three weeks of math they skipped.

---

## 5. Baseline assessment — **[NEEDS YOU]**

Ten questions are waiting in `notes/baseline-assessment.md`. They are gentle, purely diagnostic, and not graded against you — I need to know where you actually are so I don't teach you things you know or skate past things you don't. Write your answers directly in the file, and answer honestly. "I don't know" is a genuinely useful answer and costs you nothing on Day 0. It costs you a lot in Week 6.

Your dashboard skill axes are currently set from my read of your background, not from evidence. I've deliberately left them untouched — the rubric says no axis moves without a scored assessment, and that applies to me as much as to you. Once I have your answers I'll adjust them to reality.

---

## 6. The rules. Read these twice.

### The five non-negotiables

1. **Type every line of code yourself.** No copy-paste from my output. This will feel absurd in Week 1 when you're typing `for i in range(10):` for the fortieth time. Do it anyway. Typos are where syntax becomes muscle memory, and you are learning a language, not reading about one.
2. **Commit daily.** Green squares are the receipt. No commit means the day did not happen — I will log it as missed and your streak resets.
3. **Math by hand before math in code.** Derive it on paper, then implement it. When backprop arrives in Week 14 and you already derived the chain rule by hand in Week 6, it will be a formality. If you skipped it, it will be a wall.
4. **No skipping the boring weeks.** Weeks 5–7 are linear algebra, calculus and probability. They are the least fun and the highest leverage in the entire track. They are what separates an ML engineer from someone who copies prompts. You will want to skip them. Don't.
5. **Every model gets an honest evaluation.** A number without a baseline is meaningless. "94% accuracy" on a dataset that's 94% one class is not a result, it's a bug you haven't found yet.

### The gates

- **Weekly exam below 70** → Monday becomes a remediation day. The week's topics repeat before you advance. You lose a day.
- **Two consecutive exams below 70** → the phase extends by a week and optional topics get cut. Your end date moves.
- **A phase cannot be marked complete** until its project is pushed publicly with a README. Not "nearly done". Pushed.
- **Every lab ends in committed, running code.** Otherwise the day is not logged.

### How grading works

Daily quiz is /100: 5 MCQ at 6 marks (right or wrong, no partial credit), 3 short answers at 12 (must say *why*, half marks for shallow), 1 code-debug at 14 (identify the bug *and* explain the failure mode), 1 applied scenario at 20 (marked on reasoning, not keywords).

The tone is strict, and you should want it to be. If you tell me something "improves performance", I'm going to ask which metric, by what mechanism, at what cost. Vague is wrong. Wrong answers get corrected on the spot and re-asked in a different shape later in the week.

The same honesty runs through the dashboard. Axes go **down** when retention questions get missed, and decay if a skill goes untested for three weeks. A dashboard that flatters you is worse than no dashboard at all.

---

## 7. Monday 10 August, 09:00 IST — Week 1, Day 1

**Topic:** Environment, the Python execution model, variables, types, operators, REPL vs script.

We start with the thing most courses skip: what actually happens when you run `python foo.py`. Source → bytecode → the interpreter loop. You'll meet the two ideas that trip up every C# developer moving to Python — that names are *bindings to objects*, not typed boxes, and that typing is dynamic but strong. Then types, operators, truthiness, and the difference between working in the REPL and working in a script. The lab is small programs, typed by hand, run both ways. Quiz at 11:20. Commit before 12:00.

**On your desk at 09:00:**

- Laptop, set up and verified per section 2 above
- A paper notebook and a pen — not a second screen, paper
- Water
- **Your phone in another room.** Not face-down. Another room.

Three hours, uninterrupted. That's the whole ask, 130 times.

See you Monday.
