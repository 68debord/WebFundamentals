var arr = ["James","Jill","Jane","Jack"];

function fancy(symbol, reversed){
	if(!reversed){
		for(i = 0; i < arr.length; i++){
			console.log(i + symbol + arr[i]);
		}		
	}
	else if(reversed){
		for(i = arr.length-1; i >= 0; i--){
			console.log(i + symbol + arr[i]);
		}
	}			
}

fancy("==>", true);