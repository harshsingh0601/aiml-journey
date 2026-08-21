# D5 · Booleans and comparison

**Fri 21 Aug 2026 (session ran into the early hours of Sat 22) · Week 2 · Phase 1**

Everything below was taught live and practised. No `if` statements — those are D6.

---

## 1. `bool` is the fourth type

You already had `int`, `float`, `str`. Now:

```python
is_ready = True
print(type(is_ready))   # <class 'bool'>
```

A `bool` has exactly **two** possible values: `True` and `False`. Capitalised.

Coming from C#, `true` / `false` in lowercase are the reflex, and they are not
keywords in Python — just undefined names:

```python
print(true)
# NameError: name 'true' is not defined. Did you mean: 'True'?
```

`True` and `"True"` are different values — one is a `bool`, one is a `str`, exactly
like `43` vs `"43"`. `True == "True"` is `False`.

---

## 2. A comparison **is a value**

This is the headline of the day.

```python
score = 78
is_pass = score >= 80     # produces a bool
print(is_pass)            # False
print(type(is_pass))      # <class 'bool'>
```

`5 > 3` is not a command. It is an expression that evaluates to a value, the same way
`2 + 2` evaluates to `4`. `2 + 2` produces an `int`; `5 > 3` produces a `bool`. You can
store it in a name, print it, and pass it around.

That is what makes `if` possible tomorrow.

### The six operators

| Operator | Asks | Example | Result |
|---|---|---|---|
| `==` | equal? | `5 == 5` | `True` |
| `!=` | different? | `5 != 3` | `True` |
| `>` | left bigger? | `5 > 3` | `True` |
| `<` | left smaller? | `5 < 3` | `False` |
| `>=` | bigger or equal? | `5 >= 5` | `True` |
| `<=` | smaller or equal? | `3 <= 5` | `True` |

Identical to C#.

---

## 3. `=` versus `==`

```python
age = 43        # ASSIGNMENT — puts 43 into the name age. Does something.
age == 43       # QUESTION — is age equal to 43? Produces True.
```

One equals sign **does**. Two equals signs **ask**.

Python mostly refuses to let you assign where a value is expected, which is better
protection than C# gives you:

```python
print(age = 43)
# TypeError: 'age' is an invalid keyword argument for print()

print(43 = 43)
# SyntaxError: expression cannot contain assignment, perhaps you meant "=="?
```

### Strings compare case-sensitively

```python
print("harsh" == "Harsh")   # False
```

Different character at position 0, different value. This is one reason `.lower()` exists.

### One deliberate oddity

```python
print(2 == 2.0)   # True
```

Numbers are compared by numeric value, so `int` and `float` can be equal. Python converts
between *number* types and refuses everywhere else — which is why `True == "True"` was `False`.

---

## 4. `and`, `or`, `not`

Python uses words where C# uses symbols. Same semantics.

| C# | Python |
|---|---|
| `&&` | `and` |
| `\|\|` | `or` |
| `!` | `not` |

- `and` — **every** part must be `True`, or the whole thing is `False`.
- `or` — `True` if at least one is true. Unlike English "or", it is also `True` when **both** are.
- `not` — flips one value.

### Precedence — tightest binding first

1. Comparisons (`>`, `==`, …)
2. `not`
3. `and`
4. `or`

So `temp > 25 and not raining` resolves as: comparison first, then `not`, then `and`.
And `True or False and False` is really `True or (False and False)` → `True`.

Same machinery as `2 + 3 * 4 == 14` from D3.

**Use brackets anyway when mixing `and` with `or`.** They cost nothing and remove the doubt.

---

## 5. Truthiness

Python judges **any** value as true-ish or false-ish, not just bools. `bool()` shows the verdict.

**Falsy (everything met so far):**

- `0` and `0.0`
- `""` — the empty string

**Truthy:** everything else. Any non-zero number, positive *or negative*. Any string with at
least one character.

```python
print(bool(-5))       # True  — truthiness is about zero-or-not, not positive-or-not
print(bool(" "))      # True  — a space IS a character
print(bool("0"))      # True  — a string holding "0" is not empty
print(bool("False"))  # True  — same reason
```

The last two are the trap. Truthiness of a string asks one question only — *is there
anything in it?* — never what the contents mean. `"0"` is truthy, `0` is falsy, and they
print identically. This is why testing a value read from a form or file directly is a bug.

### The whitespace trap — the real-world version

```python
username = "   "
print(bool(username))            # True   ← three spaces gets through
print(bool(username.strip()))    # False  ← correct
```

`.strip()` first, *then* test. A form field containing only spaces is empty in every sense
that matters to a user, and truthy to Python.

### Bools are secretly numbers

```python
print(int(True))    # 1
print(int(False))   # 0
print(True + True)  # 2
```

Not something to write on purpose — but it explains counting tricks later, and explains a
stray `2` where a bool was expected.

---

## 6. `SyntaxError` vs runtime errors — the most useful thing in D5

| C# | Python | When it happens |
|---|---|---|
| compile error — `csc` won't build | `SyntaxError` | **before** anything runs |
| runtime exception | `NameError`, `TypeError`, `IndexError`, `ValueError` | mid-run |

```python
print("line one")
print(true)
```
```
line one                       ← this DID print
NameError: name 'true' is not defined
```

```python
print("line one")
print(43 = 43)
```
```
SyntaxError: expression cannot contain assignment, perhaps you meant "=="?
```
**Nothing printed.** Not even `line one`.

Python reads the whole file and turns it into instructions before executing any of it. A
`SyntaxError` anywhere kills the entire file, including lines above it — a typo on line 200
means line 1 never runs. Every other error is a runtime error, and everything above it
genuinely ran.

---

## The one thing to remember

**A comparison produces a value.** `score >= 80` is a `bool` you can name, store and print —
not something that only lives inside a `print()`. Tomorrow, `if` acts on exactly that value.
