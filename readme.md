# テスティングフレームワークの機能理解

## 実現したいこと

1. テストレポート出力
2. テストのリファクタリング
    1. テストスイートの定義
    2. コメント・タグ付け
3. カバレッジ計測

## 調査結果

### レポート出力

unittest
XML形式での出力は無理
    `unittest-xml-reporting`と`xmlrunner`が必要だが、`xmlrunner`のインストールができなかった
カスタムテストランナーを作成すれば任意のフォーマットで出せる

pytest

XML, HTMLでのレポート出力が可能

### カバレッジ計測


### その他

unittestのテストはpytestでも実行可能
