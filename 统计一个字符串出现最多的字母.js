function getMostLetter(str) {
    if (str.length <= 1) return str;
    let obj = {};

    for (let i = 0; i < str.length; i++) {
        obj[str.charAt(i)] = (obj[str.charAt(i)] || 0) + 1;
    }

    let maxValue = 0, letter = '';
    for (let key in obj) {
        if (obj[key] > maxValue) {
            maxValue = obj[key];
            letter = key;
        }
    }
    return letter;

}

console.log(getMostLetter('sadagfohgodsgodsfoaoedq')) // o
console.log(getMostLetter('qwrqpwotjpmhpfopja')) // p