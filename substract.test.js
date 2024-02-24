const substract = require("./subtract");

test("subtract two numbers", () => {
  expect(substract(2, 1)).toBe(1);
});
