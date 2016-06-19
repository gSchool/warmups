// For a given set of data, the five number summary (https://en.wikipedia.org/wiki/Five-number_summary) 
// can provide a quick sense of the location and spread of those observations. 
// The five number summary consists of the following values (in order):

// Minimum
// First Quartile (Q1)
// Median (Second Quartile; Q2)
// Third Quartile (Q3)
// Maximum

// Consider a set of data consisting of n observations. The minimum and maximum values are self-explanatory; the median and 
// quartiles are a bit trickier. To calculate the median and quartiles, the data first need to be sorted in ascending order.

// Median

// If n is odd, the median is simply the middle value in the ordered list of observations. If n is even, the median is the 
// mean of the two middle values.

// For example, let A = [1, 2, 3, 4, 5] and B = [1, 2, 3, 4, 5, 6]. The median of A is 3 and the median of B is (3 + 4) / 2.0 = 3.5.

// First and Third Quartiles

// For calculating the first and third quartiles (Q1 and Q3), there are actually a few different methods. For this warmup, 
// the method that will be used is what is described as Method 2 in the Wikipedia article for Quartile 
// (https://en.wikipedia.org/wiki/Quartile):

// Split the list of observations in two halves, L and U. If n is odd, include the median in both halves.
// Q1 is the median of L and Q3 is the median of U.
// For example, let A and B be as above. A can then be split into L_A = [1, 2, 3] and U_A = [3, 4, 5]. Q1 and Q3 of A are 
// then 2 and 4, respectively. B splits into L_B = [1, 2, 3] and U_B = [4, 5, 6], and Q1 and Q3 of B are 2 and 5.

// Goal

// The goal of this warmup is to replicate a simplified version of the fivenum function found in R. Create a five_num method 
// that takes an array of integers as an argument. The output of the five_num method will be an array containing the five number summary of the input. All input arrays will contain between 5 and 20 integers in the range -100..100; you will not need to worry about testing for empty arrays, nils, etc. The test cases will consist of the four example test cases given as well as four randomly generated input arrays.

// Examples

// five_num([1, 2, 3, 4, 5])
//   # => [1, 2, 3, 4, 5]
// five_num([1, 2, 3, 4, 5, 6])
//   # => [1.0, 2.0, 3.5, 5.0, 6.0]
// five_num([6, 7, 15, 36, 39, 40, 41, 42, 43, 47, 49])
//   # => [6.0, 25.5, 40.0, 42.5, 49.0]