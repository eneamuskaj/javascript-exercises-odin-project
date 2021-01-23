const reverseString = function(string) {
    let reversed = '';
    for (let i=string.length-1; i>-1; i--) {
        reversed += string[i];
    }
    return reversed;
}


module.exports = reverseString
