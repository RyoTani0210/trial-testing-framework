// mathUtils.js

// 2つの数値を加算する関数
function add(a, b) {
    return a + b;
  }
  
// 2つの数値を減算する関数
function subtract(a, b) {
return a - b;
}

// 2つの数値を掛け算する関数
function multiply(a, b) {
return a * b;
}

// 文字列を逆にする関数
function reverseString(str) {
return str.split('').reverse().join('');
}

// 配列の中の最大値を返す関数
function findMax(arr) {
if (arr.length === 0) return null;
return Math.max(...arr);
}

module.exports = { add, subtract, multiply, reverseString, findMax };
  