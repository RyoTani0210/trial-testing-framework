# Jest

## インストール方法
  プロジェクトフォルダを作成し、jestをインストールする

```
mkdir my-jest-project
cd my-jest-project
npm init -y #package.jsonファイル作成

npm install --save-dev jest #インストール

npm install --save-dev babel-jest @babel/core @babel/preset-env #babel設定

npm install --save-dev jest-environment-jsdom   #Jest 28以降デフォルトで含まれていないため追加する
```

### 設定
- jest.config.js
  ```
  module.exports = {
    preset: 'ts-jest/presets/default-esm', // ESMのサポートを追加
    transform: {
      '^.+\\.m?[tj]sx?$': 'babel-jest', // ES Modulesを変換するためにbabel-jestを使用
    },
    extensionsToTreatAsEsm: ['.ts', '.tsx', '.js', '.jsx'], // ESMとして扱う拡張子を指定
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',
    },
  };

  ```
- babel.config.js
  ```
  // babel.config.js
  module.exports = {
    presets: ['@babel/preset-env'],
  };

  ```
- package.json
  - Jestの"type": "module"の設定確認:
    - package.json に "type": "module" が設定されていると、Node.js はファイルをESMとして扱います
    - この設定が影響する場合があるので、必要に応じて"type": "module"を削除するか、Jestの設定と整合性を取るようにしてください。

## テストの実行

```
npm test
```


## カバレッジ計測

```
npm test -- --coverage
```