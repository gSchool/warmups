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
- Upon form submission make a query to HackerNews to fetch stories related to the title of the todo text.
  After the results from HackerNews is returned, log the results to the console, then update the list of To Do's.
  This is what a query to HackerNews looks like: https://hn.algolia.com/api/v1/search?query=searchTerm

Warmup Day 4:
  - Think back on the solution from Day 2. Notice that the ```completed``` state is being tracked in the internal state of the Card component. What if we wanted to persist this state to a backend? The better place to store this I think is on each card itself, which is currently stored in the App component.   Then the completed flag can be passed down to the Card component as a prop. Update the repo with these changes.
