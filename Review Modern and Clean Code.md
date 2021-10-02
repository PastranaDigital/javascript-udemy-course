# Readable Code

-   Write code so that OTHERS can understand it

-   Write code so that YOU can understand it in 1 year

-   Avoid too "clever" and overcomplicated solutions

-   Use descriptive variable names: WHAT THEY CONTAIN

-   Use descriptive function names: WHAT THEY DO

# General

-   Use DRY principle (refactor your code)

-   Don't pollute global namespace, encapsulate instead

-   Don't use VAR

-   Use strong type checks (=== and !==)

# Functions

-   Generally, functions should do ONLY ONE THING

-   Don't use more than 3 function parameters

-   Use default parameters whenever possible

-   Generally, return the same data type as received

-   Use arrow functions when they make code more readable

# OOP

-   Use ES6 classes

-   Encapsulate data and DON'T MUTATE it from outside the class (can use public api)

-   Implement method chaining

-   Do NOT use arrow functions as methods (in regular objects) becuase you will not have the "this" keyword

# Avoid Nested Code

-   DO use early return (guard clauses)

-   DO use ternary (conditional) or logical operators instead of if

-   DO use multiple if instead of if/else-if

-   AVOID for loops, use array methods instead (find, filter, forEach...)

-   AVOID callback-based asynchronous APIs

# Asynchronous Code

-   Consume promises with async/await for best readability

-   Whenever possible, run promises in parallel (Promise.all) if you don't have to wait for the results to run separately

-   Handle errors and promise rejections
