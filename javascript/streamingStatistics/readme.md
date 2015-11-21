# Streaming Statistics
In programming, often there are performance constraints that prevent
us from using the most intuitive approach to a problem.

In this warmup, we need to be able to compute the sum, average, and median
of a very long array of numbers. Unfortunately, using an Array to hold all
the values, and computing the sum, average, median, and count is too slow
and uses too much memory. 

Instead, we need a data structure that stores significantly less data
but contains enough information to get the values we care about. 

This Stream is meant to be such a data structure. Fill out this constructor
function (including the bodies of the functions) such that:
1. this.count returns the number of times this.streamPush has been called
2. this.sum returns the sum of the values sent through this.streamPush
3. this.average returns the average of the values sent through this.streamPush
4. this.median returns the median of the values sent through this.streamPush

You may not use an array to store the values in stream push. 
You may not change the names of the functions in Stream() 