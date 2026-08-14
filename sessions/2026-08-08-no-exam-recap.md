# Saturday 8 Aug 2026 · 12:00 IST — NO EXAM RUN

**Outcome:** no exam. This is correct per the schedule, not a skip.

| Check | Finding |
|---|---|
| Today | Sat 8 Aug 2026 |
| Exam 1 date | **Sat 15 Aug 2026** — one week away |
| Material covered | 1 day (W1D1, Fri 7 Aug) of a 5-day week |
| `quizHistory` length | 1 |
| Decision | Recap only. `aiml-dashboard-state.json` and the dashboard artifact **not touched.** |

Running a 25-question weekly exam on a single day's material would produce a score
that measures nothing and would poison `examHistory` and `weeklyAvg` with a number
that isn't comparable to any future exam. Skipped.

---

## 10-minute recap — everything covered so far

**Day 0 · Fri 7 Aug (morning)** — orientation, baseline assessment, environment
(Python 3.12, uv, VS Code, Jupyter, repo bootstrapped).

**W1D1 · Fri 7 Aug, 11:00–14:00** — Python execution model.

- Names are bindings to objects. Dynamic typing, strong typing.
- **`=` rebinds, methods mutate.** The day's core rule.
- Mutable: `list` `dict` `set`. Immutable: `int` `float` `str` `bool` `tuple`.
- Pass by assignment. There is no `ref` / `out` in Python.
- `int` is arbitrary-precision; `float` is IEEE-754; `bool` subclasses `int`; `None` is a singleton.
- `/` always returns float · `//` floors toward −∞ · `%` sign follows the divisor ·
  chained comparisons · `and` / `or` return **operands**, not booleans · truthiness.
- `0.1 + 0.2 != 0.3` and why.

**Quiz 1: 57/100** — MCQ 30/30 · short answer 15/36 · code-debug 12/14 · applied 0/20.

### The one number that matters

You did not fail Quiz 1 on comprehension. You scored **100% on everything you attempted
by recognition** and **0% on both questions that required you to generate an answer from
scratch**. 32 of the 43 marks you dropped were blanks, not errors. Q7 had been taught
explicitly, that same morning, in the concept block.

That is a behavioural pattern, not a knowledge gap, and it is the single thing most likely
to sink Phase 2 — because from Week 5 onward almost every question is a generate question.
There is no MCQ version of "derive PCA".

---

## What you still owe me

Overdue as of this run. Nothing below is committed — `git status` shows
`notes/w1d1-homework-q7-q10.md` still untracked and unanswered.

1. **Q7 re-answer (12 marks)** — rebinding vs mutating a parameter. All three parts.
   Worksheet is sitting in `notes/w1d1-homework-q7-q10.md`.
2. **Q10 re-answer (20 marks)** — designing `Config` for immutability, all four parts,
   including the .NET mapping (`readonly` / `record` / `init` / `ImmutableList<T>`) and
   where that analogy **breaks**.
3. **`is` vs `==` for `None`**, and what "singleton" actually buys you. Your D1 answer was shallow.
4. **Floor division, worded correctly** — `//` moves *left on the number line*, not "toward the smaller number". Say it the right way once and it stops biting you on negatives.
5. **`or` returns an operand.** State what `0 or []` evaluates to and what type it is.
6. **Binary float representation** — the actual mechanism (denominators are powers of two),
   not the "like 1/3 in decimal" analogy. The analogy is a memory aid, not an explanation.

All six feed Exam 1 directly. Items 1 and 2 are graded on Monday before W1D2 starts.

---

## Where you actually stand

- Phase 1 progress: **5%** (1 of 20 days). On schedule — Week 1 runs Fri 7 → Thu 13 Aug.
- Streak: 1 day. Commits: 3 (`e5c4ae5`, `f7e9b0f`, `0761eab`).
- Skill axes unchanged since the baseline; one quiz is not enough evidence to move any of them,
  and the rubric forbids raising an axis without a scored assessment behind it.
- Untracked and needing a commit: `notes/w1d1-homework-q7-q10.md`, `notes/w1d2-preread.md`,
  `sessions/2026-08-07-run2-no-session-due.md`.

---

## The week ahead

| Day | Date | Topic |
|---|---|---|
| W1D2 | Mon 10 Aug | Control flow, loops, functions, arguments, scope, `*args`/`**kwargs`, pure functions |
| W1D3 | Tue 11 Aug | list / tuple / dict / set, mutability, comprehensions, unpacking |
| W1D4 | Wed 12 Aug | Strings & formatting, file I/O, exceptions, modules & packages, `__main__` |
| W1D5 | Thu 13 Aug | Idiomatic Python (`enumerate`, `zip`, slicing, `pathlib`), mini CLI project |
| — | Fri 14 Aug | Buffer / review day. No new topic, no quiz. |
| **Exam 1** | **Sat 15 Aug, 12:00–13:00 IST** | 25 questions · pass gate **70** |

**Prerequisite risk for Monday:** W1D2 is scope and mutable default arguments. Both sit
directly on top of the names-vs-objects model you left unanswered in Q7. If Q7 is still blank
on Monday morning, `def f(x, acc=[])` will not make sense to you and the day compounds.
Do Q7 first. `notes/w1d2-preread.md` is a 20-minute primer, not a substitute.

**Exam 1 format** — 10 MCQ this week · 6 MCQ cumulative · 4 short-answer tradeoffs ·
3 code-debug · 2 mini design. Weighted: current week 40 · retention 30 · applied/design 30.
**A skipped question scores zero.** On Quiz 1 that convention cost you 32 marks. On Exam 1,
with 30 of 100 marks sitting in applied and design, the same habit caps you at 70 — exactly
the pass gate — even if every other answer is perfect. Below 70 turns Monday 17 Aug into a
remediation day and costs you a week of the 26.

---

## State integrity

Per the task brief: before 15 Aug, exit without touching state or dashboard.

- `aiml-dashboard-state.json` — **read only, not modified.**
- `examHistory`, `weeklyAvg`, `skillAxes`, `streak`, `phases[].progress` — **untouched.**
- `sync-dashboard.py` — **not run.**
- `mcp__cowork__update_artifact` — **not called.** Republishing unchanged content would only
  stamp a misleading new `updatedAt` on the pinned dashboard.

Next scheduled action: **Mon 10 Aug 2026, 11:00 IST — W1D2.**
First real exam: **Sat 15 Aug 2026, 12:00 IST.**
