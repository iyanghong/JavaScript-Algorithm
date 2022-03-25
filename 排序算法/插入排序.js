/**
 *
 * @param arr
 * @returns {*}
 */
function insertionSort(arr) {
    let preIndex, current;
    for (let i = 1; i < arr.length; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex >= 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex]
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}

console.log(insertionSort([9, 8, 6, 5, 6, 8, 7]))