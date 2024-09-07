# vue-project-one

## jest setup
- jest install
  ```
  npm install --save-dev jest@27 #@vue/cli-plugin-unit-jestがver27に依存している
  npm install -g @vue/cli
  npm install --save-dev @vue/cli-plugin-unit-jest #2024-09-07時点の最新版は5.0.8 
  npm install --save-dev @vue/vue3-jest@27 #@vue/cli-plugin-unit-jestがver27に依存している
  npm install --save-dev @vue/test-utils

  npm install --save-dev @babel/core @babel/preset-env babel-jest

  ```
- settings
  - package.json
    ```
    {
      "scripts": {
        "test": "jest",
        "test:unit": "vue-cli-service test:unit"
      }
    }
    ```
  - jest.config.js
    ```
    {
      testMatch: ['**/tests/unit/**/*.test.[jt]s?(x)', '**/tests/unit/**/*.spec.[jt]s?(x)'], // 追加
    }
    ```

  - babel.config.js
    ```
    {
      "presets": ["@babel/preset-env"]
    }
    ```

## その他モジュール
- axios (HTTPリクエストモジュール)
  ```
  npm install axios
  ```


## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
