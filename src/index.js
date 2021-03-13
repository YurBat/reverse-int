module.exports = function reverse (n) {
let a = Math.abs(n);
let str = String(a);
  let res =  str.split('').reverse().join('');
return res;
}
