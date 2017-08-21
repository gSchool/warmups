// Input: Any string of words with/without punctuation.
// Output: A scrambled form of the same sentence but with the word's first and last
//   letter's positions intact.

var myString = "According to a research team at Cambridge University, it doesn't matter in what order the letters in a word are, the only important thing is that the first and last letter be in the right place. The rest can be a total mess and you can still read it without a problem. This is because the human mind does not read every letter by itself, but the word as a whole. Such a condition is appropriately called Typoglycemia.";

const scramble = (str) => {
  let words = str.split(' ')

  let result = words.map(word => scrambleWord(word)).join(' ')
  console.log(result);
  return result
}

const scrambleWord = (word) => {
  console.log("scrambling", word)
  if (word.length > 3) {
    let lastIndex = word.length - 1

    let letters = word.match(/\w/g) // <- get chars without punctuation
    let middleChars = letters.slice(1, letters.length - 1)
    console.log("middleChars to scramble are", middleChars);

    let newChars = []

    // find the index of the first/last alphanumeric
    let indexOfLastAlpha = word.lastIndexOf(letters[letters.length - 1])
    let firstAlpha = word.indexOf(letters[0])

    // go through each charcter in original string and replace it if neccessary
    for (let i = 0; i < word.length; i++) {
      // leave first/last char/punctuation
      if (i === firstAlpha || i === indexOfLastAlpha || word[i].match(/\W/)) {
        newChars[i] = word[i]
        console.log("not replacing", i, word[i]);
      } else {
        // replace with one random character from remaining middle characters
        randomIndex = Math.floor(Math.random() * middleChars.length)
        console.log("random index is", randomIndex, "middleChars is", middleChars)

        newChars[i] = middleChars[randomIndex]
        middleChars.splice(randomIndex, 1)
      }
    }

    console.log("scramble is", newChars.join(''), "for", word)

    return newChars.join('')
  } else {
    return word
  }
}

module.exports = {
  scramble,
  scrambleWord
}
