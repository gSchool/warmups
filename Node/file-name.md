Write a Node.js script that takes a command line argument for a filename, then uses fs.readFile and fs.writeFile to produce a copy of the file in which all of the lines have been reversed and the additional extension .reverse has been added. Here is what usage looks like:
  // in foo.txt
  a
  b
  c
  d

  // at the CLI:
  $:> node reverse_file.js foo.txt
  $:> ls
  foo.txt   foo.txt.reverse
  $:> cat foo.txt.reverse
  d
  c
  b
  a
try your best to do this challenge from memory! Bonus points if you can write it by hand first with completely valid syntax.
