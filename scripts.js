$(document).ready(function() {
    console.log( "ready!" );
	$(".content").hide();

	$('.dropdown').tendina({

			animate: true,
			speed: 500,
			onHover: true,
			hoverDelay: 200,
			activeMenu: $('#deepest'),
			// openCallback: function(clickedEl) {
// 			  console.log('clicked open');
// 			},
// 			closeCallback: function(clickedEl) {
// 			  console.log('clicked closed');
// 			}
		  })
	$(".talia").click(function(){
		$(".content").show();
		$("#taliaContent").show();
		$("#taliaPicture").show();
		$("#404NotFound").hide();
    	$("#classContent").hide();
    	$("#assignment1Content").hide();
	});
	$(".theClass").click(function(){
		$(".content").show();
		$("#taliaContent").hide();
		$("#taliaPicture").hide();
		$("#404NotFound").hide();
    	$("#classContent").show();
    	$("#assignment1Content").hide();
	});
	
	$(".cats").click(function(){
		console.log("cats clicked");
		$(".content").show();
// 		$("#taliaContent").hide();
// 		$("#taliaPicture").hide();
// 		$("#404NotFound").show();
//     	$("#classContent").hide();
//     	$("#assignment1Content").hide();
    	
		$("#taliaContent").html('<h2>Cats Cats</h2><p>cats cats Cats-cats cats cats. Cats cats cats cats cats cats cats, cats cats cats cats cats cats cats cats (cats cats cats). Cats cats cats cats cats cats cats cats cats cats cats cats cats. cats cats cats cats cats cats cats cats cats cats–cats cats cats Cats = cats2 (cats cats cats cats "cats cats cats cats cats"). Cats cats cats cats cats cats cats Cats cats cats "cats cats cats cats", cats cats cats cats cats cats cats cats cats cats cats, cats cats cats cats cats cats cats cats cats.</p><p>Cats cats cats cats cats cats, Cats cats cats Cats cats cats cats cats cats cats cats cats cats cats cats cats cats cats cats cats cats cats cats. Cats cats cats cats cats cats cats cats cats cats cats. Cats cats, cats, cats cats cats cats cats cats cats cats cats cats cats cats, cats cats cats cats cats cats cats cats 1916, cats cats cats cats cats cats cats. Cats cats cats cats cats cats cats cats cats cats cats cats, cats cats cats cats cats cats cats cats cats cats cats cats cats. Cats cats cats cats cats cats cats cats cats cats cats cats cats cats cats cats cats cats. Cats 1917, Cats cats cats cats cats cats cats cats cats cats cats-cats cats cats cats cats.</p><p class="quote">“Cats cats cats cats cats-cats cats cats cats.”</p>');
    	$("#assignment1Content").html('<h2>Cats Cats</h2><p>(cats cats cats.)</p>');
    	$( "#404NotFound" ).html('<h2>404 Cats Cats</h2><p>Cats cats cats cats cats cats cats cats. (Cats.)</p>');

    	$("#taliaPicture").attr("src", "images/catSnapchat.jpg");
    	
    	
    	$('.dropdown').html($('.dropdown').html().replace('About','Cats'));
    	$('.dropdown').html($('.dropdown').html().replace('Talia Cotton','Cats'));
    	$('.dropdown').html($('.dropdown').html().replace('The Class','Cats'));
    	$('.dropdown').html($('.dropdown').html().replace('Projects','Cats'));
    	$('.dropdown').html($('.dropdown').html().replace('I want some...','Cats'));
    	$('.dropdown').html($('.dropdown').html().replace('Assignment 1: This webpage','Cats'));
    	$('.dropdown').html($('.dropdown').html().replace('Assignment 2','Cats'));
    	$('.dropdown').html($('.dropdown').html().replace('Assignment 3','Cats'));
    	$('.dropdown').html($('.dropdown').html().replace('Assignment 4','Cats'));

	});

	$(".unicorns").click(function(){
		$(".content").show();
		$(".taliaContent").hide();
		$("#taliaPicture").hide();
		$(".404NotFound").show();
    	$(".classContent").hide();
    	$(".assignment1Content").hide();
	});
	$(".bacon").click(function(){
		$(".content").show();
		$(".taliaContent").hide();
		$(".404NotFound").show();
    	$(".classContent").hide();
    	$(".assignment1Content").hide();
	});
	$(".assignment1").click(function(){
		$(".content").show();
		$("#taliaContent").hide();
		$("#taliaPicture").hide();
		$("#404NotFound").hide();
    	$("#classContent").hide();
    	$("#assignment1Content").show();
	});
	
});