// A capitalize function that takes a string and returns it with the first character capitalized.

import capitalize from "./capitalize";

test('Returns the first character capitalized', () => { 
    expect(capitalize('hola')).toBe('Hola')
 });