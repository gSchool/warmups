import unittest
from prompt import *

class Test(unittest.TestCase):

  def tests_basic(self):
    cc = ''
    r = maskify(cc)
    self.assertEqual(cc, r)

    cc = '123'
    r = maskify(cc)
    self.assertEqual(cc, r)

    cc = 'SF$SDfgsd2eA'
    r = maskify(cc)
    self.assertEqual('########d2eA', r)

if __name__ == '__main__':
  unittest.main()


# To run the tests:        
# python -m unittest test 