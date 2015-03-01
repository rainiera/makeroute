var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var start = new google.maps.LatLng(30.2669444, -97.7427778);
var end = new google.maps.LatLng(32.7833333, -96.8);

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom: 14,
    center: start
  }
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  directionsDisplay.setMap(map);
}


function calcRoute() {
  var selectedMode = document.getElementById("mode").value;
  var request = {
      origin: start,
      destination: end,
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: selectedMode
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);


//"Stop being such little bitches" - Alan Turing