import unittest
from prompt import *

class Test(unittest.TestCase):

  def tests_basic(self):
    self.assertEqual(get_sum(0,1),1)
    self.assertEqual(get_sum(0,-1),-1)

if __name__ == '__main__':
  unittest.main()

# To run the tests:        
# python -m unittest test 