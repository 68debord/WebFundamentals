$(document).ready(function(){

	$("#click button").click(function(){
		$("#click p").slideToggle();
	})

	$("#hide button").click(function(){
		$("#hide p").hide("slow");
	})

	$("#show button").click(function(){
		$("#show p:nth-of-type(2)").show("slow");
	})

	$("#toggle button").click(function(){
		$("#toggle p").toggle();
	})

	$("#slideDown button").click(function(){
		$("#slideDown img").slideDown(2000);
	})

	$("#slideUp button").click(function(){
		$("#slideUp img").slideUp(2000);
	})

	$("#slideToggle button").click(function(){
		$("#slideToggle img").slideToggle(2000);
	})

	$("#fadeIn button").click(function(){
		$("#fadeIn img").fadeIn(2000);
	})

	$("#fadeOut button").click(function(){
		$("#fadeOut img").fadeOut(2000);
	})

	$("#addClass button").click(function(){
		$("#addClass p").addClass("orangeBackground");
	})

	$("#before button").click(function(){
		$("#before p").before("<p>!!!</p>")
	})

	$("#after button").click(function(){
		$("#after p").after("<p>!!!</p>")
	})

	$("#append button").click(function(){
		$("#append").append("<p>!!!</p>")
	})

	$("#html button").click(function(){
		$("#html").html("<p>!!!</p><br/><p>!!!</p><br/><p>!!!</p><br/><p>!!!</p><br/><p>!!!</p><br/><p>!!!</p><br/><p>!!!</p><br/><p>!!!</p><br/><p>!!!</p><br/><p>!!!</p><br/><p>!!!</p><br/><p>!!!</p><br/><p>!!!</p><br/><p>!!!</p><br/>");
	})

	$("#attr button").click(function(){
		$("#attr img").attr("src", "img/marx.png");
	})
	
	$("#val button").click(function(){
		var selectionValue = $("#counting").val();
		$('#val h3').html(selectionValue);
	})

	$("#text button").click(function(){
		$("#text p").text("Listen to me very closely, you idiot. YOU DO NOT THINK IN SUFFICIENT DETAIL ABOUT SUPERINTELLIGENCES CONSIDERING WHETHER OR NOT TO BLACKMAIL YOU. THAT IS THE ONLY POSSIBLE THING WHICH GIVES THEM A MOTIVE TO FOLLOW THROUGH ON THE BLACKMAIL.");
	})

	$("#data button").click(function(){
		$("body").data("test", "やった！");
		$("#data h1").text($("body").data("test"));
	
	})
})

		

	// errata from lecture

		// $('selector').method
		
		// var js = $('div').html();
		// js += ' Authman';
		// console.log(js);
		
		// $('div').html(js);


		// $('button').click(function(){
		// 	alert("authman was here");
		// });
