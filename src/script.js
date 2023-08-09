'use strict';

// BEGINNER
// Factorial
const factorial = (num) => {
  return [...Array(num + 1).keys()]
    .slice(1) // exclude 0
    .reduce((acc, num) => (acc *= num), 1);
};

// BEGINNER TO INTERMEDIATE
// Character Frequency
const characterFrequency = (str) => {
  const frequency = [...str].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return [str, frequency];
};

// Temperature Conversion
/**
 *
 * @param {string} unit - 'cel' | 'fah' | 'kel'
 * @param {number} temp
 * @returns
 */
const tempConversion = (unit, temp) => {
  if (unit === 'cel') {
    const fah = (temp * 9) / 5 + 32;
    const kel = temp + 273.15;
    return { fah, kel };
  }

  if (unit === 'fah') {
    const cel = ((temp - 32) * 5) / 9;
    const kel = ((temp - 32) * 5) / 9 + 273.15;
    return { cel, kel };
  }

  if (unit === 'kel') {
    const cel = temp - 273.15;
    const fah = ((temp - 273.15) * 9) / 5 + 32;
    return { cel, fah };
  }
};

// Second Largest Number
const secondLargestNumber = (arr) => arr.sort((a, b) => b - a)[1];

// Array Rotation
/**
 *
 * @param {[]} arr
 * @param {number} n
 * @returns {[]}
 */
const rotateToRight = (arr, n) => {
  const l = arr.length;
  return arr.slice(-n).concat(arr.slice(0, l - n));
};

const rotateToLeft = (arr, n) => {
  const l = arr.length;
  return arr.slice(n).concat(arr.slice(0, n));
};

// Perfect Number
const isPerfectNumber = (num) => {
  const sum = [...Array(num).keys()] // num itself is excluded in the list
    .slice(1, num) // to exclude number 0
    .filter((div) => num % div === 0) // give us all the divisors
    .reduce((acc, div) => (acc += div), 0); // give us the sum of the divisors

  return sum === num;
};

// Square Root
const squareRoot = (num) => {
  if (num < 0) throw new Error(`num must be positive.`);
  return num ** (1 / 2);
};

// String Permutations
const strPermutations = (str) => {
  if (str.length === 0) return [''];

  const [char, ...rest] = [...str];

  const prevPerms = strPermutations(rest);
  const perms = [];

  for (const prevPerm of prevPerms)
    for (let i = 0; i <= prevPerm.length; i++)
      perms.push(`${prevPerm.slice(0, i)}${char}${prevPerm.slice(i)}`);

  return perms;
};

// Armstrong Number
const isArmstrong = (num) => {
  const sum = num
    .toString()
    .split('')
    .map((char) => Number(char) ** num.toString().length)
    .reduce((acc, num) => (acc += num), 0);

  if (sum === num) return true;
  if (sum !== num) return false;
};
