const sumAll = function(num1, num2) {
    let sum = 0;
    if ( num1 < 0 || num2 < 0) {
        return 'ERROR'
    }
     else if (typeof num1 !== 'number' || typeof num2 !== 'number') {
         return 'ERROR'
     }
     
     else if (num1 < num2) {
    for (let i=num1; i<num2+1; i++) {
        sum += i;
    }
    console.log(sum)
    return sum;
} else {
    for (let i=num2; i<num1+1; i++) {
        sum += i;
    }
    console.log(sum)
    return sum;
}
}

module.exports = sumAll
