import calculate from './calculate';

describe('calc buttons works correctly', () => {
  it('AC resets calculator state', () => {
    const calcData = { total: '2', operation: '+', next: '' };
    const btnName = 'AC';
    expect(calculate(calcData, btnName).total).toBe('0');
    expect(calculate(calcData, btnName).total).not.toBe('2');
    expect(calculate(calcData, btnName).operation).toBe('');
    expect(calculate(calcData, btnName).operation).not.toBe('+');
    expect(calculate(calcData, btnName).next).toBe('');
    expect(calculate(calcData, btnName).next).not.toBe('AC');
  });

  it('number button ads to state.total', () => {
    const calcData = { total: '2', operation: '', next: '' };
    const btnName = '5';
    expect(calculate(calcData, btnName).total).toBe('25');
    expect(calculate(calcData, btnName).total).not.toBe('7');
    expect(calculate(calcData, btnName).operation).toBe('');
    expect(calculate(calcData, btnName).operation).not.toBe('5');
    expect(calculate(calcData, btnName).next).toBe('');
    expect(calculate(calcData, btnName).next).not.toBe('5');
  });

  it('number button ads to state.next', () => {
    const calcData = { total: '2', operation: '+', next: '' };
    const btnName = '5';
    expect(calculate(calcData, btnName).total).toBe('2');
    expect(calculate(calcData, btnName).total).not.toBe('25');
    expect(calculate(calcData, btnName).operation).toBe('+');
    expect(calculate(calcData, btnName).operation).not.toBe('5');
    expect(calculate(calcData, btnName).next).toBe('5');
    expect(calculate(calcData, btnName).next).not.toBe('');
  });

  it('operation button works when first number exists', () => {
    const calcData = { total: '2', operation: '', next: '' };
    const btnName = '+';
    expect(calculate(calcData, btnName).total).toBe('2');
    expect(calculate(calcData, btnName).total).not.toBe('2+');
    expect(calculate(calcData, btnName).operation).toBe('+');
    expect(calculate(calcData, btnName).operation).not.toBe('');
    expect(calculate(calcData, btnName).next).toBe('');
    expect(calculate(calcData, btnName).next).not.toBe('+');
  });

  it('operation button does nothing when no total num yet', () => {
    const calcData = { total: '0', operation: '', next: '' };
    const btnName = '+';
    expect(calculate(calcData, btnName).total).toBe('0');
    expect(calculate(calcData, btnName).total).not.toBe('+');
    expect(calculate(calcData, btnName).operation).toBe('');
    expect(calculate(calcData, btnName).operation).not.toBe('+');
    expect(calculate(calcData, btnName).next).toBe('');
    expect(calculate(calcData, btnName).next).not.toBe('+');
  });

  it('. (dot) button works correctly', () => {
    let calcData = { total: '2', operation: '', next: '' };
    const btnName = '.';
    expect(calculate(calcData, btnName).total).toBe('2.');
    expect(calculate(calcData, btnName).total).not.toBe('2');
    expect(calculate(calcData, btnName).operation).toBe('');
    expect(calculate(calcData, btnName).operation).not.toBe('.');
    expect(calculate(calcData, btnName).next).toBe('');
    expect(calculate(calcData, btnName).next).not.toBe('.');

    calcData = { total: '2', operation: '+', next: '' };
    expect(calculate(calcData, btnName).total).toBe('2');
    expect(calculate(calcData, btnName).total).not.toBe('2.');
    expect(calculate(calcData, btnName).operation).toBe('+');
    expect(calculate(calcData, btnName).operation).not.toBe('+.');
    expect(calculate(calcData, btnName).next).toBe('.');
    expect(calculate(calcData, btnName).next).not.toBe('');

    calcData = { total: '2.2', operation: '+', next: '2.2' };
    expect(calculate(calcData, btnName).total).toBe('2.2');
    expect(calculate(calcData, btnName).total).not.toBe('2.2.');
    expect(calculate(calcData, btnName).operation).toBe('+');
    expect(calculate(calcData, btnName).operation).not.toBe('+.');
    expect(calculate(calcData, btnName).next).toBe('2.2');
    expect(calculate(calcData, btnName).next).not.toBe('2.2.');
  });
});
