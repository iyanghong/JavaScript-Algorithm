/**
 * 交换变量,主要是利用 + - 去进行运算，类似 a = a + ( b - a) 实际上等同于最后 的 a = b;
 * @param {number} a
 * @param {number} b
 * @returns {(*|number)[]}
 */
function swap(a, b) {
    b = b - a;
    a = a + b;
    b = a - b;
    return [a, b]
}

console.log(swap(5,6))