import unittest
import prompt

class MaxMin(unittest.TestCase):

  def tests_min(self):
    self.assertEqual(prompt.min([-52, 56, 30, 29, -54, 0, -110]), -110)
    self.assertEqual(prompt.min([42, 54, 65, 87, 0]), 0)
    self.assertEqual(prompt.min([1, 2, 3, 4, 5, 10]), 1)
    self.assertEqual(prompt.min([-1, -2, -3, -4, -5, -10]), -10)
    self.assertEqual(prompt.min([9]), 9)

  def tests_max(self):
    self.assertEqual(prompt.max([-52, 56, 30, 29, -54, 0, -110]), 56)
    self.assertEqual(prompt.max([4,6,2,1,9,63,-134,566]), 566)
    self.assertEqual(prompt.max([5]), 5)
    self.assertEqual(prompt.max([534,43,2,1,3,4,5,5,443,443,555,555]), 555)
    self.assertEqual(prompt.max([9]), 9)

# To run the tests:        
# python -m unittest test 


if __name__ == '__main__':
    unittest.main()