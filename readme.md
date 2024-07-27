# 目的
テスティングフレームワークの機能理解

# 実現したいこと
1. テスト結果の出力(レポート作成・集計を想定)
2. テストのリファクタリング
    1. テストスイートの定義
    2. コメント・タグ付け

# 調査結果
## テスト結果の出力
### unittest
XML形式での出力は無理?
    `unittest-xml-reporting`と`xmlrunner`が必要だが、`xmlrunner`のインストールができなかった

```
pip install xmlrunner
> error: subprocess-exited-with-error

```
### pytest