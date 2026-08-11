# W1D1 · Running Python

**Tue 11 Aug 2026 · Day 1 of 39 · Phase 1**

> Read this **after** the session, not before, and not instead of it. The session is where the learning happens; this page is here so you can look something up next week without having to remember it.

---

## Today's one concept

**How to make Python run your code.**

That is the whole day. Four small pieces of the same idea:

1. The terminal — where you type commands to your computer
2. The REPL — Python listening to you one line at a time
3. A `.py` file — Python reading instructions you saved
4. `print()` — how Python shows you something
5. Reading an error message when it breaks

**What today is NOT about:** variables, data types, memory, objects, mutability, functions, loops. None of it. If you find yourself wondering "but how do I store a value" — good instinct, that is tomorrow.

---

## 1. The terminal

The terminal is a text box where you type a command and your computer runs it. On your Mac it is the **Terminal** app (or the panel at the bottom of VS Code — same thing).

You already live in this world from .NET. `dotnet run`, `az login`, `git push` — same idea, same shell. Nothing new here.

Two commands are all you need today:

```bash
cd ~/Documents/aiml-track     # move into the project folder
```

`cd` = "change directory". `~` means your home folder. After this, everything you type happens **inside** the project.

```bash
uv run python --version
```

That should print `Python 3.12.x`.

### Why `uv run python` and not just `python`

Your Mac ships with its own old Python. Your project has its own Python 3.12 in the `.venv` folder. `uv run` says *"use the project's Python, not the system one."*

The C# comparison: it is the difference between a globally-installed SDK and a project that pins its own version in `global.json`. You want the pinned one, always.

**Rule for the next 8 weeks: always type `uv run python`, never bare `python`.** It will save you an entire category of confusing errors.

---

## 2. The REPL

Type this:

```bash
uv run python
```

The prompt changes to `>>>`. That is Python saying "go on, I'm listening."

**REPL** stands for Read–Eval–Print–Loop:

- **R**ead — it reads the line you typed
- **E**val — it works out what that line means
- **P**rint — it shows you the answer
- **L**oop — it goes back to waiting for the next line

It is the C# Interactive window / `dotnet script`, if you have used those. A scratchpad.

Type:

```python
>>> print("hello")
hello
```

To get out:

```python
>>> exit()
```

**When to use the REPL:** trying one small thing. "What does this do again?" It forgets everything the moment you leave, which is exactly what you want for an experiment and exactly wrong for real work.

---

## 3. A `.py` file

A `.py` file is a plain text file full of Python instructions. Python reads it **top to bottom, one line at a time**, and does what each line says.

Create `labs/2026-08-11/hello.py` containing:

```python
print("hello from a file")
```

Run it:

```bash
uv run python labs/2026-08-11/hello.py
```

The word after `python` is the path to your file. That is the entire mechanism.

### Top to bottom, always

```python
print("first")
print("second")
print("third")
```

Output:

```
first
second
third
```

Three lines in, three lines out, in the order written. No `Main` method, no entry point, no class wrapper. Python starts at line 1 and works down. Coming from C# this feels like something is missing — nothing is. That is genuinely all there is.

---

## 4. `print()`

`print()` shows something on the screen. Take it apart:

```python
print("hello")
```

- `print` — the name of the thing you want to do
- `(` `)` — the brackets say "do it **now**, with this"
- `"hello"` — the thing to show, wrapped in quotes

### The quotes matter

```python
print("hello")     # shows: hello      <- quotes: "the literal text hello"
print(hello)       # NameError          <- no quotes: "the thing NAMED hello"
```

Quoted text is called a **string**. You will meet strings properly on Friday (D4). For today, the only rule you need: **text goes in quotes.** Single `'` or double `"` both work, as long as you match them.

### Numbers don't need quotes

```python
print(4)           # shows: 4
print(2 + 2)       # shows: 4   <- Python worked out the sum first, then showed it
print("2 + 2")     # shows: 2 + 2   <- quoted, so it's just text
```

Arithmetic gets its own day on Thursday. The point today is only that `print()` shows you whatever you hand it.

### The `#` symbol

Anything after `#` on a line is a **comment** — Python ignores it completely. It is there for humans.

```python
print("hi")   # this half of the line does nothing
```

---

## 5. Reading an error message

This is the most useful skill on this page, and the one most beginners skip.

**An error is not a failure. It is Python telling you, in detail, exactly what confused it.** Read it. It is on your side.

Read a Python error **from the bottom up.** The last line is what went wrong; the lines above tell you where.

### The three you will hit today

**Missing closing bracket**

```python
print("hello"
```

```
  File "hello.py", line 1
    print("hello"
         ^
SyntaxError: '(' was never closed
```

- `SyntaxError` — the sentence isn't valid Python. Python never even started running your file.
- `line 1` — where to look
- `^` — points at the trouble

**A word Python doesn't recognise**

```python
prnt("hello")
```

```
NameError: name 'prnt' is not defined. Did you mean: 'print'?
```

`NameError` = "you used a word and I have no idea what it refers to." Here it is a typo, and Python even guesses the fix. It will not always be that kind, but it tries.

**Unclosed quote**

```python
print("hello)
```

```
SyntaxError: unterminated string literal (detected at line 1)
```

You opened a `"` and never closed it, so Python is still waiting for the end of the text.

### The one distinction worth carrying forward

| | |
|---|---|
| **SyntaxError** | The code isn't valid Python. **Nothing ran at all** — not even line 1. |
| **NameError** | The code was valid, Python started running it, and *then* hit a word it didn't know. |

That difference — "did it run at all?" — is the beginning of debugging, and you already have the instinct for it from every stack trace you have ever read.

---

## The five things to remember

1. `cd ~/Documents/aiml-track` then `uv run python <file>` — always `uv run`
2. The REPL (`>>>`) is a scratchpad; a `.py` file is real work
3. Python runs a file **top to bottom**, one line at a time
4. `print()` shows things; **text goes in quotes**, numbers don't
5. **Read errors from the bottom line up.** They are a message, not a verdict.

---

## Tomorrow · D2 — Variables and names

What `=` actually does, naming rules, `type()`, reassignment. One concept, all day.
