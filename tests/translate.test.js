const translate = require("../src/translate.js");

describe("translate function", () => {
  test("words that start with the vowel a", () => {
    let result = translate("apple");
    expect(result).toBe("appleway");
  });
});
describe("translate function", () => {
  test("words that start with the vowel e", () => {
    let result = translate("english");
    expect(result).toBe("englishway");
  });
});
describe("translate function", () => {
  test("words that start with the vowel i", () => {
    let result = translate("ingrid");
    expect(result).toBe("ingridway");
  });
});
describe("translate function", () => {
  test("words that don't have a vowel", () => {
    let result = translate("rhythm");
    expect(result).toBe("rhythmay");
  });
});
