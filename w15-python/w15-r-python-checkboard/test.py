import unittest
import prompt


class Checkerboard(unittest.TestCase):

  def tests_basic(self):
    self.assertEqual(prompt.make_checkered_board(5),[['X', 'O', 'X', 'O', 'X'],
                                                ['O', 'X', 'O', 'X', 'O'],
                                                ['X', 'O', 'X', 'O', 'X'],
                                                ['O', 'X', 'O', 'X', 'O'],
                                                ['X', 'O', 'X', 'O', 'X']])


# To run the tests:        
# python -m unittest test 


if __name__ == '__main__':
    unittest.main()