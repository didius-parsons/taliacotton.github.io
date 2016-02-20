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
	/**
	 * This works well. Another clearner option could be to break the data (i.e image / name) and rendering into two places. 
	 * You can do this by creating a data object that holds your cat info. Such as
	 var catData = [
	    {name:"Garfield", img:  "cat-pics/cat1.png"},
	    {name:"Chloe", img:  "cat-pics/cat2.png"},
	    {name:"Copernicus", img:  "cat-pics/cat3.png"},
	    ..........
	 ];
	 
	 * Then you could populate your images with a simple loop
	 for(var i=0; i<catData.length; i++)
	 {
	 	images.push(createImage(catData[i].img, catData[i].img));
	 }
	 
	 * in the above code i = the current cat, and catData[i].img means return the value of the i'th cats img. 
	 **/
	 
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
	
	/**
	 * This is the native way of checking. Native meaning no libraries. With Jquery you can check with
	 
	if( $("#randomCat").length > 0 );
	
	* this works cause jQuery returns an array of elements that match the selector ("#randomcat") 
	* also type checking should be done with 
	
	typeof(document.getElementById("randomCat")) != "undefined"
	
	* since document.getElementById("randomCat")!=undefined may not always be true
	*/
	
	if(document.getElementById("randomCat")!=undefined ) {
			document.getElementById("randomCat").remove();
			console.log("it worked");
			//console.log("#randomCat existed and was deleted")
		}
	
	console.log("displayed has " + displayed.length + " elements")
	console.log("liked has " + liked.length + " elements")
	console.log("images has " + images.length + " elements")

	/**
	 * since you jQuery on the page you could write this as such
	 var slideshow = $(".slideshow");
	 slideshow.css("background-color", "#F5F5F5");
	 */
	var slideshow = document.querySelector(".slideshow");
	slideshow.style.backgroundColor = "#F5F5F5";
	$(".cat-name" ).empty();
	$(".end").show();
	
	$('.like').off('click');
	$('.dislike').off('click');

}
	

//------ FIRST RANDOM IMAGE --------//

	var randomCat = images[[Math.floor(Math.random()*images.length)]];
	
	/**
	 * same info as above - you could write this wiht jQuery
	 */
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
			
				/**
				 * its moving the cat image out of images and putting it in a displayed array
				 */
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
			
			/*
			* You could abstract all the cat display logic to a display cat fucntion - that would prevent the 
			* need to have the same logic in two places - which makes maintence better in the long run. 
			* you could do something like
			
			function displayCat(){
				//display logic goes here that picks a random cat, and displays it
			}
			
			* then take the two like and dislike clicks and make them simply move it to the like or dislike array then call 
			* the display cat funciton. That way if you need to change how you display cat info you only 
			* need to do it in 1 place :)
			*/
	
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
