var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var haight = new google.maps.LatLng(37.7699298, -122.4469157);
var oceanBeach = new google.maps.LatLng(37.7683909618184, -122.51089453697205);

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom: 14,
    center: haight
  }
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  directionsDisplay.setMap(map);
}

function calcRoute() {
  var selectedMode = document.getElementById("mode").value;
  var request = {
      origin: haight,
      destination: oceanBeach,
      // Note that Javascript allows us to access the constant
      // using square brackets and a string value as its
      // "property."
      travelMode: google.maps.TravelMode.DRIVING
  };
  directionsService.route(request, function(response, status) {
    if (status == google.maps.DirectionsStatus.OK) {
      directionsDisplay.setDirections(response);
    }
  });
}

google.maps.event.addDomListener(window, 'load', initialize);