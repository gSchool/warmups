import unittest
from prompt import *

class Test(unittest.TestCase):
  
  def tests_basic(self):
    # Test.it("Basic tests")
    self.assertEqual(max_rot(38458215), 85821534)
    self.assertEqual(max_rot(195881031), 988103115)
    self.assertEqual(max_rot(896219342), 962193428)
    self.assertEqual(max_rot(69418307), 94183076) 

if __name__ == '__main__':
  unittest.main()

# To run the tests:        
# python -m unittest test
