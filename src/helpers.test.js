import { randomInt, pick } from './helpers';

describe('randomInt', () => {
  test('returns random integer between 0 and max if it has one argument only', () => {
    const max = 10;
    const integer = randomInt(max);

    expect(typeof integer).toBe('number');
    expect(integer % 1).toBe(0);
    expect(integer).toBeGreaterThanOrEqual(0);
    expect(integer).toBeLessThanOrEqual(max);
  });

  test('returns random integer between min and max', () => {
    const min = 50;
    const max = 100;
    const integer = randomInt(min, max);

    expect(typeof integer).toBe('number');
    expect(integer % 1).toBe(0);
    expect(integer).toBeGreaterThanOrEqual(min);
    expect(integer).toBeLessThanOrEqual(max);
  });
});

describe('pick', () => {
  test('returns a random element of array', () => {
    const array = [1, 2, 3];
    const randomItem = pick(array);

    expect(array).toContain(randomItem);
  });

  test('returns a new array with size length, including random items from array', () => {
    const array = [1, 2, 3, 4, 5];
    const size = 3;
    const randomItems = pick(array, size);

    expect(randomItems).toHaveLength(size);
    expect(array).toEqual(expect.arrayContaining(randomItems));
  });

  test('returns a shuffled copy of array, if size is larger than array length', () => {
    const array = [1, 2, 3, 4, 5];
    const randomItems = pick(array, array.length + 1);

    expect(randomItems).toHaveLength(array.length);
    expect(array).toEqual(expect.arrayContaining(randomItems));
  });

  test('throws TypeError if size is not a number', () => {
    const array = [1, 2, 3];

    expect(() => pick(array, '')).toThrowError(TypeError);
    expect(() => pick(array, {})).toThrowError(TypeError);
    expect(() => pick(array, [])).toThrowError(TypeError);
    expect(() => pick(array, null)).toThrowError(TypeError);
    expect(() => pick(array, true)).toThrowError(TypeError);
    expect(() => pick(array, 1)).not.toThrowError(TypeError);
  });
});
