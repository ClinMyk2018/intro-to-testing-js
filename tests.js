// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function () {
        expect(typeof sayHello("Hello")).toBe("string")
    });
    it('should return a boolean when called', function () {
        expect(typeof sayHello(false)).toBe("Hello, World!")
    });

});

describe('isFive', function() {
    it('should be a defined function', function () {
        expect(typeof isFive).toBe('function');
    });
});

    describe('isEven', function () {
        it('should be a defined function', function () {
            expect(typeof isEven).toBe('function')
        });
    });






//
// describe("isNumber", function() {
//     it("should be a defined function", function() {
//         expect(typeof isNumber).toBe("function");
//     });
//     it("should return a boolean value", function() {
//         expect(typeof isNumber()).toBe("boolean");
//     });
//     it("should return true when provided the number 4", function() {
//         expect(isNumber(4)).toBe(true);
//     });
//     it("should return false when provided the boolean of false", function() {
//         expect(isNumber(false)).toBe(false);
//     });
//     it("should return false when provided the string 'banana'", function() {
//         expect(isNumber("banana")).toBe(false);
//     });
//     it("should return true when provided the string value of '2'", function() {
//         expect(isNumber("2")).toBe(true);
//     });
//     it("should return false when provided the boolean of true", function() {
//         expect(isNumber(true)).toBe(false);
//     });
//     it("should return true when passed Infinity", function() {
//         expect(isNumber(Infinity)).toBe(true);
//     });
//     it("should return true when passed the string '-3.141'", function() {
//         expect(isNumber("-3.141")).toBe(true);
//     });
// });





