function stringLength(string) {
    if(string.length > 0 && string.length <= 10) {
        return string.length;
    }

    throw new Error('Characters should be at least 10 characters')
}

function reverseString(string) {
    return string.split('').reverse('').join('');
}

class Calculator {
    static add (num1, num2) {
        return num1 + num2;
    }

    static subtract (num1, num2) {
        return num1 - num2;
    }

    static multiply (num1, num2) {
        return num1 * num2;
    }

    static divide (num1, num2) {
        return num1 / num2;
    }
}

function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1)
}


module.exports = { stringLength, reverseString,Calculator,capitalize };