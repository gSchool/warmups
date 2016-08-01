import unittest
from prompt import *

class TestStringMethods(unittest.TestCase):

  def test_upper(self):
      self.assertEqual(xMasTree(3),['__#__', '_###_', '#####', '__#__', '__#__'])
      self.assertEqual(xMasTree(7),['______#______', '_____###_____', '____#####____', '___#######___', '__#########__', '_###########_', '#############', '______#______', '______#______'])
      self.assertEqual(xMasTree(2),['_#_', '###', '_#_', '_#_'] )
      self.assertEqual(xMasTree(4),['___#___', '__###__', '_#####_', '#######', '___#___', '___#___'] )
      self.assertEqual(xMasTree(6),['_____#_____', '____###____', '___#####___', '__#######__', '_#########_', '###########', '_____#_____', '_____#_____'])

# To run the tests:        
# python -m unittest test 


if __name__ == '__main__':
    unittest.main()