# Grading Rubric & Skill Calibration

## Daily quiz (10 questions, /100)

| Type | Count | Marks each | Grading standard |
|---|---|---|---|
| MCQ | 5 | 6 | Right or wrong. No partial credit. |
| Short answer | 3 | 12 | Must state the *why*, not just the *what*. Half marks for a correct but shallow answer. |
| Code read / debug | 1 | 14 | Must identify the bug AND explain the failure mode. |
| Applied scenario | 1 | 20 | "Given this situation, what would you do and why." Marked on reasoning quality, not keyword matching. |

**Grading tone:** strict. A vague answer is a wrong answer. If Harsh says "it improves performance", the follow-up is "which metric, by what mechanism, at what cost". Wrong answers get corrected immediately and re-asked in a different form later in the week.

## Saturday exam (25 questions, /100)

- Current week: 40 marks
- Cumulative retention (all prior weeks, spaced): 30 marks
- Applied / design: 30 marks

**Pass = 70.** Below 70 triggers a Monday remediation day.

## Milestone assessments

- **Week 13 (7 Nov 2026):** 50 questions, 2 hrs. Pass = 75.
- **Week 26 (6 Feb 2027):** 60 questions, 2 hrs, plus a full mock interview scored 1–10. Pass = 80.

## Skill-axis calibration (how the radar moves)

Each axis is 0–100 against a working AI/ML engineer benchmark.

| Band | Means |
|---|---|
| 0–20 | Has heard of it |
| 21–40 | Can follow a tutorial |
| 41–60 | Can build with docs open, makes structural mistakes |
| 61–75 | Builds independently, correct but not efficient |
| 76–88 | Production-capable, catches own mistakes, knows tradeoffs |
| 89–100 | Can design, teach, and debug others' work in this area |

**Movement rules (applied by the daily tutor and weekly exam tasks):**

- A daily quiz ≥ 85 on a topic → +1.5 on that axis
- A daily quiz 70–84 → +1.0
- A daily quiz 50–69 → +0.5
- A daily quiz < 50 → 0, and the topic is queued for re-teaching
- Weekly exam recalibrates honestly: if cumulative retention questions on an axis are missed, that axis **goes down**. Axes decay by 1 point per axis per week if untouched for 3+ weeks and not re-tested.
- No axis may exceed its target. No axis may be raised without evidence from a scored assessment.

**Be honest.** A dashboard that flatters is worse than no dashboard. If retention dropped, the number drops.

## Streak rules

- Streak +1 for each weekday session completed *with a committed lab*.
- A missed weekday resets the streak to 0. Saturday exams don't affect the streak; a missed Saturday exam does not reset it but the exam must be made up on Sunday.
- Public holidays and declared leave days: streak is paused, not reset — mark the day `"status": "paused"` in the session log.
