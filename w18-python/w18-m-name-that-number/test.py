import unittest
from prompt import *

class Test(unittest.TestCase):

  def tests_basic(self):
    self.assertEqual(name_that_number(0), 'zero')
    self.assertEqual(name_that_number(4), 'four')
    self.assertEqual(name_that_number(9), 'nine')
    self.assertEqual(name_that_number(23), 'twenty three')

if __name__ == '__main__':
  unittest.main()


# To run the tests:        
# python -m unittest test 