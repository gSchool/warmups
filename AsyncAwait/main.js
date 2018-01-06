var FortuneTeller = require('galvanize-game-mechanics').FortuneTeller

// FortuneTeller has an "ask" method that returns a promise. If you wanted to write a function that used the FortuneTeller.ask method to ask to questions (waiting for the first one to finish before asking the second) with promises, you would need to use .then like this:

const askQuestionPromise = (question) => {
  FortuneTeller.ask(question).then(result => {
    console.log('Promise 1:', result.response)
    FortuneTeller.ask(question).then(result => {
      console.log('Promise 2:', result.response)
    })
  })
}

askQuestionPromise("Why is the sky blue?")

// How could you rewrite the askQuestion function using async/await?

const askQuestionAsync = async (question) => {
  let result1 = await FortuneTeller.ask(question)
  console.log('Async 1:', result1.response)
  let result2 = await FortuneTeller.ask(question)
  console.log('Async 2:', result2.response)
}

askQuestionAsync("Why is the sky blue?")
