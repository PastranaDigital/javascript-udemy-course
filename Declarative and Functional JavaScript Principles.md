# Imperative (Old way) Paradigm

-   Programmer explains "HOW to do things"
-   We explain to the computer EVERY single step it has to follow to achieve a result
-   EXAMPLE: Step-by-step recipe of a cake
-   The default beginner way to code

```
const arr = [2, 4, 6, 8];
const doubled = [];
for (let i = 0; i < arr.length; i++)
    doubled[i] = arr[i] * 2;
```

# Declarative (New way) Paradigm

-   Programmer tells "WHAT to do"
-   We simply DESCRIBE the way the computer should achieve the result
-   the HOW (step-by-step instructions) gets abstracted away
-   EXAMPLE: Describing the cake

```
const arr = [2, 4, 6, 8];
const doubled = arr.map(n => n * 2);
```

# Functional Programming

-   DECLARATIVE programming paradigm
-   Based on the idea of writing software by combining many PURE FUNCTIONS, avoiding SIDE EFFECTS and MUTATING data
-   PURE FUNCTIONS: Function without side effects. Does not depend on external variables. GIVEN THE SAME INPUTS, ALWAYS RETURNS THE SAME OUTPUTS
-   SIDE EFFECTS: Modification (mutation) of any data OUTSIDE of the function (mutating external variables, logging to console, writing to DOM, etc.)
-   IMMUTABILITY: State (data) is NEVER modified! Instead, state is COPIED and the copy is mutated and returned (EX: outboundModel and inboundModel)
-   EXAMPLES: React and Redux

# Functional Programming Techniques

-   Try to avoid data mutations
-   Use built-in methods that don't produce side effects
-   Do data transformations with methods such as:

```
.map()
.filter()
.reduce()
```

-   Try to avoid side effects in functions: this is of course not always possible!

# Declarative Syntax

-   Use array and object destructuring
-   Use the spread operator
-   Use the ternary (conditional) operator
-   Use template literals
