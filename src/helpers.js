export const pick = (arr, size) => {
  if (typeof size === 'undefined') {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  if (typeof size !== 'number') {
    throw TypeError(`Expected number, got ${typeof size}`);
  }

  if (size > arr.length) {
    size = arr.length;
  }
  const copy = arr.slice();
  const items = [];

  while (size--) {
    const i = Math.floor(Math.random() * copy.length);
    const item = copy.splice(i, 1)[0];
    items.push(item);
  }

  return items;
};

export const randomInt = (min, max) => {
  if (typeof max === 'undefined') {
    max = min;
    min = 0;
  }

  if (min > max) {
    [min, max] = [max, min];
  }
  // prettier-ignore
  return Math.floor((Math.random() * ((max - min) + 1)) + min);
};
