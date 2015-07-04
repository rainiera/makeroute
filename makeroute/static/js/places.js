
// accepts a location of format [lat,long]
function urlBuilder (location) {
	var result = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?";
	result += "location=" + location;
	result += "&radius=500&types=food&key=AIzaSyCku7gfPZWjipI_8SROqRwDzqTozxKW3F0";
	return result;
}

var placesResult = urlBuilder(location);


/*
Assuming map variable has already been established
*/


  