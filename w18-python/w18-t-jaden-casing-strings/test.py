import unittest
from prompt import *

class Test(unittest.TestCase):

  def tests_basic(self):
    quote = "How can mirrors be real if our eyes aren't real"
    self.assertEqual(toJadenCase(quote), "How Can Mirrors Be Real If Our Eyes Aren't Real")

if __name__ == '__main__':
  unittest.main()

# To run the tests:        
# python -m unittest test 
