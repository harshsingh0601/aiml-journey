# Dashboard tests

Run from the repo root, after `python3 sync-dashboard.py`:

```
node tools/dashboard-render-test.js    # renders the page headless, prints every computed field
node tools/dashboard-fault-test.js     # injects 7 broken states, checks the integrity banner fires
```

**Why these exist.** On 14 Aug 2026 Harsh found three separate defects in the dashboard by
reading it carefully — a mark out of 50 displayed as "50%", a perfect score coloured red, and
a "Week 1, Day 5" that was really the day of the week. A full audit then found eleven more,
all the same class: values hard-coded into the markup that stopped being true when the plan
changed.

The rule now: **the dashboard renders state, it does not restate the plan.** If you catch
yourself typing a date, a session count, an exam format or a pass gate into the HTML, put it
in `aiml-dashboard-state.json` and read it at render time instead.

No dependencies — the tests extract the page's script, stub the DOM and Chart.js, and print
what each element would show. Run both before publishing.
