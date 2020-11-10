# JavaScript Fix the Scope Lab

## Objectives

- Explore scope in JavaScript
- Exercise bug-finding skills related to scope issues

## Instructions

In this lab, you'll need to debug some issues related to function scope in
JavaScript: variables might not be what we expect, certain variables might be
unavailable, and in general, havoc might be set loose in the current code.

As usual, start by running the specs and reading the results. Then fix some
things, run the tests and repeat.

### `myAnimal` and `yourAnimal`

The first two functions, `myAnimal` and `yourAnimal`, both return a variable
`animal`, but the tests for the two expect different values. The tests are
designed so that:

- you cannot hard code `return 'cat'`
- `yourAnimal` _must_ return a variable named `animal`.
- `yourAnimal` should not reassign the existing `animal` declared on the first
  line (in the _global scope_).

After the initial tests are run for `myAnimal` and `yourAnimal`, `myAnimal` is
tested again to ensure that the original globally scoped `animal` variable is
not altered.

**Hint:** Remember that variables declared inside a function are within the
function's scope.

### `add2`

The third function in `index.js`, `add2()` takes in a number and returns that
number plus two. Well, at least, that is what it _should_ do. What is wrong?

### `funkyFunction` and `theFunk`

The final task of this lab is to figure out what code is needed at the end. The
provided code does not need to change, but something else needs to be added.
