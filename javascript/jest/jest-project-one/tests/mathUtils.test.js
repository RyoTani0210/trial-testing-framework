// mathUtils.test.js
const { add, subtract, multiply, reverseString, findMax } = require('../main/mathUtils');

// add関数のテスト
test('adds 1 + 2 to equal 3', () => {
  expect(add(1, 2)).toBe(3);
});

// subtract関数のテスト
test('subtracts 5 - 2 to equal 3', () => {
  expect(subtract(5, 2)).toBe(3);
});

// multiply関数のテスト
test('multiplies 2 * 3 to equal 6', () => {
  expect(multiply(2, 3)).toBe(6);
});

// reverseString関数のテスト
test('reverses "hello" to "olleh"', () => {
  expect(reverseString('hello')).toBe('olleh');
});

// findMax関数のテスト
test('finds the max value in an array', () => {
  expect(findMax([1, 3, 2, 8, 5])).toBe(8);
});

// findMax関数のテスト: 空の配列の場合
test('returns null for an empty array', () => {
  expect(findMax([])).toBeNull();
});
