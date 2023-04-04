const { stringLength, reverseString, Calculator,capitalize } = require('./function');

//length test
test ('length', () => {
    expect(stringLength("hello")).toBe(5)
})

test ('length', () => {
    expect(() => stringLength("hello welcome to the testing")).toThrow(
        Error('Characters should be at least 10 characters')
    )
})

//reverse test
test ('reverse', () => {
    expect(reverseString("hello")).toBe("olleh")
})

//capitalize test
test ('uppercase', () => {
    expect(capitalize("hello")).toBe("Hello")
})


//calculator test
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