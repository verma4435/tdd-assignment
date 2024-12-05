const { add } = require('./add');

describe("add function test", () => {
    test("input as empty string", () => expect(add("")).toEqual(0));
});