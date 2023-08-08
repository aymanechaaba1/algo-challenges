# Algorithmic Challenges

## BEGINNER TO INTERMEDIATE

1. Character Frequency

```html
const characterFrequency = (str) => { const frequency = [...str].reduce((acc,
char) => { acc[char] = (acc[char] || 0) + 1; return acc; }, {}); return [str,
frequency]; };
```

Thanks to whatsdev 🙏
