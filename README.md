# Unhandled Exception in JavaScript Calculation

This repository demonstrates an example of an unhandled exception in JavaScript and how to handle it using try-catch blocks. The `bug.js` file contains the buggy code, while the `bugSolution.js` file provides a solution to the problem.

## Bug Description

The `bug.js` file includes a `divide` function that throws an error if the divisor is zero. However, the code that calls this function does not handle this exception, causing the program to crash when attempting to divide by zero.

## Solution

The `bugSolution.js` file addresses this by incorporating a try-catch block to handle the potential error gracefully.  This prevents the program from crashing and allows for alternative actions, such as displaying an error message to the user.