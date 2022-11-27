/* globals describe, expect,test
 */
const {Greeter} = require('../index.js');

describe('Testing the Greeter', () => {
  test('it should return Hello', () => {
    const geteter = new Greeter();
    const output = 'Hello Amit';
    expect(geteter.greet('Amit')).toEqual(output);
  });
});
