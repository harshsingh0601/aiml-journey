# Lab W1D2 — Functions, arguments, scope

**90 minutes. Type every line yourself. No copy-paste.**

I mean that literally. The muscle memory of typing `def`, the colon, the indent, and the return is a
large part of what you are buying with this hour. Copy-pasting produces a green terminal and no
learning, and it will show up as a 57 on the quiz.

You are building a tiny **experiment runner** — the skeleton of every training script you will write
for the next 25 weeks. Then you will break it in three specific ways and fix each one.

---

## Setup

```bash
cd ~/Documents/aiml-track
mkdir -p labs/2026-08-10
cd labs/2026-08-10
```

Everything below runs on your Mac with the repo's existing Python 3.12 / uv environment.
Run each file with:

```bash
cd ~/Documents/aiml-track
uv run python labs/2026-08-10/<file>.py
```

---

## Part 1 — Pure functions (20 min)

Create `runner.py`. Type it, do not paste.

```python
"""W1D2 lab - experiment runner. Part 1: pure functions."""


def predict(x, slope, intercept):
    """f(x; theta) for a straight line. theta = (slope, intercept)."""
    return slope * x + intercept


def squared_error(y_true, y_pred):
    """Loss for one example."""
    return (y_true - y_pred) ** 2


def mean_squared_error(ys_true, ys_pred):
    """Average loss over a dataset. Pure: no I/O, no globals, no mutation."""
    total = 0.0
    for y_true, y_pred in zip(ys_true, ys_pred):
        total = total + squared_error(y_true, y_pred)
    return total / len(ys_true)


if __name__ == "__main__":
    xs = [0.0, 1.0, 2.0, 3.0, 4.0]
    ys = [2.0, 5.0, 8.0, 11.0, 14.0]      # exactly 3x + 2

    preds = [predict(x, slope=3.0, intercept=2.0) for x in xs]
    print("preds      :", preds)
    print("mse perfect:", mean_squared_error(ys, preds))

    bad = [predict(x, slope=2.5, intercept=2.0) for x in xs]
    print("mse bad    :", mean_squared_error(ys, bad))
```

Run it. **Expected output:**

```
preds      : [2.0, 5.0, 8.0, 11.0, 14.0]
mse perfect: 0.0
mse bad    : 1.5
```

Check the `1.5` by hand before you move on — errors are `0, -0.5, -1.0, -1.5, -2.0`, squares are
`0, 0.25, 1.0, 2.25, 4.0`, sum `7.5`, over 5 → `1.5`. If your number differs, your typing differs.

**Prove purity:** add this and run again. It must print `True` three times.

```python
    print(predict(1.0, 3.0, 2.0) == predict(1.0, 3.0, 2.0))
    print(mean_squared_error(ys, preds) == mean_squared_error(ys, preds))
    print(ys == [2.0, 5.0, 8.0, 11.0, 14.0])   # nothing mutated our input
```

---

## Part 2 — BREAK IT: the mutable default (20 min)

Create `break_default.py`. Type it.

```python
"""W1D2 lab - Part 2: the mutable default argument trap."""


def record_run(score, history=[]):        # <-- the bug. Leave it in for now.
    history.append(score)
    return history


def run_experiment(lr, history=[]):       # <-- same bug, one layer up
    score = 1.0 - lr
    record_run(score, history)
    return history


if __name__ == "__main__":
    print("run A:", run_experiment(0.1))
    print("run B:", run_experiment(0.2))
    print("run C:", run_experiment(0.3))

    print("defaults object id:", id(run_experiment.__defaults__[0]))
    print("returned object id:", id(run_experiment(0.4)))
    print("__defaults__      :", run_experiment.__defaults__)
```

**Predict the output before you run it. Write your prediction in `prediction.txt`.**
Then run it. **Expected output** (ids will differ on your machine, but the two ids must match):

```
run A: [0.9]
run B: [0.9, 0.8]
run C: [0.9, 0.8, 0.7]
defaults object id: 4382910208
returned object id: 4382910208
__defaults__      : ([0.9, 0.8, 0.7, 0.6],)
```

Three things to actually notice:

1. `run B` is `[0.9, 0.8]`, not `[0.8]`. One list, three calls.
2. The two `id()` values are **identical** — the returned list *is* the default object.
3. `__defaults__` is a tuple hanging off the function object. The state lives on the function.
   This is the proof, not the analogy.

**Now make it worse, so you feel why it matters.** Add:

```python
    fresh = run_experiment(0.5, history=[])
    print("fresh:", fresh)
    print("but the default is still:", run_experiment.__defaults__)
```

A caller who passes their own list gets clean behaviour. A caller who doesn't gets contaminated
results — and both call sites look identical in a code review. That is why this bug survives review.

---

## Part 3 — FIX IT (15 min)

Create `fixed_default.py`. Type it.

```python
"""W1D2 lab - Part 3: fixing the mutable default."""


def record_run(score, history=None):
    if history is None:
        history = []          # new list, at CALL time, per call
    history.append(score)
    return history


def run_experiment(lr, history=None):
    if history is None:
        history = []
    score = 1.0 - lr
    record_run(score, history)
    return history


if __name__ == "__main__":
    print("run A:", run_experiment(0.1))
    print("run B:", run_experiment(0.2))
    print("run C:", run_experiment(0.3))
    print("__defaults__:", run_experiment.__defaults__)

    shared = []
    run_experiment(0.4, history=shared)
    run_experiment(0.5, history=shared)
    print("shared:", shared)
```

**Expected output:**

```
run A: [0.9]
run B: [0.8]
run C: [0.7]
__defaults__: (None,)
shared: [0.6, 0.5]
```

`__defaults__: (None,)` is the receipt. There is no list on the function object any more.

**Answer in `prediction.txt`:** the `shared` list still gets mutated by the caller's own reference.
Is that a bug or a feature? State the API contract you would document, in one sentence.

---

## Part 4 — BREAK IT: scope and closures (20 min)

Create `break_scope.py`. Type it.

```python
"""W1D2 lab - Part 4: scope and late-binding closures."""

best_score = 0.0


def bump_best(score):
    """BROKEN. Do not fix yet - run it and read the traceback."""
    print("current best:", best_score)
    best_score = max(best_score, score)
    return best_score


def build_schedulers_broken():
    """BROKEN. Returns 3 functions that all report the same epoch."""
    out = []
    for epoch in range(3):
        out.append(lambda: epoch)
    return out


if __name__ == "__main__":
    print("schedulers:", [f() for f in build_schedulers_broken()])
    print("leftover loop var 'epoch' is NOT visible here - it was local to the function")
    bump_best(0.5)      # raises
```

Run it. **Expected output:**

```
schedulers: [2, 2, 2]
leftover loop var 'epoch' is NOT visible here - it was local to the function
Traceback (most recent call last):
  ...
UnboundLocalError: cannot access local variable 'best_score' where it is not associated with a value
```

*(That is the Python 3.11+ wording, which is what your 3.12 will print. On 3.10 and earlier the same
error reads `local variable 'best_score' referenced before assignment`. Same error, same cause.)*

Two failures, one cause each:

- `[2, 2, 2]` — all three lambdas closed over the **same variable** `epoch`, and read it after the
  loop ended at 2.
- `UnboundLocalError` on the `print` line, which runs *before* the assignment. The compiler saw
  `best_score = ...` in the body and marked the name local for the whole function.

**Write in `prediction.txt`:** why the traceback points at the `print` line and not the assignment.

---

## Part 5 — FIX IT properly (15 min)

Create `fixed_scope.py`. Type it.

```python
"""W1D2 lab - Part 5: fixing scope, two ways, one of them right."""

best_score = 0.0


def bump_best_global(score):
    """Works. Still bad design - it writes module state."""
    global best_score
    best_score = max(best_score, score)
    return best_score


def bump_best_pure(current_best, score):
    """Correct. Pure: inputs in, value out, nothing outside touched."""
    return max(current_best, score)


def build_schedulers():
    """Fixed: default arg binds the value at lambda-creation time."""
    return [lambda e=epoch: e for epoch in range(3)]


if __name__ == "__main__":
    print("global version :", bump_best_global(0.5), bump_best_global(0.3))

    best = 0.0
    for s in (0.5, 0.3, 0.9):
        best = bump_best_pure(best, s)
    print("pure version   :", best)

    print("schedulers     :", [f() for f in build_schedulers()])
```

**Expected output:**

```
global version : 0.5 0.5
pure version   : 0.9
schedulers     : [0, 1, 2]
```

**Answer in `prediction.txt`:** `bump_best_pure` needs one extra argument and one extra line at the
call site compared to `bump_best_global`. Name two concrete things that buys you. "It's cleaner"
scores zero — I want testability and concurrency stated explicitly, with the mechanism.

---

## Part 6 — `*args` / `**kwargs` pass-through (15 min)

Create `wrapper.py`. Type it.

```python
"""W1D2 lab - Part 6: pass-through wrappers and what they cost."""

import time


def train(data, *, epochs=10, lr=0.01, seed=None):
    """Keyword-only knobs. seed=None means 'no determinism requested'."""
    return {
        "n": len(data),
        "epochs": epochs,
        "lr": lr,
        "seed": seed,
    }


def timed(fn, *args, **kwargs):
    """Wraps ANY function without knowing its signature."""
    t0 = time.perf_counter()
    out = fn(*args, **kwargs)
    print(f"{fn.__name__} took {time.perf_counter() - t0:.6f}s")
    return out


if __name__ == "__main__":
    data = list(range(100))

    print(timed(train, data, epochs=50, lr=0.001, seed=7))

    opts = {"epochs": 3, "lr": 0.5}
    print(timed(train, data, **opts))

    # Now break it deliberately - a typo'd keyword.
    try:
        print(train(data, epcohs=50))
    except TypeError as e:
        print("caught:", e)

    # And prove positional args are rejected.
    try:
        print(train(data, 50, 0.001))
    except TypeError as e:
        print("caught:", e)
```

**Expected output** (timings will differ):

```
train took 0.000002s
{'n': 100, 'epochs': 50, 'lr': 0.001, 'seed': 7}
train took 0.000001s
{'n': 100, 'epochs': 3, 'lr': 0.5, 'seed': None}
caught: train() got an unexpected keyword argument 'epcohs'
caught: train() takes 1 positional argument but 3 were given
```

Both `TypeError`s are the language doing you a favour. **Final exercise:** change `train`'s signature
to `def train(data, **kwargs)` with `epochs = kwargs.get("epochs", 10)` in the body, rerun, and watch
the `epcohs` typo stop raising and silently train for 10 epochs instead of 50. Then revert it.

Write in `prediction.txt` what that would have cost you if it had happened in a real experiment.

---

## Commit — the day is not logged without this

Per the curriculum: **no commit, no logged day, no streak.**

```bash
cd ~/Documents/aiml-track
git add labs/2026-08-10/ notes/w1d2-functions-scope.md notes/w1d2-reflection-key.md
git add notes/w1d1-homework-q7-q10.md notes/w1d2-preread.md
git add sessions/ resources.md
git commit -m "feat(w1d2): functions, arguments, scope, pure functions lab"
git push
git log -1 --format=%h
```

Paste that short hash into your session note. It goes into `meta.lastCommit`.

---

## Done checklist

- [ ] Six files created, every line typed by hand
- [ ] `prediction.txt` written **before** running Parts 2 and 4
- [ ] All expected outputs matched (or the difference explained)
- [ ] `mse bad = 1.5` verified by hand arithmetic
- [ ] The two `id()` values in Part 2 confirmed identical
- [ ] Five written answers in `prediction.txt`
- [ ] Committed and pushed, hash recorded
