import unittest
import json
import os

# カスタムテスト結果クラス
class JSONTestResult(unittest.TestResult):
    def __init__(self):
        super().__init__()
        self.results = []  # テスト結果を保存するリスト

    def addSuccess(self, test):
        # テストが成功した場合の処理
        self.results.append({
            'test': str(test),
            'result': 'success',
            'message': ''
        })

    def addFailure(self, test, err):
        # テストが失敗した場合の処理
        self.results.append({
            'test': str(test),
            'result': 'failure',
            'message': self._exc_info_to_string(err, test)
        })

    def addError(self, test, err):
        # テスト中にエラーが発生した場合の処理
        self.results.append({
            'test': str(test),
            'result': 'error',
            'message': self._exc_info_to_string(err, test)
        })

# カスタムテストランナー
class JSONTestRunner:
    def __init__(self, output):
        self.output = output  # 出力先ファイル名

    def run(self, test):
        # テストの実行
        result = JSONTestResult()
        test(result)

        # テスト結果をJSONファイルに書き込む
        with open(self.output, 'w') as f:
            json.dump(result.results, f, indent=4)
        return result
