function getMaxDifference(arr) {
    if (!arr.length) return 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                let temp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr[arr.length - 1] - arr[0];
}


console.log(getMaxDifference([11, 11, 11, 1, 3]))
console.log(getMaxDifference([10, 5, 11, 7, 8, 9]))