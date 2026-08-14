# Exam 1 Study Guide — Sat 22 Aug 2026, 12:00–13:00 IST

**Format:** 30 minutes · 10 questions · **open-notes** · pass mark 60
**Covers:** Days 1–9 only (Tue 11 Aug – Fri 21 Aug)
**Nothing else is examinable.** If it isn't on this page, it isn't on the paper.

> **Sat 15 Aug: there is no exam.** It was cancelled in the restart. Do nothing that day, or spend 30 minutes re-running your own Day 1–4 files for fun. Nothing is scored.

---

## What the paper looks like

| Section | Questions | Marks each | What it asks |
|---|---|---|---|
| A · Recall | 5 | 8 | "What does `//` do?" · "What is the difference between `=` and `==`?" |
| B · Trace the code | 3 | 10 | A 3–5 line snippet. **What does this print?** |
| C · Write code | 2 | 15 | "Write a function that takes a list of numbers and returns the largest." Small. Nothing tricky. |

**Open-notes means open-notes.** Your own files, your own notes, the session reports — all allowed. What you cannot do is ask me during the exam. The point is to test whether you can *find and apply* what you've written down, which is exactly what the job is.

---

## The nine days it covers

| Day | Date | Topic |
|---|---|---|
| D1 | Tue 11 Aug | Running Python · REPL · `.py` files · `print()` · reading errors |
| D2 | Wed 12 Aug | Variables and names · `=` · `type()` |
| D3 | Thu 13 Aug | Numbers · `int` vs `float` · `+ - * /` `//` `%` `**` · precedence |
| D4 | Fri 14 Aug | Strings · f-strings · `len()` · indexing · string methods |
| D5 | Mon 17 Aug | Booleans · `==` `!=` `<` `>` · `and` `or` `not` · truthiness |
| D6 | Tue 18 Aug | `if` / `elif` / `else` · indentation |
| D7 | Wed 19 Aug | Lists · indexing · slicing · `append` · `remove` · `len` |
| D8 | Thu 20 Aug | Mutability · names vs objects · aliasing vs copying |
| D9 | Fri 21 Aug | Practice day — no new material |

---

## Revision checklist

Tick these off in the two days before. If you can do all of them **without looking at an example**, you're ready.

### Running code and errors (D1)

- [ ] Run a `.py` file from the terminal
- [ ] Tell the difference between the REPL and a script file
- [ ] Look at a traceback and say **which line** broke and **what kind** of error it was
- [ ] Recognise `SyntaxError`, `NameError`, `TypeError`, `IndexError` by sight

### Variables and types (D2)

- [ ] Explain what `x = 5` actually does, in your own words
- [ ] Predict what `type()` returns for a number, a decimal, some text, `True`, and a list
- [ ] Know why `2x = 5` is illegal and `x2 = 5` is fine

### Numbers (D3)

- [ ] `7 / 2`, `7 // 2`, `7 % 2`, `2 ** 3` — say each result before running it
- [ ] Explain why `/` gives `3.5` but `//` gives `3`
- [ ] Work out `2 + 3 * 4` and say why it isn't 20

### Strings (D4)

- [ ] Build a sentence with an f-string
- [ ] Get the first and last character of a string using indexing
- [ ] Use `len()`, `.upper()`, `.lower()`, `.strip()`, `.split()`
- [ ] Say what `"5" + "5"` gives, and what `"5" + 5` gives

### Booleans and conditions (D5, D6)

- [ ] Say the difference between `=` and `==` without hesitating
- [ ] Predict the result of `True and False`, `not True`, `5 > 3 or 2 > 7`
- [ ] Write an `if` / `elif` / `else` that classifies a number as negative, zero or positive
- [ ] Explain what happens if the indentation is wrong

### Lists (D7)

- [ ] Create a list, get item 0, get the last item
- [ ] Slice: from a list of 5 items, get items 1–3
- [ ] `append` something, `remove` something, get the `len`
- [ ] Say what `my_list[10]` does on a 3-item list

### Mutability (D8) — **the one to spend extra time on**

- [ ] Explain, out loud, the difference between a **name** and the **object** it points to
- [ ] Predict what this prints:
  ```python
  a = [1, 2, 3]
  b = a
  b.append(4)
  print(a)
  ```
- [ ] Explain why the answer is `[1, 2, 3, 4]` and not `[1, 2, 3]`
- [ ] Say how you'd make `b` a genuine copy instead
- [ ] Predict what this prints, and why it differs from the above:
  ```python
  x = 5
  y = x
  y = y + 1
  print(x)
  ```

That last pair is the whole of Day 8, and it's the one topic on this exam that people reliably get wrong. **If you only have time for one thing, do this one.** It's also the topic that broke Day 1 in the old plan — this time it arrives with seven days of groundwork under it.

---

## How to actually revise

**Do this** — 45 minutes, twice, on Thu 20 and Fri 21:

1. Open a blank file. From memory, write one small program using each day's topic — five lines each is plenty.
2. Run every one. Note anything you couldn't write without checking.
3. Re-read only the notes for those specific things.

**Don't do this:**

- Don't re-read notes start to finish. Reading feels productive and isn't. Recall is what builds memory; recognition is what fools you into thinking you have it.
- Don't cram on Saturday morning.
- Don't touch anything from the old, superseded plan — no closures, no `*args`, no decorators. Not examinable, not helpful, not yet.

---

## If you're behind

Say so on **Thu 20 Aug** and the exam moves. It is a thermometer, not a deadline — its only job is to tell me what needs re-teaching. Sitting it while you know you're not ready gives us both a number that means nothing.

A low score changes exactly one thing: the following Monday re-teaches the two weakest topics. That's it. No penalty, no falling behind — re-teaching *is* the plan working.
