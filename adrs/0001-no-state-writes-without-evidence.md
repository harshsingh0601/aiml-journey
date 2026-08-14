# ADR 0001 — No writes to dashboard state without a scored assessment or a commit

**Status:** Accepted
**Date:** 2026-08-10
**Deciders:** AI/ML tutor task, on behalf of Harsh Singh
**Supersedes:** nothing
**Applies to:** `aiml-daily-tutor`, `aiml-weekly-exam`, and any future task that writes
`aiml-dashboard-state.json` or the pinned `aiml-track-dashboard` artifact.

---

## Context

Three of the first four scheduled runs of this track ended without a conducted session:

| Date | Run | Why no session |
|---|---|---|
| 2026-08-07 | second daily run | W1D1 already delivered earlier that day |
| 2026-08-08 | weekly exam | Sat 8 Aug is not an exam date; Exam 1 is Sat 15 Aug |
| 2026-08-10 | daily | task fired 14:26 IST, after the 11:00–14:00 window closed; Harsh absent |

Each run had to decide independently whether to write state. Each reasoned it out from scratch and
reached the same answer. That is three chances to reason differently under time pressure, and the
failure is asymmetric: a wrongly-inflated dashboard is not detectable by looking at the dashboard.

There is also a real pull toward writing *something*. The brief's Step 7 is emphatic that skipping the
artifact publish is a known past failure (7 Aug), and a run that touches nothing can look like a run
that forgot. That pressure needs an explicit release valve, or eventually a run will invent a score to
avoid looking idle.

## Decision

**A run writes to `aiml-dashboard-state.json` only when it holds evidence, and each field has one
specific piece of evidence that unlocks it.**

| Field | Written only when |
|---|---|
| `quizHistory` entry | A quiz was actually administered and marked, answer by answer |
| `skillAxes[*].current` | A scored assessment exists in this run, moved per `grading-rubric.md` bands |
| `phases[*].progress` | A session was delivered **and** its lab was committed |
| `streak.current` / `.longest` | A lab commit is visible in `git log` |
| `meta.lastCommit` | A commit hash was produced by this run |
| `meta.lastSession` | A session was conducted |

Corollaries:

1. **Never simulate the student.** Generating plausible answers on Harsh's behalf and grading them
   produces a number with no information in it. A quiz with no one to answer it is written to
   `quizzes/` and marked *unadministered*, not scored.

2. **If `state.json` is unchanged, do not run `sync-dashboard.py` and do not call `update_artifact`.**
   Republishing identical HTML stamps a fresh `updatedAt` on the pinned dashboard, which signals
   "logged today" to anyone glancing at it. Step 7 of the brief exists to stop the artifact lagging
   behind a *changed* state.json. It is not a mandate to touch the artifact on a day when nothing
   changed — a stale-but-honest timestamp beats a fresh-but-false one.

3. **Every no-write run must say so explicitly**, in a session file under `sessions/`, listing which
   fields were considered and left alone, and quoting the artifact's actual current `updatedAt` from
   `list_artifacts`. Silence is indistinguishable from having forgotten.

4. **Carry-over goes in the session file, not in state.** The next run reads the most recent
   `sessions/` file as step 5 of its context load. That is the designed handoff channel. Do not invent
   new keys in `state.json` to pass messages forward — they are invisible on the dashboard and they
   risk breaking `sync-dashboard.py`.

5. **Streak decisions resolve against `git log`, not against whether a run happened.** A weekday
   missed because the *student* didn't show resets the streak. A weekday missed because the *task*
   fired late does not — but it also does not increment it. The next run settles it on evidence.

## Consequences

**Good.** The dashboard means what it says. `phases[0].progress = 5.0%` after four calendar days is
uncomfortable and correct — one day of twenty has been delivered. Any future run can make the same
call in seconds by reading this file.

**Bad.** The dashboard will sometimes look stale when work genuinely happened offline (Harsh
self-studying without committing). Mitigation: the commit *is* the evidence, which is why the
curriculum already makes committed code a non-negotiable gate. If it isn't committed, it didn't happen
— for the dashboard's purposes, and increasingly for a hiring manager's.

**Also bad.** A reader who doesn't open the session file sees an unchanged dashboard and can't tell
whether the day was skipped or the run was blocked. Consequence 3 exists to close that gap, and the
session file is the thing to read.

## Alternatives rejected

- **Log a zero for a day with no session.** Rejected — a zero is a claim about Harsh's ability. There
  is no evidence for it, and it would drag `weeklyAvg` down for a scheduling fault.
- **Bump `phases[*].progress` on material delivered rather than consumed.** Rejected — Milestone 1
  gates on "curriculum ≥ 50% complete". Measuring what was *written* rather than what was *learned*
  makes that gate meaningless at exactly the moment it matters.
- **Add a `status: "missed"` day type to `quizHistory`.** Rejected for now — `quizHistory` is charted,
  and a null-score entry would need special handling in `sync-dashboard.py` and in the artifact's
  chart code. Revisit only if missed days become frequent enough to be worth tracking; the session
  files carry the record until then.
