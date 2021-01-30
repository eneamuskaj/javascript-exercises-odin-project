const caesar = function(str, num) {
    let arrayChar = [];
    let stringChar = [];
    splitted = str.split("");
    for (let i=0; i<splitted.length; i++) {
        if ( (/[a-zA-Z]/).test(splitted[i])) {
            if ( (splitted[i].charCodeAt(0) + num) > 122 ) {
                arrayChar.push( (splitted[i].charCodeAt(0) + num) -26 )
            } else {
            arrayChar.push(splitted[i].charCodeAt(0) + num);
            }
        } else {
            arrayChar.push(splitted[i]);
        }
    }
    for ( let j=0; j<arrayChar.length; j++) {
        if (typeof arrayChar[j] === "number") {
            stringChar.push(String.fromCharCode(arrayChar[j]))
        } else {
            stringChar.push(arrayChar[j])
        }
    }
    return stringChar.join('')

}
module.exports = caesar
