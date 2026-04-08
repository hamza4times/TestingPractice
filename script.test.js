import {capitalize, reverseString, calculatorObject} from "./script.js"

test('capitalize function', () => {
  expect(capitalize("hello!")).toBe("Hello!");
  expect(capitalize("bye bye")).toBe("Bye bye");
  expect(capitalize("morning!")).toBe("Morning!");
});

test('reverseString function', () => {
  expect(reverseString("Hello")).toBe("olleH");
  expect(reverseString("Bye Bye")).toBe("eyB eyB");
  expect(reverseString("racecar")).toBe("racecar");
});

test('calculatorObject object functions', () => {
  expect(calculatorObject.add(10, 20)).toBe(30);
  expect(calculatorObject.subtract(20, 5)).toBe(15);
  expect(calculatorObject.multiply(10, 20)).toBe(200);
  expect(calculatorObject.divide(10, 5)).toBe(2);
})