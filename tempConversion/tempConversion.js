const ftoc = function(num) {
  result = (num -32) * 5/9
  return Math.round(result*10)/10;
}

const ctof = function(num) {
result2 = (num * 9/5) + 32;
return Math.round(result2*10)/10;
}

module.exports = {
  ftoc,
  ctof
}
