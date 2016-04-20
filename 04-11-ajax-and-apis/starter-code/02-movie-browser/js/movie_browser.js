// API Docs at: 
// http://www.omdbapi.com

var $movieSelect = $("#movie-select") 

var $form = $("#search")

var $input = $("#movie-search")

$movieSelect.hide()

$form.on("submit", function(event) {
	event.preventDefault()
	var input = $input.val()
        
		$.ajax({
		      url: "http://www.omdbapi.com/?s=" + input,
		      success: function( response ) {
		      	console.log(response)
		      	for (var i = 0; i< response.Search.length; i++ ){
		      
					$movieSelect.show();
					$movieSelect.append("<option id=" + response.Search[i].imdbID + ">" + response.Search[i].Title + "</option>");


		      	}
		          
		      }
		  });

		$movieSelect.on("select", function(event) {
			event.preventDefault();

			$.ajax({
		      url: "http://www.omdbapi.com/?s=" + input,
		      success: function( response ) {
		   
		      	var $movieDetail = $("#movie-detail")

		      	$movieDetail.append("<img url=" + response.Search[i].Poster + ">")
		          
		      }
		  })
		})

		

