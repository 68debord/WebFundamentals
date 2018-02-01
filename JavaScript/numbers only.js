var newArray = numbersOnly([1, "apple", -3, "orange", 0.5]);

function numbersOnly(array){
	var allNumbers = [];
	for(var i = 0; i < array.length; i++){

		if(typeof array[i] === "number"){
			allNumbers.push(array[i]);
		}	
	}
	return(allNumbers);
}

console.log(newArray);