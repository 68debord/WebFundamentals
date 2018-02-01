var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";


var nowMinute = ""; 
var nowPeriod = ""; 

if(MINUTE <= 30){
	nowMinute = "It's just after ";
}
else if(MINUTE > 30){
	nowMinute = "It's almost ";
}

if(PERIOD = "AM"){
	nowPeriod = "in the morning";
}
else if(PERIOD = "PM"){
	nowPeriod = "in the evening"
}

console.log(nowMinute + HOUR + nowPeriod);