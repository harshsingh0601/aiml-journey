# D2 · Variables and names

**Wed 12 Aug 2026 · Phase 1 · one concept**

Today was about one thing: **what `=` actually does.** Naming, `type()` and reassignment
are the same idea seen from three sides.

---

## 1. `=` is an instruction, not a fact

**Python always evaluates the right-hand side first, then attaches the name.**

Right side first. Then the label. Every time.

```python
count = count + 1
```

As mathematics this is nonsense. As an instruction it's obvious: work out `count + 1`,
get a value, *then* point `count` at it. Python is never claiming the two sides are equal.

This one rule explains most of the surprises:

```python
a = 10
b = a + 5      # right side runs NOW: 10 + 5 = 15. b holds 15.
a = 99         # a is re-pointed. b is untouched.
print(b)       # 15
```

`b` was not wired to `a`. It was handed a value once, and kept it.

---

## 2. What Python removes (coming from C#)

```csharp
int count = 5;          // C#
string name = "Harsh";
```

```python
count = 5               # Python
name = "Harsh"
```

| Gone | Consequence |
|---|---|
| the type (`int`, `string`) | Never declared. Python reads it off the value. |
| the `;` | End of line = end of statement. |
| declaration vs assignment | Only one idea in Python. First `=` creates, later `=` updates. Same syntax. |

---

## 3. The name has no type — the value does

In C# this is a compile error. In Python it is simply allowed:

```python
city = "Pune"
print(type(city))    # <class 'str'>
city = 42
print(type(city))    # <class 'int'>
```

No error, no warning. A name is a label, and nothing stops you moving a label onto a
different kind of value.

**This is the biggest day-one difference from C#**, and it's a whole category of bugs the
compiler used to catch for free.

Assignment hands over the value at that moment — it does not link two names:

```python
x = 5
y = x
x = "hello"
print(y)          # 5
print(type(y))    # <class 'int'>
```

`y` did not follow `x`.

*(What happens when two names end up on the same object — and when that does matter — is
**D8**, deliberately not today.)*

---

## 4. `type()`

A torch you shine on a name to see what it's holding.

```python
print(type(5))          # <class 'int'>    whole number
print(type("Harsh"))    # <class 'str'>    text, "string"
```

Numbers properly on D3, strings on D4.

---

## 5. Naming

**Enforced by Python — break these and it's an error:**

- letters, digits, underscores only; no spaces, no hyphens
- cannot start with a digit — `2nd_place` ✗, `place_2` ✓
- case sensitive — `count`, `Count`, `COUNT` are three different names
- cannot be a keyword — `class`, `if`, `for`, `return`, `True`, `None`, …

**Convention — not enforced, but universal:**

| C# | Python |
|---|---|
| `userName` | `user_name` |
| `TotalCount` | `total_count` |

snake_case. Lowercase with underscores.

### Keywords vs builtin names — the distinction that bit in Ex 7/8

| | Reserved? | `name = 5` does what |
|---|---|---|
| `class` | **Keyword.** Python's grammar owns it. | `SyntaxError`. File never runs. |
| `print` | Just a function's **name**. | **Legal.** You overwrite it and Python says nothing. |

```python
print = 5
print("hello")
# TypeError: 'int' object is not callable
```

Line 1 is fine. Line 2 says "call the thing named `print`" — and `print` is now `5`.
You can't call a 5.

Python protects its ~35 keywords absolutely and its builtin names not at all. So
`type = "admin"` silently disables `type()` for the rest of that file. Real bug source.

---

## 6. Both naming failures are the *same* error type

```
2nd_place = "silver"                class = "beginner"
^                                         ^
SyntaxError: invalid decimal literal      SyntaxError: invalid syntax
```

Different **messages**, same **error type**, same consequence: both die in pass 1, so
nothing in either file printed.

---

## Carried over from D1 and confirmed today

Pass 1 does not ask *"is this a real word?"* — it asks *"can I build a sentence out of
this?"*

```python
whlie              # a complete sentence: "look up this name" → passes pass 1
                   # → NameError at run time
whlie True:        # not grammar Python recognises → SyntaxError, nothing runs
```

Same typo. Different pass. The line was never "keyword vs function" — it's
**can Python build it**.

```python
print(total)
total = 100
# grammatically fine → runs → NameError: name 'total' is not defined
```

---

## The counter pattern

```python
visits = 0
visits = visits + 1
visits = visits + 1
print(visits)      # 2
```

Read the old value → add → re-label. Right side first, three times over.

---

## One line to remember

**Right side first, then the label. The name has no type; the value does.**
