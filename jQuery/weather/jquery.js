$(document).ready(function(){

    $('form').submit(function() {
      	var city = $('#city').val();

        $.get("http://api.openweathermap.org/data/2.5/weather?q=" + city + "&&appid=3e5f9f2e20b5c739951df26c7d4acb7b", 
        	function(res) {
            	var temp = res.main.temp;
            	var fahr = Math.floor(((temp-273.15)*1.8)+32);

            	$('#output').html("<h1>"+city+"</h1><h3>Temperature: "+fahr+"</h3>");
        }, 'json');
       
        return false;
    });

});