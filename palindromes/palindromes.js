const palindromes = function(str) {
    var clean = str.replace(/[^A-Z0-9]/ig, "");
    cleanLower = clean.toLowerCase();
    var cleanReverserd = cleanLower.split("").reverse().join("");
    if (cleanReverserd === cleanLower) {
        return true
    } else {
        return false
    }
}

module.exports = palindromes
