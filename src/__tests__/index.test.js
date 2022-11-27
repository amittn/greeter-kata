/* globals describe, expect,test,jest
 */
const {Greeter} = require('../index.js');

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
  test('it should greet morning', () => {
    Date.now = jest.fn(() => new Date('2022-11-27T06:33:37.0'));
    const geteter = new Greeter();
    const output = 'Good morning Amit';
    expect(geteter.greet('amit ')).toEqual(output);
  });
});
