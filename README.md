# JavaScript Fundamentals

A structured collection of JavaScript practice scripts covering core language concepts from the ground up. Each lesson focuses on a specific topic, building progressively from variables and data types through to functions and ES6 modules. Ideal as a refresher or as a companion to a JavaScript course.

## Features

- Step-by-step lessons covering foundational JavaScript topics.
- Practical examples runnable directly with Node.js.
- ES6+ syntax including `let`, `const`, arrow functions, template literals, and modules.
- Helper utilities demonstrating module exports and imports.
- An `exercise.js` file for hands-on practice.

## Lessons Overview

| File | Topic |
| --- | --- |
| `lesson1.js` | Hello World, variables (`var`, `let`, `const`) |
| `lesson2.js` | Data types: strings, numbers, booleans, and type coercion |
| `lesson3.js` | Objects and arrays — creation, access, and mutation |
| `lesson4.js` | Relational and equality operators (`==`, `===`, `>`, `>=`) |
| `lesson5.js` | Logical operators and string methods |
| `lesson6.js` | Conditional statements (`if`, `else if`, `else`) |
| `lesson7.js` | Loops — `for`, `for...of`, and `break` |
| `lesson8.js` | Functions — declarative, anonymous, and ES6 arrow functions |
| `lesson9.js` | ES6 modules — `import` and `export` |
| `exercise.js` | Combined practice exercise |

## Project Structure

```
JavaScript-Fundamentals/
lessons/
  lesson1.js
  lesson2.js
  lesson3.js
  lesson4.js
  lesson5.js
  lesson6.js
  lesson7.js
  lesson8.js
  lesson9.js
  exercise.js
helpers/
  printHelper.js    # Reusable helper module (used in lesson9)
package.json
```

## Getting Started

### Prerequisites

- Node.js >= 14 installed on your system.

### Clone the Repository

```bash
git clone https://github.com/brkacar/JavaScript-Fundamentals.git
cd JavaScript-Fundamentals
```

### Install Dependencies

```bash
npm install
```

## How to Run the Lessons

Run any lesson file directly with Node.js:

```bash
node lessons/lesson1.js
node lessons/lesson2.js
node lessons/lesson3.js
node lessons/lesson4.js
node lessons/lesson5.js
node lessons/lesson6.js
node lessons/lesson7.js
node lessons/lesson8.js
node lessons/lesson9.js
```

For the exercise file:

```bash
node lessons/exercise.js
```

## Suggested Learning Path

1. Start with `lesson1.js` — variables and Hello World.
2. Continue through `lesson2.js` to `lesson5.js` for data types and operators.
3. Practice control flow in `lesson6.js` and loops in `lesson7.js`.
4. Learn functions in `lesson8.js` including the ES6 arrow syntax.
5. Understand modules in `lesson9.js` using the `helpers/` folder.
6. Test your knowledge with `exercise.js`.

Feel free to modify and extend the examples as you work through each topic.
