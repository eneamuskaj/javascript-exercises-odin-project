const getTheTitles = function(array) {
    let array2 = array.map(function(element) {
        return element.title
    })
    return array2
}

module.exports = getTheTitles;
