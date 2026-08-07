# Day 0 · Environment Setup (Sat 8 Aug 2026)

Do this **before** Monday's first session. Budget 60–90 minutes. Nothing here is optional — every later lab assumes it.

## 1. Python 3.12 + uv

macOS ships an old Python. Install a managed one.

```bash
# install uv (fast Python package + version manager)
curl -LsSf https://astral.sh/uv/install.sh | sh
exec $SHELL          # reload shell

uv python install 3.12
uv python pin 3.12
python3 --version    # sanity check
```

## 2. Project workspace

```bash
mkdir -p ~/Documents/aiml-track/labs
cd ~/Documents/aiml-track
uv init --name aiml-track --python 3.12
uv add numpy pandas matplotlib seaborn scikit-learn jupyterlab ipykernel
uv add --dev pytest ruff mypy
```

Verify:

```bash
uv run python -c "import numpy, pandas, sklearn; print(numpy.__version__, pandas.__version__, sklearn.__version__)"
```

## 3. VS Code

Install these extensions:

- **Python** (Microsoft)
- **Jupyter** (Microsoft)
- **Ruff** (Astral) — linting/formatting
- **Pylance** — type checking
- **GitLens** — optional but useful

Set the interpreter: `Cmd+Shift+P` → *Python: Select Interpreter* → the `.venv` inside `~/Documents/aiml-track`.

## 4. Jupyter

```bash
uv run jupyter lab
```

It should open in the browser. Create a notebook, run `print("ready")`, close it.

## 5. Git + GitHub

```bash
git config --global user.name "Harsh Singh"
git config --global user.email "harsh.singh0607@gmail.com"
git config --global init.defaultBranch main
```

Create a **public** GitHub repo named `aiml-journey`. This is where every lab, project and notebook goes. Public matters — it is the hiring signal.

```bash
cd ~/Documents/aiml-track
git init && git add -A && git commit -m "chore: bootstrap AI/ML track"
git remote add origin https://github.com/<your-username>/aiml-journey.git
git push -u origin main
```

Add a `.gitignore`:

```
.venv/
__pycache__/
.ipynb_checkpoints/
*.pkl
*.joblib
data/raw/
.env
mlruns/
```

## 6. Accounts to create (free tiers)

| Service | Why | When needed |
|---|---|---|
| GitHub | portfolio + commits | Day 1 |
| Kaggle | datasets + competitions | Week 4 |
| Hugging Face | models, datasets, Spaces | Week 18 |
| Google Colab | free GPU for deep learning | Week 14 |
| Weights & Biases *or* MLflow local | experiment tracking | Week 11 |
| Azure free account (you likely have one) | deployment in Week 13 | Week 13 |

## 7. Hardware note

Your Mac is fine through Week 13. From Week 14 (deep learning) use **Google Colab free GPU** for anything that trains longer than ~5 minutes locally. Apple Silicon MPS backend works for small models — we'll configure it in Week 14 Day 4.

## 8. Study hygiene (read this once, follow it for 26 weeks)

- **09:00 sharp.** Phone in another room. The session is 3 hours, not 3 hours of context-switching.
- **Paper and pen on the desk.** Math gets derived by hand before it gets typed.
- **Type every line.** Copy-paste teaches nothing. Typos are where learning happens.
- **Commit before 12:00.** If it isn't committed, the day didn't happen.
- **Write down what confused you.** Each Saturday exam draws from your own confusion list.

## Setup checklist

- [ ] `uv` installed, Python 3.12 pinned
- [ ] Project created, core packages installed and importable
- [ ] VS Code extensions installed, interpreter selected
- [ ] Jupyter Lab launches and runs a cell
- [ ] Git configured, public `aiml-journey` repo created and pushed
- [ ] Kaggle + Hugging Face + Colab accounts created
- [ ] Notebook, pen, and a distraction-free desk for 09:00 Monday
