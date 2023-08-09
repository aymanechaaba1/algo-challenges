# Algorithmic Challenges

## BEGINNER TO INTERMEDIATE

1. Character Frequency

```js
const characterFrequency = (str) => {
  const frequency = [...str].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  return [str, frequency];
};
```

2. Temperature Conversion

```js
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
```

3. Second Largest Number

```js
const secondLargestNumber = (arr) => arr.sort((a, b) => b - a)[1];
```

4. Array Rotation

```js
const rotateToRight = (arr, n) => {
  const l = arr.length;
  return arr.slice(-n).concat(arr.slice(0, l - n));
};

const rotateToLeft = (arr, n) => {
  const l = arr.length;
  return arr.slice(n).concat(arr.slice(0, n));
};
```

5. Perfect Number

```js
const isPerfectNumber = (num) => {
  const sum = [...Array(num).keys()] // num itself is excluded in the list
    .slice(1, num) // to exclude number 0
    .filter((div) => num % div === 0) // give us all the divisors
    .reduce((acc, div) => (acc += div), 0); // give us the sum of the divisors

  return sum === num;
};
```

6. Square Root

```js
const squareRoot = (num) => {
  if (num < 0) throw new Error(`num must be positive.`);
  return num ** (1 / 2);
};
```

7. String Permutations

```js
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
```

8. Armstrong Number

```js
const isArmstrong = (num) => {
  const sum = num
    .toString()
    .split('')
    .map((char) => Number(char) ** num.toString().length)
    .reduce((acc, num) => (acc += num), 0);

  if (sum === num) return true;
  if (sum !== num) return false;
};
```

Thanks to whatsdev 🙏
