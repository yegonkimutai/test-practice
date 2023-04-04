const { stringLength, reverseString, Calculator,capitalize } = require('./function');

test ('length', () => {
    expect(stringLength("hello")).toBe(5)
})

test ('length', () => {
    expect(() => stringLength("hello welcome to the testing")).toThrow(
        Error('Characters should be at least 10 characters')
    )
})

test ('reverse', () => {
    expect(reverseString("hello")).toBe("olleh")
})

test ('uppercase', () => {
    expect(capitalize("hello")).toBe("Hello")
})

describe('calculator testing', () => {
    test ('add', () => {
        expect(Calculator.add(1, 2)).toBe(3)
    })

    test ('subtract', () => {
        expect(Calculator.subtract(2, 1)).toBe(1)
    })

    test ('multiply', () => {
        expect(Calculator.multiply(2, 3)).toBe(6)
    })

    test ('divide', () => {
        expect(Calculator.divide(6, 2)).toBe(3)
    })
})