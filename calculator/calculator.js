function add (...Args) {
	return Args.reduce((previous, current) => {
		return previous + current;
	  });
}

function subtract (...Args) {
	return Args.reduce((previous, current) => {
		return previous - current;
	})
}

function sum (array) {
	var reducer = (accumulator, currentValue) => accumulator + currentValue;
	if (array === []) {
		return 0;
	} else {
		
	 return array.reduce(reducer);
	}
}
function multiply (array) {
	reducer = (accumulator, currentValue) => accumulator * currentValue;
	return array.reduce(reducer)
	
}

function power() {
	
}

function factorial() {
	
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}