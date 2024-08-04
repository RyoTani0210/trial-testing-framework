# テスティングフレームワークの機能理解

## 実現したいこと

1. テストレポート出力
2. テストのリファクタリング
    1. テストスイートの定義
    2. コメント・タグ付け
3. カバレッジ計測


## レポート出力
pytest, unittest両方で可能
pytestはunittestのコードも実行できるため、pytestで実行して出力したほうが良さそう

- unittest
  - XML形式での出力は無理
    - `unittest-xml-reporting`と`xmlrunner`が必要だが、`xmlrunner`のインストールができなかった
  - カスタムテストランナーを作成すれば任意のフォーマットで出せる
- pytest
  - XML, HTMLでのレポート出力が可能

## カバレッジ計測
- pytestでは、デフォルトではコードカバレッジベースのカバレッジ計測ができる

  - `pytest --cov=main --cov-report=html tests/test_pytest.py`
  - 概ねC0(ステートメントカバレッジ)
  - ただし、分岐内のコードも網羅対象とみなしているため、if文をすべて通ったという意味でのC0カバレッジと比べると厳しい評価がされる

- C1(ブランチカバレッジ)の計測も可能

  - `pytest --cov=main --cov-branch --cov-report=html tests/test_pytest.py`

- C2(条件カバレッジ)の計測はできない

### デフォルト出力

| File              | Function               | Statements | Missing | Excluded | Coverage |
|-------------------|------------------------|------------|---------|----------|----------|
| main/__init__.py  | (no function)          | 0          | 0       | 0        | 100%     |
| main/moduleOne.py | add                    | 1          | 0       | 0        | 100%     |
| main/moduleOne.py | subtract               | 1          | 0       | 0        | 100%     |
| main/moduleOne.py | covaregeTestfunction   | 8          | 0       | 0        | 100%     |
| main/moduleOne.py | (no function)          | 3          | 0       | 0        | 100%     |
| **Total**         |                        | **13**     | **0**   | **0**    | **100%** |

### --cov-branch指定(C1)

| File              | Function               | Statements | Missing | Excluded | Branches | Partial | Coverage |
|-------------------|------------------------|------------|---------|----------|----------|---------|----------|
| main/__init__.py  | (no function)          | 0          | 0       | 0        | 0        | 0       | 100%     |
| main/moduleOne.py | add                    | 1          | 0       | 0        | 0        | 0       | 100%     |
| main/moduleOne.py | subtract               | 1          | 0       | 0        | 0        | 0       | 100%     |
| main/moduleOne.py | covaregeTestfunction   | 8          | 0       | 0        | 4        | 0       | 100%     |
| main/moduleOne.py | (no function)          | 3          | 0       | 0        | 0        | 0       | 100%     |
| **Total**         |                        | **13**     | **0**   | **0**    | **4**    | **0**   | **100%** |



## その他

unittestのテストはpytestでも実行可能
