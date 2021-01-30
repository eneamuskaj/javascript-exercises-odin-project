const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    }
    array=[1,1]
    for (let i=1; i < num; i++) {
        array.push(array[i] + array[i-1])
        }
  return array[num-1]
}

module.exports = fibonacci
