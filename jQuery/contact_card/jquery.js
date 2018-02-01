$(document).ready(function(){

	$("#form").submit(function(){

		var first_name = $('#first_name').val();
		var last_name = $('#last_name').val();
		$('#output').append("<div class='card'><h2>" + first_name + " " +last_name + "</h2><p>Click for Description</p></div>");

   		return false;
	});

	$(document).on('click', '.card', function(){
		var description = $('#description').val();
		$(this).html('<p>' + description + '</p>');
	})
});





