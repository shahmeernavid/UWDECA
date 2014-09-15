var exports = {};

exports.partition = function (array, n){
	// don't mutate the input
	array = array.slice(0);

	var output = [],
			current = [];
	
	array.forEach(function (elem, i){
		if(i == array.length - 1){
			current.push(elem);
			output.push(current);
		}
		else if ((i+1) % n === 0){
			current.push(elem);
			output.push(current);
			current = [];
		}
		else {
			current.push(elem);
		}
	});

	return output;
};

module.exports = exports;
