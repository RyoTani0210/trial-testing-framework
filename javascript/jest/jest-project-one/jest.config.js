// jest.config.js
export default {
  // preset: 'ts-jest/presets/default-esm', // ESMのサポートを追加
  transform: {
    '^.+\\.m?[tj]sx?$': 'babel-jest', // ES Modulesを変換するためにbabel-jestを使用
  },
  extensionsToTreatAsEsm: ['.ts', '.tsx', '.jsx'], // ESMとして扱う拡張子を指定
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/'], // node_modulesを無視する設定を確認
  testEnvironment: 'jest-environment-jsdom', // 必要に応じてテスト環境を指定
};
