function printRange(start, end, skip){
	var i = start;

	while(i < end){
		i = i + skip;
		console.log(i);
	}

}

printRange(2, 10, 2);