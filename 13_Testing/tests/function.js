module.exports.calculateValue = (valueA, valueB, addOffset = false, addWarning = true) => {
    let result = {
        value: (addOffset ? valueA + valueB + 10 : valueA + valueB),
        message: null
    }

    if (result.value > 100) {
        let messageParts = [];

        if (addWarning) messageParts.push('Warning:');
        messageParts.push('result is greater then 100');
        result.message = messageParts.join(' ');
    }

    return result;
}
