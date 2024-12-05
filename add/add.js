exports.add = function (numStr) {
    if (!numStr) {
        return 0;
    }
    const numStrWithoutNewLine = numStr.replace("\n", ",");
    let sum = 0;
    const numberArr = numStrWithoutNewLine.split(',').map(n => Number(n));
    if (numberArr.some(n => n < 0)) {
        const negativeNumberArr = numberArr.filter(n => n < 0);
        throw new Error(`negative numbers not allowed ${negativeNumberArr}`);
    }
    for (const num of numberArr) {
        sum += num;
    }
    return sum;
}