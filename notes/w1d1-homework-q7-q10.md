# W1D1 Homework — Q7 and Q10, re-answered

**Owed by:** Mon 10 Aug 2026, 11:00 IST (before W1D2 starts)
**Why this exists:** you scored 57 on Quiz 1. You lost **32 of the 43 marks you dropped** by not attempting two questions — not by getting them wrong. Q7 was taught explicitly in the D1 concept block. That is not a comprehension failure, it is a refusal-to-generate failure, and it is the single biggest risk to Phase 2.

A wrong attempt is worth more than a blank. A blank tells me nothing. A wrong answer tells me exactly which mental model to fix.

**Rules:**

- Answer in your own words. No searching, no LLM, no re-reading the D1 notes until *after* you've written a first draft.
- Write the draft, *then* check the notes, *then* mark your own draft in a different section. I want to see the delta.
- Commit this file. It is graded on Monday and it feeds Exam 1 (Sat 15 Aug).

---

## Q7 (short answer, 12 marks) — rebinding vs mutating a parameter

Consider:

```python
def f(items):
    items = items + [99]
    return items

def g(items):
    items.append(99)
    return items

a = [1, 2, 3]
b = [1, 2, 3]

f(a)
g(b)

print(a)
print(b)
```

**Answer all three parts. Do not answer part (a) and stop — you did exactly that four times on Day 1.**

**(a)** What does this print, and why are the two results different?

> _your answer:_

**(b)** Python has no `ref` / `out` keyword like C#. Given that, describe in one precise sentence what actually gets passed to a function when you call `f(a)`. Name the thing that is copied and the thing that is not.

> _your answer:_

**(c)** Rewrite `g` so it does the same *useful* work but cannot surprise the caller. State what your version costs compared to the original.

> _your answer:_

**Marking standard I will apply:** "it changes the list" scores zero. I need the mechanism — which name is bound to which object at which point, and which operation rebinds versus which operation mutates in place.

---

## Q10 (applied scenario, 20 marks) — designing for immutability

You are designing a Python module that will sit in a data pipeline. It holds a `Config` object — roughly 40 fields: paths, thresholds, feature flags. It is constructed once at startup and then read by about a dozen downstream functions, several of which run in parallel.

One of those functions has a bug: it mutates `Config` mid-run, and a second function later reads the mutated value and produces silently wrong output. No exception. No log line. You lost two days finding it.

**(a)** Explain the failure mode in terms of names and objects. Why did nothing crash?

> _your answer:_

**(b)** How would you design `Config` so that this class of bug becomes impossible rather than merely unlikely? Give at least two mechanisms Python actually offers and say what each one does and does not prevent.

> _your answer:_

**(c)** What does immutability cost you here — memory, CPU, ergonomics? Be specific: "some overhead" scores zero. When would you accept a mutable config anyway?

> _your answer:_

**(d)** You are a .NET architect. Map this onto something you already know — `readonly`, `record`, `init`-only setters, `ImmutableList<T>`. Where does the Python analogy hold and where does it break down?

> _your answer:_

**Marking standard:** this is marked on reasoning quality, not keyword matching. I do not want you to name `frozen=True`. I want you to explain what guarantee it gives you and, more importantly, what guarantee it does **not** give you.

---

## Self-marking section (fill in only after your first draft is written)

| Part | My draft said | The notes say | What I actually had wrong |
|---|---|---|---|
| Q7a | | | |
| Q7b | | | |
| Q7c | | | |
| Q10a | | | |
| Q10b | | | |
| Q10c | | | |
| Q10d | | | |

---

## Commit

```bash
cd ~/Documents/aiml-track
git add notes/w1d1-homework-q7-q10.md
git commit -m "docs(w1d1): re-answer quiz Q7 and Q10"
git push
```
