/* globals describe, expect,test,jest
 */
const {Greeter} = require('../index.js');
const each = require('jest-each').default;
const ERR_MSG = 'name is a mandatory field';

describe('Testing the Greeter', () => {
  test('it should return Hello', () => {
    Date.now = jest.fn(() => new Date('2022-11-27T12:33:37.0'));
    const geteter = new Greeter();
    const output = 'Hello Amit';
    expect(geteter.greet('Amit')).toEqual(output);
  });
  test('it should trim and greet', () => {
    Date.now = jest.fn(() => new Date('2022-11-27T13:33:37.0'));
    const geteter = new Greeter();
    const output = 'Hello Amit';
    expect(geteter.greet(' Amit ')).toEqual(output);
  });
  test('it should capitalizes and greet', () => {
    Date.now = jest.fn(() => new Date('2022-11-27T14:33:37.0'));
    const geteter = new Greeter();
    const output = 'Hello Amit';
    expect(geteter.greet('amit ')).toEqual(output);
  });
  test('it should greet good morning', () => {
    Date.now = jest.fn(() => new Date('2022-11-27T06:33:37.0'));
    const geteter = new Greeter();
    const output = 'Good morning Amit';
    expect(geteter.greet('amit ')).toEqual(output);
  });
  test('it should greet good evening', () => {
    Date.now = jest.fn(() => new Date('2022-11-27T18:33:37.0'));
    const geteter = new Greeter();
    const output = 'Good evening Amit';
    expect(geteter.greet('amit ')).toEqual(output);
  });
  test('it should greet good night', () => {
    Date.now = jest.fn(() => new Date('2022-11-27T22:33:37.0'));
    const geteter = new Greeter();
    const output = 'Good night Amit';
    expect(geteter.greet('amit ')).toEqual(output);
  });
  test('it should greet good night after midnight', () => {
    Date.now = jest.fn(() => new Date('2022-11-27T00:33:37.0'));
    const geteter = new Greeter();
    const output = 'Good night Amit';
    expect(geteter.greet('amit ')).toEqual(output);
  });
  test('it should greet good night at dawn', () => {
    Date.now = jest.fn(() => new Date('2022-11-27T05:59:37.0'));
    const geteter = new Greeter();
    const output = 'Good night Amit';
    expect(geteter.greet(' amit ')).toEqual(output);
  });
  test('it should greet good night for edge case', () => {
    Date.now = jest.fn(() => new Date('2022-11-27T22:00:00.0'));
    const geteter = new Greeter();
    const output = 'Good night Amit';
    expect(geteter.greet(' amit ')).toEqual(output);
  });
  each([
    [undefined],
    [' '],
    [''],
    [null],
  ]).test('it should throw error for name validation', (givenNameInput) => {
    const geteter = new Greeter();
    expect(() => geteter.greet(givenNameInput))
        .toThrowError(new Error(ERR_MSG));
  });
});
