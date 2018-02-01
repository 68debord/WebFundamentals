
$(document).ready(function(){







for(var i = 1; i <=151; i++){

	$('#images').append("<img id="+i+" src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"+ i +".png'>");
}



$('img').click(function(){
	var id_num = $(this).attr('id');
	$.get("https://pokeapi.co/api/v2/pokemon/" + id_num + "/", function(res) {
		var html_str = "";
		html_str += "<h1>" + res.name.charAt(0).toUpperCase() + res.name.slice(1) + "</h1>"
		html_str += "<img src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/" + id_num + ".png'>"
		html_str += "<h4>Types</h4>";
		html_str += "<ul>";
		for(var i = 0; i < res.types.length; i++){
			html_str += "<li>" + res.types[i].type.name + "</li>";
		}
		html_str += "</ul>";
		html_str += "<h4>Height</h4>";
		html_str += "<p>" + res.height + "</p>";
		html_str += "<h4>Weight</h4>";
		html_str += "<p>" + res.weight + "</p>";
		$("#info").html(html_str);
	}, "json");

})



});

// $('img').click(function()){
// 	var id_num = $(this).attr('id');
	
// }