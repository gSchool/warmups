import unittest
import prompt


class Problem(unittest.TestCase):

  def tests_basic(self):
     self.assertEqual(prompt.longest("aretheyhere", "yestheyarehere"), "aehrsty")
     self.assertEqual(prompt.longest("loopingisfunbutdangerous", "lessdangerousthancoding"), "abcdefghilnoprstu")
     self.assertEqual(prompt.longest("inmanylanguages", "theresapairoffunctions"), "acefghilmnoprstuy")


# To run the tests:        
# python -m unittest test 


if __name__ == '__main__':
    unittest.main()