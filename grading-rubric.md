# Grading Rubric & Skill Calibration

*Rewritten 10 Aug 2026 as part of the restart. The old version — 10 questions daily, strict marking, pass 70 — was built for a pace that turned out to be wrong. This one is built to measure the teaching.*

## Principle

**The score measures the curriculum, not the student.** A low score means the day was taught badly, sequenced badly, or was too big for one session. The correct response to a low score is to change the teaching, never to push harder on the learner.

---

## Daily check (5 questions, /50, end of session)

| Type | Count | Marks | What it tests |
|---|---|---|---|
| Recall | 2 | 8 | Can you state today's idea in your own words |
| Trace | 2 | 10 | Given 3–5 lines, what does it print |
| Write | 1 | 14 | Write 3–5 lines using today's concept |

**Marking:** generous on wording, strict on understanding. A right answer phrased clumsily is a right answer. A confident answer that misses the mechanism is not.

**Guessing is required.** An attempt scores partial marks; a blank scores zero. If Harsh says "I don't know", the correct response is "guess anyway, out loud" — never move on to the next question with nothing written.

**Interpreting the score:**

| Score | What it means | What happens |
|---|---|---|
| 40–50 | Landed. | Next concept tomorrow. |
| 28–39 | Partial. | Tomorrow opens with 20 minutes re-teaching the weak half, then continues. |
| Below 28 | **The teaching failed.** | Tomorrow repeats the same concept from scratch, differently. This is a normal event, not a setback. |

Two sub-28 days in a row on related topics → the concept is too big. Split it into two days and re-sequence the week.

---

## Saturday exam (10 questions, /100, 30 min, open-notes)

- **Section A · Recall** — 5 questions × 8 marks
- **Section B · Trace the code** — 3 questions × 10 marks
- **Section C · Write code** — 2 questions × 15 marks

**Pass = 60.** Open-notes is deliberate: the skill being tested is finding and applying what you wrote down, which is what the job actually is.

Only material **taught live and practised** is examinable. Anything delivered as reading-only, or skipped, is off the paper.

**Below 60** → the following Monday re-teaches the two weakest topics. No penalty, no catch-up debt. The week's remaining plan shifts by one day; practice days absorb the slip.

---

## Skill axes

Eight axes, 0–100, measured against a working AI/ML engineer.

| Band | Means |
|---|---|
| 0–20 | Has heard of it |
| 21–40 | Can follow along with an example open |
| 41–60 | Can write it with notes open, makes structural mistakes |
| 61–75 | Writes it unaided, correct but not elegant |
| 76–88 | Production-capable, catches own mistakes, knows the tradeoffs |
| 89–100 | Can design, teach and debug others' work in this area |

**Movement rules:**

- Daily check ≥ 40/50 → **+1.0** on the relevant axis
- Daily check 28–39 → **+0.5**
- Daily check < 28 → **0**
- Saturday exam ≥ 80 → **+2.0** on the week's dominant axis
- Saturday exam 60–79 → **+1.0**
- Saturday exam < 60 → **0**, and the axis is flagged for re-teaching

**Hard constraints:**

1. No axis moves without a scored assessment. Ever.
2. No axis exceeds its target.
3. An axis that hasn't been tested in 3+ weeks decays by 1 point per week. Untested is not the same as retained.
4. **If retention drops, the number drops.** A dashboard that only goes up is decoration.

During Phase 1 only `python` moves. The other seven are frozen at their baseline values and explicitly marked unverified — Phase 1 does not touch NumPy, pandas, math or ML, so claiming movement there would be fiction.

---

## Streak

- **+1** for each session attended where practice code was committed.
- A missed day pauses the streak; it does not reset it. Life happens, and a broken streak is a reason people quit rather than a reason they work harder.
- A session that fails for a *system* reason — the tutor task firing outside the window, an outage, a missing prompt — never counts against the streak. That's a defect on my side.
- Saturday exams don't affect the streak either way.

---

## What is never allowed

- Inventing a score for a session that wasn't sat.
- Raising an axis on the basis of "he seemed to get it".
- Marking a phase complete before its gate exam is passed and its capstone is committed.
- Republishing the dashboard with unchanged state purely to refresh the timestamp — an absent update is honest, a fake one is not.
