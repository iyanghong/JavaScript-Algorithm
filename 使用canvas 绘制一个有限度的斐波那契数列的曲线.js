/**斐波那契数列，又称黄金分割数列，指的是这样一个数列：0、1、1、2、3、5、8、13、21、34、……在数学上，斐波纳契数列主要考察递归的调用。*/


function getFibonacci(n) {
    let arr = [];
    let i = 0;
    while (i < n) {
        if (i <= 1) {
            arr.push(i)
        } else {
            arr.push(arr[i - 1] + arr[i - 2])
        }
    }
    return arr;
}