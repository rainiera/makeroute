var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var start = new google.maps.LatLng(30.2669444, -97.7427778);
var end = new google.maps.LatLng(32.7833333, -96.8);
var changeLat = (end.lat() - start.lat())/10;
var changeLong = (end.lng() - start.lng())/10;
var markers = [];

function initialize() {
  directionsDisplay = new google.maps.DirectionsRenderer();
  var mapOptions = {
    zoom: 14,
    center: start
  }
  map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  directionsDisplay.setMap(map);
  var service;
  var request = {
    location: start,
    radius: '8000',
    types: ['food']
  };

  for(var i = 0; i < 10; i++){
    var change = new google.maps.LatLng(start.lat() + (changeLat * i), start.lng() + (changeLong * i));
    request.location = change;
    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
  }
  for (var j = 0; j < markers.length; j++){
    createMarker(markers[j]);
  }
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


function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location

  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}


function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      markers.push(results[i]);
    }
  }
}


//"Stop being such little bitches" - Alan Turing