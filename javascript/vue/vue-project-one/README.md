# vue-project-one

## jest setup
- jest install
  ```
  npm install --save-dev jest@27 #@vue/cli-plugin-unit-jestがver27に依存している
  npm install -g @vue/cli
  npm install --save-dev @vue/cli-plugin-unit-jest #2024-09-07時点の最新版は5.0.8 
  npm install --save-dev @vue/vue3-jest@27 #@vue/cli-plugin-unit-jestがver27に依存している
  npm install --save-dev @vue/test-utils
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
