/* author: Rainier Ababao */

/*
From the doc:
To use directions in the Google Maps JavaScript API,
create an object of type DirectionsService and call
DirectionsService.route() to initiate a request to
the Directions service, passing it a DirectionsRequest
object literal containing the input terms and a
callback method to execute upon receipt of the response.
*/

/*
Pre: pointA and pointB are strings representing valid locations
wp represents a waypoint with "stopover" being true by default
mode represents an instance variable from TravelMode, e.g., "TravelMode.DRIVING"

Post: Builds a DirectionsRequest object literal with the relevant parameters

Read the doc:
https://developers.google.com/maps/documentation/javascript/directions#DirectionsRequests
*/

function DirectionsRequestBuilder (pointA, pointB, wp, mode) {
	var result = {
		origin: pointA;
		destination: pointB;
		waypoints: [
		{
			location: wp,
			stopover: true
		}
		]
		optimizeWaypoints: true;
		provideRouteAlternatives: false,
		travelMode: mode,
	}
	return result;
}
