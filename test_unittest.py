# test_unittest.py

import unittest
from moduleOne import add, subtract

class testModuleOne(unittest.TestCase):

    def test_add(self):
        self.assertEqual(add(3, 4), 7, "Should be 7")
        self.assertEqual(add(-1, 1), 0, "Should be 0")
        self.assertEqual(add(0, 0), 0, "Should be 0")

    def test_subtract(self):
        self.assertEqual(subtract(10, 5), 5, "Should be 5")
        self.assertEqual(subtract(-1, 1), -2, "Should be -2")
        self.assertEqual(subtract(0, 0), 0, "Should be 0")

if __name__ == '__main__':
    unittest.main()
