# Lab · D1 · Running Python

**Tue 11 Aug 2026 · practice block**

Ten exercises. They start trivially small on purpose — the first one is barely an exercise at all. That is by design; we build up.

**Rules:**

- **Type every line yourself.** No copy-paste. The typos are where the learning is.
- Do them **in order**. Each one assumes the last.
- Tell me the output after each — including when it's an error. Especially when it's an error.
- **Say "too fast" the moment anything feels rushed** and we stop and back up. That sentence is the most useful thing you can say to me.
- If you're not sure what will happen, **guess out loud first, then run it.** A wrong guess that gets corrected sticks; a right answer you didn't predict doesn't.

---

## Warm-up · get Python answering you

### Exercise 1 — find the project

Open Terminal. Type:

```bash
cd ~/Documents/aiml-track
uv run python --version
```

**Tell me exactly what it printed**, including the version number.

---

### Exercise 2 — the REPL

```bash
uv run python
```

The prompt should change to `>>>`. At that prompt, type:

```python
print("hello")
```

Then get out again with `exit()`.

**Two questions:** what did `print("hello")` show, and what did the prompt look like before and after you left?

---

### Exercise 3 — quotes vs no quotes

Back in the REPL (`uv run python`). Type these **one at a time** and note each result:

```python
print("Harsh")
print(4)
print("4")
```

**Before you run the last two:** do you expect `print(4)` and `print("4")` to look different on screen? Guess first, then check.

---

## Your first file

### Exercise 4 — hello.py

In VS Code, create a file at `labs/2026-08-11/hello.py` with exactly one line in it:

```python
print("hello from a file")
```

Save it. Then, in the terminal, from `~/Documents/aiml-track`:

```bash
uv run python labs/2026-08-11/hello.py
```

**What did it print?** And: what's different about this compared with Exercise 2 — where did the `>>>` go?

---

### Exercise 5 — order of execution

Add three more lines to `hello.py` so it has four `print()` lines in total. Make each one print something different so you can tell them apart.

**Before you run it: write down, on paper, the order you expect them to appear.** Then run it and check you were right.

---

## Deliberate breakage

Now we break it on purpose, three times. This is the most valuable block of the day.

Everyone hits these errors. Every Python developer alive has shipped a missing bracket. The skill is not avoiding them — it's reading what Python tells you and fixing it in ten seconds instead of ten minutes.

For each one: **run it, read the error out loud, and tell me (a) the error type, (b) the line number, (c) what you think it means** — before you fix it.

### Exercise 6 — remove a bracket

In `hello.py`, delete the closing `)` from the **first** print line. Save. Run.

Now: the other three print lines are still perfectly fine. **Did any of them run?** Look carefully at the output. What does that tell you about *when* Python checks your file?

Fix it before moving on.

### Exercise 7 — misspell `print`

Change `print` to `prnt` on the first line. Save. Run.

**Different error type this time.** Which one? And why is it a different type from Exercise 6 — what did Python manage to do this time that it couldn't before?

Fix it.

### Exercise 8 — unclosed quote

Delete the closing `"` from one of your print lines. Save. Run.

Read the error. **Predict the fix before you make it.**

Fix it, and check all four lines print correctly again.

---

## On your own

### Exercise 9 — about_me.py

New file: `labs/2026-08-11/about_me.py`.

Write **four** `print()` lines that say something true about you — your name, your city, what you do, why you're learning Python. Content is up to you.

**No example from me on this one.** Everything you need is in Exercises 1–8. If you get an error, read it and fix it yourself first — then show me both the error and your fix.

Run it and paste me the output.

### Exercise 10 — ship it

```bash
cd ~/Documents/aiml-track
git add labs/2026-08-11 notes/w1d1-running-python.md
git commit -m "feat(d1): first Python files - print and reading error messages"
git push
```

Then check https://github.com/harshsingh0601/aiml-journey and confirm your files are there.

**That green square is the receipt.** Day 1, shipped.

---

## Stretch — only if we have time left

Not required, and skipping these costs you nothing.

- **S1.** What happens if you run `uv run python` on a file that doesn't exist? Try `uv run python labs/2026-08-11/nope.py`. Is that error different in kind from Exercises 6–8?
- **S2.** In `hello.py`, put a `#` at the start of one of your print lines and run it. What happened to that line?
- **S3.** Try `print('hello')` with single quotes instead of double. Then try `print("hello')` with one of each. Predict before you run.
