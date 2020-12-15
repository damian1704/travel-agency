import {formatTime} from './formatTime';
import {promoPrice} from './promoPrice';
import {currencyStringToFloat} from './currencyStringToFloat';

describe('utils', () => {
  describe('formatTime', () => {

    it('should return null if there is no arg', () => {
      expect(formatTime()).toBe(null);
    });

    it('should return null if arg is not a number', () => {
      expect(formatTime('abc')).toBe(null);
      expect(formatTime(() => {})).toBe(null);
    });

    it('should return null if arg is lower than zero', () => {
      expect(formatTime(-1)).toBe(null);
      expect(formatTime(-2)).toBe(null);
    });

    it('should return time in hh:mm:ss if arg is proper', () => {
      expect(formatTime(122)).toBe('00:02:02');
      expect(formatTime(3793)).toBe('01:03:13');
      expect(formatTime(120)).toBe('00:02:00');
      expect(formatTime(3604)).toBe('01:00:04');
    });

  });

  describe('promoPrice', () => {
    it('should return null if there are no 2 args', () => {
      expect(promoPrice()).toBe(null);
      expect(promoPrice(20)).toBe(null);
    });

    it('should return null if both args are not a number', () => {
      expect(promoPrice('abc', 'abc')).toBe(null);
      expect(promoPrice('abc', 20)).toBe(null);
      expect(promoPrice(20, '50')).toBe(null);
      expect(promoPrice(() => {}, 20)).toBe(null);
    });

    it('should return null if first arg is lower than zero', () => {
      expect(promoPrice(-1, 20)).toBe(null);
      expect(promoPrice(-2, 20)).toBe(null);
    });

    it('should return null if second arg is lower than 0 or higher than 100', () => {
      expect(promoPrice(100, -20)).toBe(null);
      expect(promoPrice(100, 120)).toBe(null);
    });

    it('should return correct amount after discount when args are proper', () => {
      expect(promoPrice(100, 20)).toBe(80);
      expect(promoPrice(1000, 20)).toBe(800);
      expect(promoPrice(10000, 20)).toBe(8000);
    });
  });

  describe('currencyStringToFloat', () => {
    it('should return null if there is no arg', () => {
      expect(currencyStringToFloat()).toBe(null);
    });

    it('should return null if arg is not a string', () => {
      expect(currencyStringToFloat(20)).toBe(null);
      expect(currencyStringToFloat(() => {})).toBe(null);
    });

    it('should return float if arg is proper', () => {
      expect(currencyStringToFloat('$51,380.61')).toBe(51380.61);
      expect(currencyStringToFloat('$380.61')).toBe(380.61);
      expect(currencyStringToFloat('$380')).toBe(380.00);
      expect(currencyStringToFloat('380.61')).toBe(380.61);
      expect(currencyStringToFloat('380')).toBe(380.00);
      expect(currencyStringToFloat('51,380.61')).toBe(51380.61);
    });
  });
});
