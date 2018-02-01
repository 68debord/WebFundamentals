var daysUntilMyBirthday = 60;
var message = ""
for(i = daysUntilMyBirthday; i>=0; i--){

	if(i >= 30){
		message = i + "days until my birthday. Such a long time... :("
	}
	else if(i < 30 && i > 5){
		message = "Birthday coming up soon!";
	}
	else if(i <= 5 && i > 0){
		message = i + " DAYS UNTIL MY BIRTHDAY!"
	}
	else if(i==0){
		message = "HAPPY BIRTHDAY!"
	}

	console.log(message);
}







