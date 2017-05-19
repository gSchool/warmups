# Frequent K-Mers

## Background (this is string manipulation)

DNA is comprised of two complementary strands of [nucleotides](https://en.wikipedia.org/wiki/Nucleobase) that are bonded together on a DNA strand. For this exercise we are only concerned about 1 strand. The nucleobases in **DNA** are:

+ Guanine (abbreviated 'G')
+ Cytosine (abbreviated 'C')
+ Adenine (abbreviated 'A')
+ Thymine (abbreviated 'T')

These bases form sequences (which I will call genomes even though they are short) such as the following:

`GTCATTG`

from there we can find *k-mers* which are sequences of length *k* in the genome. If we take *k = 3* we have the following kmers from the sequence above:

+ GTC
+ TCA
+ CAT
+ ATT
+ TTG

## Objective

Create functions, with empty implementations in `frequent-kmers-blank.js` to do various operations on these kmers.

Then with the functions you see in that file, find the most frequent kmers of length *k* in a given genome. There could be ties for most frequent, so return the most frequent in an array.

### Notes

Look at the tests provided. The `package.json` installs mocha chai and eslint.

This question is from topics covered in the [UCSD Bioinformatics Coursera course series](https://www.coursera.org/specializations/bioinformatics)