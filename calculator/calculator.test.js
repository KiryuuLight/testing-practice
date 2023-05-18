// A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. 
// Each of these functions should take two numbers and return the correct calculation.

import calculator from "./calculator"

test('Should contain basic operations', () => { 
    expect(calculator.hasOwnProperty('add')).toBe(true),
    expect(calculator.hasOwnProperty('subtract')).toBe(true),
    expect(calculator.hasOwnProperty('divide')).toBe(true),
    expect(calculator.hasOwnProperty('multiply')).toBe(true)
 })

 test('Each of these functions should take two numbers and return the correct calculation.', () => { 
    expect(calculator.add(10,2)).toBe(12),
    expect(calculator.subtract(10,2)).toBe(8),
    expect(calculator.divide(10,2)).toBe(5),
    expect(calculator.multiply(10,2)).toBe(20)
 })