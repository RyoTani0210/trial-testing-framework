# test_unittest.py



import unittest
from moduleOne import add, subtract

# テストケースクラスの定義(通常モジュールごとやクラスごと)
class testModuleOne(unittest.TestCase):

    # 'add' 関数のテストメソッド(通常関数やメソッドごと)
    def test_add(self):
        # テストケース1: 3 + 4 = 7
        self.assertEqual(add(3, 4),     #テスト
                          7,            #期待値
                         "Should be 7"  #エラー時の出力メッセージ(任意)
                        )
        # テストケース2: -1 + 1 = 0
        self.assertEqual(add(-1, 1), 0, "Should be 0")
        # テストケース3: 0 + 0 = 0
        self.assertEqual(add(0, 0), 0, "Should be 0")

    # 'subtract' 関数のテストメソッド
    def test_subtract(self):
        # テストケース1: 10 - 5 = 5
        self.assertEqual(subtract(10, 5), 5, "Should be 5")
        # テストケース2: -1 - 1 = -2
        self.assertEqual(subtract(-1, 1), -2, "Should be -2")
        # テストケース3: 0 - 0 = 0
        self.assertEqual(subtract(0, 0), 0, "Should be 0")

# テストスクリプトが直接実行されたときにテストを実行
if __name__ == '__main__':
    unittest.main()
