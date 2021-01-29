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
	if (array.length < 1) {
		return 0;
	} else {
		
	 return array.reduce(reducer);
	}
}
function multiply (array) {
	reducer = (accumulator, currentValue) => accumulator * currentValue;
	return array.reduce(reducer)
	
}

function power(number, power) {
	return Math.pow(number, power)
}

function factorial(num) {
	if (num === 0) {
		return 1
	} else {
	let array = []
	for (let i = num; i > 0; i--) {
    array.push(i);
  }
  reducer =(prevValue, currentValue) => prevValue * currentValue;
  return array.reduce(reducer)

}
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}