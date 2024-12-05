const { add } = require('./add');

describe("add function test", () => {
    test("input as empty string", () => expect(add("")).toEqual(0));
    test("input as 1", () => expect(add("1")).toEqual(1));
    test("input as 1,5", () => expect(add("1,5")).toEqual(6));
    test("input as 1,2,3,4,5,6", () => expect(add("1,2,3,4,5,6")).toEqual(1 + 2 + 3 + 4 + 5 + 6));
    test("input with new line 1\n2,3", () => expect(add("1\n2,3")).toEqual(1 + 2 + 3))
    test(
        "input with -ve numbers 1,2,3,-4",
        () => expect(() => add("1,2,3,-4"))
            .toThrow("negative numbers not allowed -4")
    )
    test(
        "input with -ve numbers 1,2,3,-4,-5",
        () => expect(() => add("1,2,3,-4,-5"))
            .toThrow("negative numbers not allowed -4,-5")
    )
    test("input with delimiter as ; //;\n1;2", () => expect(add("//;\n1;2")).toEqual(3));
});