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

Thanks to whatsdev 🙏
