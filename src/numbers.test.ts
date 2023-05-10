import { printNumbers } from './numbers';

describe('printNumbers', () => {
  it('should replace multiples of 3 with "Falabella"', () => {
    const result = printNumbers();
    result.forEach((number, index) => {
      const i = index + 1;
      if (i % 3 === 0 && i % 5 !== 0) {
        expect(number).toBe('Falabella');
      }
    });
  });

  it('should replace multiples of 5 with "IT"', () => {
    const result = printNumbers();
    result.forEach((number, index) => {
      const i = index + 1;
      if (i % 3 !== 0 && i % 5 === 0) {
        expect(number).toBe('IT');
      }
    });
  });

  it('should replace multiples of both 3 and 5 with "Marketplace"', () => {
    const result = printNumbers();
    result.forEach((number, index) => {
      const i = index + 1;
      if (i % 3 === 0 && i % 5 === 0) {
        expect(number).toBe('Marketplace');
      }
    });
  });
});