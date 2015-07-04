var directionsDisplay;
var directionsService = new google.maps.DirectionsService();
var map;
var start = new google.maps.LatLng(30.2669444, -97.7427778);
var end = new google.maps.LatLng(32.7833333, -96.8);
var changeLat = (end.lat() - start.lat()) / 2;
var changeLong = (end.lng() - start.lng()) / 2;
var markers = [];
var placesResult;

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
        radius: '70000',
        types: ['food']
    };

    for (var i = 0; i < 2; i++) {
        var change = new google.maps.LatLng(start.lat() + (changeLat * i), start.lng() + (changeLong * i));
        request.location = change;
        service = new google.maps.places.PlacesService(map);
        placesResult = service.nearbySearch(request, callback);
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
    directionsService.route(request, function (response, status) {
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

    google.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent(place.name);
        //second param marker so that change state of map to have marker
        infowindow.open(map, marker);
    });
}


function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length && i < 75; i++) {
            if (i % 4 == 0) {
                markers.push(results[i]);
                createMarker(results[i]);
            }
        }
    }
}
