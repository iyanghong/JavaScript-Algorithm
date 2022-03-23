/**
 * 在时间复杂度上表现最稳定的排序算法之一，因为无论什么数据进去都是O(n²)的时间复杂度
 */


/**
 *
 * @param {Array} arr
 * @returns {*}
 */
function selectionSort(arr) {
    let minIndex,temp;
    for(let i = 0;i < arr.length;i++){
        minIndex = i;
        for(let j = i + 1;j < arr.length;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j;
            }
        }
        temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
    }
    return arr;
}

console.log(selectionSort([9, 8, 6, 5, 6, 8, 7]))