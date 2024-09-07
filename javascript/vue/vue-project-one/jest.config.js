// jest.config.js
module.exports = {
    preset: '@vue/cli-plugin-unit-jest',
    transform: {
      '^.+\\.vue$': '@vue/vue3-jest', // Vueファイルを変換
      '^.+\\.[tj]sx?$': 'babel-jest', // JS/TSファイルを変換
    },
    moduleNameMapper: {
      '^@/(.*)$': '<rootDir>/src/$1',  // "@/..." のエイリアスを解決
    },
    moduleFileExtensions: ['js', 'jsx', 'json', 'vue'],
    testMatch: ['**/tests/unit/**/*.test.[jt]s?(x)',], // テストコードのpath指定
  };
  