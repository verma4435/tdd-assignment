exports.add = function (numStr) {
    if (!numStr) {
        return 0;
    }
    let sum = 0;
    const numberArr = numStr.split(',').map(n => Number(n));
    for (const num of numberArr) {
        sum += num;
    }
    return sum;
}