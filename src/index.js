module.exports = function reverse(n) {
    let str = n.toString();  
    let reversedStr = str.split('').reverse().join('');
    let reversedNum = parseInt(reversedStr, 10);  
    return reversedNum;
  }
  
