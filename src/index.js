import { randomInt, pick } from './helpers';

export default (min, max) => {
  if (typeof min === 'undefined') {
    return Math.random();
  }

  if (Array.isArray(min)) {
    return pick(min, max);
  }

  return randomInt(min, max);
};
