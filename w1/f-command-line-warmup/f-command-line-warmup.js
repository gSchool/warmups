function commandLineWarmup () {
  var answerObj = {
    /*
      Welcome to the morning warmup!
      please answer the following questions
    */

    /* In the shell: */
    /* Q1: What command do I use to create a new file? */

    answer1: "your command here",


    /* In the shell: */
    /* Q2: How do you create a new directory? */

    answer2: "your command here",

    /* In the shell: */
    /* Q3: What command do you type to go up one directory */

    answer3: "your command here",

    /* In the shell: */
    /* Q4: What command do you type to see your current directory */
    answer4: "your command here",

    /* In the shell: */
    /* Q5: what command do you type to chain multiple commands together? */
    answer5: "your command here",

    /* In the shell: */
    /* Q6: What command do you type to remove a directory with child directories */
    answer6: "your command here",

    /* In the shell: */
    /* Q7: What command do you type to list all hidden files? */
    answer7: "your command here",

    /* In the shell: */
    /* Q8: What command do you type to locate the underlying path
       a shell command points to? */
    answer8: "your command here",


    /* In the shell: */
    /* Q9: what command do you type to see the help files for a
       specific terminal command? */

    answer9: "your command here",

    /* In the shell: */
    /* Q10: what command do you type to insert the text 'hello world' t in the terminal and
        into a new file called myText.txt in the present directory? */
    answer10: "your command here"

  };

  return answerObj
}

console.log(commandLineWarmup())

module.exports = {
  commandLineWarmup: commandLineWarmup,
  attendanceWord: "YOUR WORD HERE"
}
