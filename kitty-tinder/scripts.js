$(document).ready(function() {
	
//------ CREATE IMAGE ARRAY --------//

	// Image factory
	var createImage = function(src, title) {
	  var img   = new Image();
	  img.src   = src;
	  img.alt   = title;
	  img.title = title;
	  return img; 
	};

	// array of images
	var images = [];
	var displayed = [];
	var liked = [];
	var discarded = [];

	// push images to the array
	images.push(createImage("cat-pics/cat1.png", "Garfield"));
	images.push(createImage("cat-pics/cat2.png", "Chloe"));
	images.push(createImage("cat-pics/cat3.png", "Copernicus"));
	images.push(createImage("cat-pics/cat4.png", "Skittles"));
	images.push(createImage("cat-pics/cat5.png", "Moses"));
	images.push(createImage("cat-pics/cat6.png", "Sprinkles"));
	images.push(createImage("cat-pics/cat7.png", "Samson"));
	images.push(createImage("cat-pics/cat8.png", "Mr. Meow"));
	images.push(createImage("cat-pics/cat9.png", "Snuggles"));
	images.push(createImage("cat-pics/cat10.png", "Henry VII"));
	images.push(createImage("cat-pics/cat11.png", "Toulouse"));
	images.push(createImage("cat-pics/cat12.png", "Princess Purrfect"));

	// output
	//console.log("images array: " + images);
	
	
//------ HIDE END DIV -------//

	$(".end").hide();
	
//------ DEFINE END FUNCTION ------//
function endFunction(){
		
	liked.push(displayed[0]);
	displayed.splice(0);
	
	if(document.getElementById("randomCat")!=undefined) {
			document.getElementById("randomCat").remove();
			console.log("it worked");
			//console.log("#randomCat existed and was deleted")
		}
	
	console.log("displayed has " + displayed.length + " elements")
	console.log("liked has " + liked.length + " elements")
	console.log("images has " + images.length + " elements")

	var slideshow = document.querySelector(".slideshow");
	slideshow.style.backgroundColor = "#F5F5F5";
	$(".cat-name" ).empty();
	$(".end").show();
	
	$('.like').off('click');
	$('.dislike').off('click');

}
	

//------ FIRST RANDOM IMAGE --------//

	var randomCat = images[[Math.floor(Math.random()*images.length)]];
	document.getElementById("randomCatImage").appendChild(randomCat);
	randomCat.id = "randomCat";
	var name = document.getElementById('cat-name');
	name.innerHTML = name.innerHTML + randomCat.title;
		
	//------ DELETE FROM IMAGES ARRAY, ADD TO DISPLAY --------//
		var index = images.indexOf(randomCat);
		displayed.push(images[[index]]);
 		if (index > -1) {
 			images.splice(index, 1);
 		}
		
		console.log("displayed has " + displayed.length + " elements")
		console.log("liked has " + liked.length + " elements")
		console.log("images has " + images.length + " elements")



	var num = images.length
	

	//------ LIKE BUTTON... --------//

		$('.like').click(function(){
		
			if (num > 0) {
			
				//console.log("like was clicked");
	
			//------ MOVE OLD DISPLAY TO LIKE --------//	
				liked.push(displayed[0]);
				displayed.splice(0);
	
		
		
			//------ SHOW RANDOM IMAGE --------//
			
					var randomCat = images[[Math.floor(Math.random()*images.length)]];
			
					// gets rid of older picture
					if(document.getElementById("randomCat")!=undefined) {
						document.getElementById("randomCat").remove();
						//console.log("#randomCat existed and was deleted")
					}
			
					document.getElementById("randomCatImage").appendChild(randomCat);
					randomCat.id = "randomCat";	
			
		
			//------ DISPLAY CAT NAME --------//
	
					var name = document.getElementById('cat-name');
					name.innerHTML = randomCat.title;
						
		
			//----?-----//
			
				var index = images.indexOf(randomCat);
				displayed.push(images[[index]]);
				if (index > -1) {
					images.splice(index, 1);
				}	
		
				num--
				console.log("displayed has " + displayed.length + " elements")
				console.log("liked has " + liked.length + " elements")
				console.log("images has " + images.length + " elements")
				console.log("var is " + num)
			
			} else {
		
			endFunction();
			
			}
			
	
		});
	
	//------ DISLIKE BUTTON ... --------//
	
		$('.dislike').click(function(){
		
			//console.log("dislike was clicked");
			if (num > 0) {
	
			//------ DELETE OLD DISPLAY --------//	

				displayed.splice(0);
	
		
			//------ SHOW RANDOM IMAGE --------//

			
			
					var randomCat = images[[Math.floor(Math.random()*images.length)]];
			
					// gets rid of older picture
					if(document.getElementById("randomCat")!=undefined) {
						document.getElementById("randomCat").remove();
						//console.log("#randomCat existed and was deleted")
					}
			
					document.getElementById("randomCatImage").appendChild(randomCat);
					randomCat.id = "randomCat";	
			
		
			//------ DISPLAY CAT NAME --------//
	
					var name = document.getElementById('cat-name');
					name.innerHTML = randomCat.title;
			
			//----?-----//
			
					var index = images.indexOf(randomCat);
					displayed.push(images[[index]]);
					if (index > -1) {
						images.splice(index, 1);
					}	
		
					num--
					console.log("displayed has " + displayed.length + " elements")
					console.log("liked has " + liked.length + " elements")
					console.log("images has " + images.length + " elements")
					console.log("var is " + num)
			
			} else {
		
				endFunction();
			
			}	 
		});
	
	




});
