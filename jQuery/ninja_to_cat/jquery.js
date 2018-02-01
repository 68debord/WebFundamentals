$(document).ready(function(){

	$("img").click(function(){
		$(this).attr('temp', $(this).attr('src')); //create attribute temp, change its value to that of src
		$(this).attr('src', $(this).attr('data-alt-src')); //change value of src to that of data-alt-src
		$(this).attr('data-alt-src', $(this).attr('temp')); //change value of data-alt-src to that of temp, which now holds the original value of src
		//this allows for repeated swapping of the image source 
	})

})