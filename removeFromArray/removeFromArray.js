const removeFromArray = function(array, ...argument) {
    let newArray = Array.from(argument)
    for (let i=0; i< array.length; i++) {
        for ( let j=0; j<newArray.length; j++) {
            if (array[i] === newArray[j]) {
                array.splice(i, 1)
        }
        }
    }
    return array;
}
module.exports = removeFromArray
