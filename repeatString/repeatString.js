const repeatString = function(string, num) {
    if (num < 0) return 'ERROR';
    let word='';
    for (let i=0; i<num; i++) {
        word += string;
    }
    return word;
}



module.exports = repeatString
