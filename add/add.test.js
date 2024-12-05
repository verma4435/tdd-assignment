const { add } = require('./add');

describe("add function test", () => {
    test("input as empty string", () => expect(add("")).toEqual(0));
    test("input as 1", () => expect(add("1")).toEqual(1));
    test("input as 1,5", () => expect(add("1,5")).toEqual(6));
});