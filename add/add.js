exports.add = function (numStr) {
    if (!numStr) {
        return 0;
    }
    const numStrWithoutNewLine = numStr.replace("\n", ",");
    let sum = 0;
    const numberArr = numStrWithoutNewLine.split(',').map(n => Number(n));
    for (const num of numberArr) {
        sum += num;
    }
    return sum;
}