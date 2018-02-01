$(document).ready(function(){







	//after submit -> 

	$("#myForm").submit(function(){
		var firstName = $("#first_name").val();
		var lastName = $("#last_name").val();
		var email = $("#email").val();
		var contact = $("#contact").val();

		$("table").append("<tr><th>"+ firstName +"</th><th>"+ lastName +"</th><th>"+ email +"</th><th>"+ contact +"</th></tr>");

   		return false;
	});
		
	




//write the append function and then link it to submit/click??
});