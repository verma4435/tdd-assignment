exports.add = function (numStr) {
    if (!numStr) {
        return 0;
    }
    let delimiter = ',';
    let numberStr = numStr;
    if (numStr.includes("//")) {
        const indexOfNewLine = numStr.indexOf("\n");
        const delimiterStr = numStr.substring(0, indexOfNewLine).replaceAll("//", "");
        if (delimiterStr.length === 1) {
            delimiter = delimiterStr;
        } if (delimiterStr.length > 1) {
            const match = delimiterStr.match(/\[(.*?)\]/);
            console.log(match);
            delimiter = match[1];
        }
        numberStr = numStr.substring(indexOfNewLine + 1);
    }
    const numStrWithoutNewLine = numberStr.replace("\n", delimiter);
    let sum = 0;
    const numberArr = numStrWithoutNewLine.split(delimiter).map(n => Number(n)).filter(n => n < 1000);
    if (numberArr.some(n => n < 0)) {
        const negativeNumberArr = numberArr.filter(n => n < 0);
        throw new Error(`negative numbers not allowed ${negativeNumberArr}`);
    }
    for (const num of numberArr) {
        sum += num;
    }
    return sum;
}