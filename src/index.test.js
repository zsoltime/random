import random from '.';
import * as helpers from './helpers';

describe('random', () => {
  beforeEach(() => {
    jest.spyOn(helpers, 'pick');
    jest.spyOn(helpers, 'randomInt');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  describe('with no argument', () => {
    test('calls Math.random()', () => {
      const spy = jest
        .spyOn(Math, 'random')
        .mockImplementation(() => 0.231514956);

      random();

      expect(spy).toHaveBeenCalledTimes(1);
    });
  });

  describe('with number as the first argument', () => {
    test('calls randomInt()', () => {
      const max = 100;

      random(max);

      expect(helpers.randomInt).toHaveBeenCalledTimes(1);
      expect(helpers.randomInt).toHaveBeenLastCalledWith(max, undefined);
    });

    test('calls randomInt() with min and max values if there is a second argument', () => {
      const min = 50;
      const max = 100;

      random(min, max);

      expect(helpers.randomInt).toHaveBeenCalledTimes(1);
      expect(helpers.randomInt).toHaveBeenLastCalledWith(min, max);
    });
  });

  describe('with array as the first argument', () => {
    test('calls pick()', () => {
      const array = [1, 2, 3];
      random(array);

      expect(helpers.pick).toHaveBeenCalledTimes(1);
      expect(helpers.pick).toHaveBeenCalledWith(array, undefined);
    });

    test('calls pick() with array and size values if there is a second argument', () => {
      const array = [1, 2, 3, 4, 5];
      const size = 3;
      random(array, size);

      expect(helpers.pick).toHaveBeenCalledTimes(1);
      expect(helpers.pick).toHaveBeenCalledWith(array, size);
    });
  });
});
