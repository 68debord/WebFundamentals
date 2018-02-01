var reward = 0.01;

function double(days){

	for(i = days; i > 0; i--){
		reward *= 2;

	}
}

double(30);
console.log(reward);
