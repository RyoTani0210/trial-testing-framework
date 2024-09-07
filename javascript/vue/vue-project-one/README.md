# vue-project-one

## jest setup
- jest install
  ```
  npm install @vue/test-utils jest
  npm install -g @vue/cli
  npm install --save-dev @vue/cli-plugin-unit-jest
  npm install --save-dev @vue/vue3-jest
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
