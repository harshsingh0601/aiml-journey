# Baseline Assessment — Harsh Singh

**Date issued:** Fri 7 Aug 2026 (Day 0)
**Status:** ⚠️ **AWAITING ANSWERS** — issued by an automated scheduled run; Harsh was not present to take it live.
**Purpose:** diagnostic only. Not graded. Not logged to `quizHistory`. Does not affect the streak or any milestone criterion.

---

## How to take this

Write your answers directly under each question in this file, then tell me it's done and I'll calibrate the dashboard against reality.

Answer honestly and answer fast — two or three sentences each, no research, no looking anything up. This measures what's in your head right now, which is exactly the useful thing. **"I don't know" is a correct and valuable answer here.** It costs nothing today. Guessing costs you a lot in Week 6, when I've assumed you understood something you didn't.

---

## Section A — What you already know (transferring from C#)

**Q1.** In C#, explain the difference between a value type and a reference type, and what happens when you pass each to a method. (I'm checking whether the mental model exists — Python's naming/binding model is the single biggest source of confusion for C# developers, and I teach it differently depending on your answer.)

> *Your answer:*

**Q2.** You have a `List<Customer>` with 10 million entries and you need to look up customers by email address, repeatedly, in a loop. What do you change and why? Give the complexity of both the before and after if you can.

> *Your answer:*

**Q3.** Describe, in your own words, what a unit test is *for* — not how to write one. What does having them actually buy you?

> *Your answer:*

---

## Section B — Python exposure

**Q4.** Have you ever written or run any Python at all? Tick whichever applies and add a sentence:

- [ ] Never written a line
- [ ] Copy-pasted a script someone gave me and ran it
- [ ] Modified an existing script to do something slightly different
- [ ] Written something small from scratch (what?)

> *Your answer:*

**Q5.** Without running it — what does this print, and why?

```python
x = [1, 2, 3]
y = x
y.append(4)
print(x)
```

> *Your answer:*

**Q6.** What do you think Python's significant whitespace means in practice, and do you already have a guess about why it causes bugs?

> *Your answer:*

---

## Section C — School-level maths

No formulas needed. Plain English is the point.

**Q7.** What is a **derivative**? Describe it however you like — a rate, a slope, a picture, an analogy. If you remember nothing, say so.

> *Your answer:*

**Q8.** You have five numbers: 2, 4, 4, 4, 86. What is the **average**? Is the average a good summary of this set — and if not, what would you report instead?

> *Your answer:*

**Q9.** When a weather app says "70% chance of rain tomorrow", what does the 70% actually mean? Is there any sense in which that forecast can be *wrong* if it doesn't rain?

> *Your answer:*

---

## Section D — What you think ML is

**Q10.** In your own words: what does a machine learning model actually *do*? Then pick one of these two and say which is more machine-learning-shaped, and why:

- (a) A rules engine that flags a transaction as fraud if the amount is over ₹50,000 and the location is outside India
- (b) A system that was shown 2 million past transactions labelled fraud/not-fraud and now scores new ones

> *Your answer:*

---

## Baseline reading — **PROVISIONAL, not yet evidence-based**

The values below are the ones already in `aiml-dashboard-state.json`. They were set from your stated background, **not from a scored assessment**, and I have deliberately **not changed them** — the grading rubric says no axis moves without evidence, and that rule binds me as much as it binds you.

| Axis | Current | Target | Basis | Confidence |
|---|---|---|---|---|
| Python | 15 | 90 | Self-reported fresher. "Has heard of it" band. | Low — Q4/Q5 will confirm or move this |
| Math & Stats | 20 | 80 | Engineering degree, long unused. | Low — Q7/Q8/Q9 will confirm |
| Data / pandas | 8 | 88 | No exposure claimed. | Medium — very likely accurate |
| Classical ML | 5 | 88 | No exposure claimed. | Medium — very likely accurate |
| Deep Learning | 3 | 85 | No exposure claimed. | Medium — very likely accurate |
| LLM / GenAI | 20 | 88 | Consumer/API-level familiarity assumed from a senior engineer in 2026. | **Low — could be badly off in either direction.** Not directly tested by these 10 questions; I'll probe it properly in Week 19. |
| MLOps | 15 | 85 | DevOps and CI/CD experience transfers partially; ML-specific practice absent. | Medium |
| Prod Engineering | 30 | 88 | Strongest axis. Real .NET/Azure architecture and deployment experience. | Medium — Q2/Q3 will refine |

### Honest expectations for the first four weeks

The realistic risk in Phase 1 is not that Python is hard — it isn't, and with your background you'll be productive in it inside two weeks. The risk is **fluency versus familiarity**. You will be able to read Python long before you can write it without thinking, and that gap is invisible until a lab goes slowly. This is what non-negotiable #1 exists for: typing every line is the only thing that closes it.

The second risk is Weeks 5–7. Twenty years of engineering experience does not help with eigenvectors, and a senior engineer's instinct when hitting genuinely unfamiliar ground is often to route around it and rely on general capability. There is nothing to route around here. Those three weeks are load-bearing for Weeks 14–18.

The advantage is real too, and it shows up in Phase 3. Week 13 — serialisation, FastAPI, Docker, Azure Container Apps, health checks, monitoring — is the week most ML learners find hardest, and it should be the easiest week of your entire track. Expect the `prodEng` axis to move fastest.

### After you answer

I'll rewrite this section with an evidence-based baseline, adjust `skillAxes` in `aiml-dashboard-state.json` if the answers warrant it, and note any Week 1 adjustments (e.g. if Q5 lands cleanly, Day 1's mutability material compresses and we spend the recovered time on the execution model).

**Not logged:** no quiz score, no streak change, no phase progress. This is Day 0.
