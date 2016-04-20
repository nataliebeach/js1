

// get access token from hash/fragment
var uriHash = window.location.hash;

if (uriHash.length > 0) {
	var accessToken = uriHash.replace('#access_token=', '');
	getImages(accessToken);
} else {
	// if not yet redirected hide results view
  $('.image-results-view').hide();
}


function getImages(accessToken) {
  $('.sign-in-view').hide();

  getCurrentLocation(function(position) {
		var lat = position.coords.latitude;
		var longi = position.coords.longitude;
		console.log(lat)
		console.log(longi)
	
  // Determine the user's location. When the location position is obtained
		// store latitude in a variable
		// store longitude in a variable

		// create a variable for the endpoint
		var instagramEndpoint = 'https://api.instagram.com/v1/media/search?lat=' + lat + '&lng=' + longi + '&access_token=' + accessToken; // <== store your url here in this string!
		// now lets fetch the data images from instagram and handle the response
		$.ajax({
			url: instagramEndpoint,
			method: 'GET', 
			dataType: 'jsonp',
			success: handleResponseSuccess // <== You'll have to implement this below
		});
		})
}


function handleResponseSuccess(response) {
	var allData = response.data;
	console.log(allData)
  	allData.forEach(function(item){
  		var imageUrl = item.images.standard_resolution.url;
  		console.log(imageUrl)
  		$('.images').append('<div class="image"></div>')
  		$('.image').css("background-image", "url(" + imageUrl + ")");


  	})
  // for each item in allData
  	// assign the item's image url to a variable imageUrl
  	// create a new jQuery div element
  	// Use the jQuery css method to change the background of the the div to the imageUrl
  	// Use jQuery to add the 'image' class to the new div element
  	// append the new div element to the .images div
}

// This function fetches the current location of the user. It has one parameter
// onLocation which is a callback function here's an example


function getCurrentLocation(onLocation) {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(onLocation);
	} else {
		console.error("Geolocation is not supported by this browser.");
	}
}




