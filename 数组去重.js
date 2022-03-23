/**
 *
 * @param {Array} arr
 * @returns {*[]}
 */
function toUnique(arr){
    let res = [];
    for (let i = 0;i<arr.length;i++){
        if(res.indexOf(arr[i]) === -1){
            res.push(arr[i])
        }
    }
    return res;
}


console.log(toUnique([1,5,5,7,9,1,3]));