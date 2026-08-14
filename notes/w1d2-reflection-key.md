# W1D2 — Reflection question key

**Do not open this until your own three answers are written down.** Then diff, and write the delta
into the table at the bottom. The delta is the part that actually teaches you something.

---

## Q1 — mutable vs `None` default

**Full-marks answer.**

The `[]` literal in `def f(x, acc=[])` is evaluated **once, when the `def` statement itself executes** —
i.e. when the module is imported / the function is defined, not when it is called. It creates exactly
one list object, and a reference to that object is stored on the function object at
`f.__defaults__[0]`.

Every call that omits `acc` binds the local name `acc` to *that same object*. `acc.append(v)` is a
method call that **mutates in place**; it never rebinds. So the one shared list grows monotonically
across calls, and the growth is visible to every subsequent caller.

In `def f(x, acc=None)`, the default is `None` — an immutable singleton, so sharing it is
unobservable. The line `acc = []` inside the body runs **on every call**, and `[]` is evaluated
**at that moment**, creating a fresh list object per call. The name `acc` is then rebound to that new
object. No sharing, no accumulation.

**The exact moment, stated:** version 1 creates the list at *definition* time, once. Version 2 creates
a list at *call* time, once per call that omits the argument.

**Half marks** for "the list is shared between calls" without saying *when* the object is created or
naming mutate-vs-rebind. **Zero** for "it's a Python quirk" or "defaults are static".

---

## Q2 — `UnboundLocalError` before the assignment

**Full-marks answer.**

Python determines a name's *scope* at **compile time**, when the function body is turned into a code
object — before any of it runs. The compiler scans the whole body; if it finds an assignment to
`count` anywhere in that body, `count` is marked **local for the entire function**, including lines
that textually precede the assignment.

So at the `print(count)` line, `count` is a local variable that has not yet been assigned a value.
Python does not fall back to the global `count` — the local binding shadows it unconditionally. An
unassigned local raises `UnboundLocalError` (a subclass of `NameError`).

**What it tells you about *when*:** locality is decided **statically, per function, before execution** —
it is a property of the function body's text, not of the order in which lines happen to run. LEGB
lookup at runtime is what happens *after* that decision; the decision itself is not dynamic.

The fixes and what each means: `global count` declares you intend to write module scope;
`nonlocal count` declares the nearest enclosing function scope. Better than either: take `count` as a
parameter and return the new value, which makes the function pure and testable.

**Half marks** for "count is local so it's not defined yet" without the compile-time scan.
**Zero** for "Python reads top to bottom so count doesn't exist yet" — that is the wrong mechanism and
it predicts the wrong behaviour for a function whose assignment comes first.

---

## Q3 — designing `train(data, *, epochs=10, lr=0.01, seed=None)`

**(a) Why `*` is there.**
It makes `epochs`, `lr` and `seed` keyword-only, so `train(d, 50, 0.001, 7)` is a `TypeError` and the
only legal form is `train(d, epochs=50, lr=0.001, seed=7)`. Three bare numbers at a call site are
unreadable, un-greppable, and silently swappable — transposing `epochs` and `lr` would still run and
would produce a garbage model with no error. Keyword-only converts a silent wrong-result bug into a
loud call-time failure. It also lets you reorder or insert parameters later without breaking callers,
because nothing depends on position. The cost: every call site is more verbose, and adding `*` to an
*existing* function is a breaking change, so this has to be decided up front.

**(b) Why `seed=None` and not `seed=42`.**
`None` means "I did not ask for determinism" and is distinguishable from every legal seed value —
including `0`, which is falsy and would be swallowed by an `if not seed:` check. A default of `42`
would silently make every run deterministic *and identical*, which is worse than non-determinism:
you would evaluate your model on one arbitrary initialisation and mistake it for a property of the
model. Then `seed=None` lets the caller opt in to reproducibility explicitly, and — because a seed is
state that would otherwise be read from a global RNG — passing it as an argument moves the function
closer to pure. `None` is the correct default for *any* parameter where "not supplied" and "supplied
as zero/empty" must be told apart.

**(c) What you lose with `**kwargs`.**
The signature. Concretely:

- **A typo becomes a silent no-op.** `train(d, lr=0.1, epcohs=50)` currently raises `TypeError:
  unexpected keyword argument`. With `**kwargs` it runs happily, `epcohs` sits unread in the dict,
  and you train for the default 10 epochs while believing you trained for 50. You then attribute the
  poor result to the model. **This is the failure mode to name** — it is wrong results, not a crash.
- Discoverability dies: `help(train)`, IDE autocomplete and hover docs show `**kwargs` and nothing else.
- Static type checkers (mypy, Week 2 D4) can no longer check the call.
- Defaults move from the signature into the body as `kwargs.get("lr", 0.01)`, so the contract is no
  longer readable from the signature and drifts as the body changes.

The legitimate use of `**kwargs` is pass-through, where you deliberately do not know the parameters
because you are forwarding them to something else.

**Half marks** on (c) for "less readable" without naming the silent-typo failure.

---

## Delta table — fill this in

| Q | What my draft said | What the key says | What I actually had wrong |
|---|---|---|---|
| 1 | | | |
| 2 | | | |
| 3a | | | |
| 3b | | | |
| 3c | | | |
