import unittest
import prompt


class Dates(unittest.TestCase):

  def tests_basic(self):
    self.assertEqual(prompt.day("20151208"), "Tuesday", "December 8th, 2015 is a Tuesday.")
    self.assertEqual(prompt.day("20140728"), "Monday", "July 28th, 2014 is a Monday")


  def tests_leap_year(self):
    self.assertEqual(prompt.day("20160229"), "Monday", "February 29th, 2016 is a Monday")
    self.assertEqual(prompt.day("20160301"), "Tuesday", "March first, 2016 is a Tuesday")
    self.assertEqual(prompt.day("19000228"), "Wednesday", "February 28th, 1900 is a Wednesday")
    self.assertEqual(prompt.day("19000301"), "Thursday", "March first, 1900 is a Thursday")

# To run the tests:        
# python -m unittest test 


if __name__ == '__main__':
    unittest.main()