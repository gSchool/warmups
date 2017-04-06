# React Warmups

## Setup

Clone locally and run `npm install`

Then to start, run `npm start`

Files will be watched and built continuously until you quit the command

## Concepts

- Compiling with Webpack & Babel
- JSX
- Props vs State
- Lists
- Conditionals

## Tasks to Complete
Warmup Day 1:
- Allow toggling the state of a card to be `completed` (style how you'd like)

Warmup Day 2:
- Make the form submission update the list of To Do's

Warmup Day 3:
- Think back on the solution from Day 2. Notice that the ```completed``` state is being tracked in the internal state of the Card component. What if we wanted to persist this state to a backend? The better place to store this I think is on each card itself, which is currently stored in the App component.   Then the completed flag can be passed down to the Card component as a prop. Update the repo with these changes.
