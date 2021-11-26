const app = require("../app");

describe("challenge 1 tests", () => {
	test("should not return null", () => {
		expect(app.myFunc(2, 5)).not.toBeNull();
	});
	test("should return falsy", () => {
		expect(app.myFunc2(4, 3)).toBeFalsy();
	});
	test("should return not falsy", () => {
		expect(app.truthFunc(2, 2)).not.toBeFalsy();
	});
	test("properties should be the same as function", () => {
		expect(app.objFunc()).toMatchObject({ make: "Ford", model: "Fiesta" });
	});
	test("array items should be > 6 characters", () => {
		expect(app.arrayFunc()).toContain("Deborah");
	});
});

describe("challenge 2 test", () => {
	test("convert to a string", () => {
		expect(app.stringFunc()).toEqual(expect.any(String));
	});
	test("planet should be Earth", () => {
		expect(app.planetFunc()).toBe("Earth");
	});
	test("student count should be 25", () => {
		expect(app.classFunc()).toEqual(19);
	});
	test("should be integer and 916", () => {
		expect(app.squFunction(34)).toEqual(916);
	});
});
