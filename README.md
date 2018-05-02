# utils.random [![Build Status](https://img.shields.io/travis/zsoltime/random.svg?style=flat-square)](https://travis-ci.org/zsoltime/random)

> Random all the things

## Install

```bash
npm install utils.random
```

## Import

### Node

```javascript
const random = require('utils.random');
```

### ES6 import

```javascript
import random from 'utils.random';
```

### CDN

You can use it directly in your browser using unpkg.com:

```html
<script src="https://unpkg.com/utils.random@1.0.1/dist/index.min.js"></script>
```

## Usage

```javascript
import random from 'utils.random';

// Generate a random float between 0 and 1
random();
// => 0.28126727278265307

// Generate a random integer with a max value of 100
random(100);
// => 57

// Generate a random integer between 50 and 100
random(50, 100);
// => 77

// Pick a random item from an array
random([1, 2, 3, 4, 5, 'random', 'words']);
// => 4

// Pick N number of items from an array
random([1, 2, 3, 4, 5, 'random', 'words'], 3);
// => ['words', 4, 1]
```

## API

### random()

Returns a float between 0 and 1. (It's the same as `Math.random()`)

### random(max)

Returns an integer between `0` and `max`.

### random(min, max)

Returns and integer between `min` and `max`

### random(array)

Returns a random item from `array`

### random(array, size)

Returns a new array of length `size` with randomly selected items from `array`. If size is equal to or larger than `array.length`, it returns a shuffled copy of the `array`.

#### min

Type: `number`

Default: `0`

Minimum integer to return

#### max

Type: `number`

Maximum integer to return

#### array

Type: `array`

Array to pick random items from

#### size

Type: `number`

The number of items to pick from `array`

## Test

```bash
npm install
npm test
```

## License

MIT © Zsolt Meszaros
