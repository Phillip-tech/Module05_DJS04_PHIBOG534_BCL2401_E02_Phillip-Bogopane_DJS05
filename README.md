# Redux-inspired Store for a Tally App

## Overview
This project implements a Redux-inspired store for managing the state of a tally counter. The project includes state management functions such as `getState`, `dispatch`, and `subscribe`, following functional programming principles.

## Technologies Used
- Html
- Vs Code
- JavaScript
- Functional Programming Concepts


### Implement a Global Store
A Redux-inspired store is created to hold the state of the tally counter. It can dispatch actions (`ADD`, `SUBTRACT`, `RESET`) and subscribe to state changes.

### State Management Functions
- `getState`: Returns the current state.
- `dispatch`: Updates the state based on the dispatched action.
- `subscribe`: Calls a function whenever the state changes and logs the new state to the console.

### No UI Rendering
The focus is on state management without UI rendering. All state changes are observable through console logs.

### Functional Programming Principles
Functional programming concepts, inspired by Redux, are applied creatively in the implementation.

## How to Run the Code
1. Download the JavaScript file(s) containing the Redux-inspired store implementation.
2. Run the file in a JavaScript environment such as Node.js or a browser console.

## Approach
The initial state is defined with a count of 0. Actions are dispatched to increment, decrement, or reset the count. The state is updated accordingly, and the new state is logged to the console.

## Challenges Faced
One challenge was ensuring the actions correctly updated the state without causing unintended side effects. This was addressed by carefully testing each action and checking the state after each dispatch.

## Areas for Improvement
- Improved error handling for invalid actions
- Enhancing the subscribe function to handle multiple subscribers
- Implementing additional actions for more complex state updates

## Reflections
The project provided a hands-on experience in state management using functional programming principles. Understanding how actions interact with the state and observing state changes in the console was insightful. This project lays a solid foundation for further exploration into state management libraries like Redux.
