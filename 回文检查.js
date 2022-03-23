
function checkPalindrome(str){
    //把字符串转成数组并且翻转数组再转城字符串，再跟原字符相比
    return str === str.split('').reverse().join('');
}



console.log('mamam',checkPalindrome('mamam')); //false
console.log('aabb',checkPalindrome('aabb')); //false
console.log('aba',checkPalindrome('aba'))   // true