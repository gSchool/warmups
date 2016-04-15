# Streaming Statistics

This one is tricky, particularly the median function. First introduce the notion of getting the mean and median of an array. These concepts are fairly straight forward, and you can show the code in the test function as an example of doing this. 

Then, mention that storing all that data in an array doesn't scale well. We run out of memory and we can't sort quickly enough as our data set grows. How can we solve this problem?

The Stream object is meant to store the minimum amount of data possible to compute (or track) the mean, median, and sum of the items that have been pushed to it.

Then talk about benchmarking when students finish!