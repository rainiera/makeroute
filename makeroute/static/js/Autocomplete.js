var autocomplete;
function initialize() {
	autocompleteA = new google.maps.places.Autocomplete(
		/** @type {HTMLInputElement} */(document.getElementById('locationa')),
		{ types: ['geocode'] });
	google.maps.event.addListener(autocompleteA, 'place_changed', function() {
	});

	autocompleteB = new google.maps.places.Autocomplete(
		/** @type {HTMLInputElement} */(document.getElementById('locationb')),
		{ types: ['geocode'] });
	google.maps.event.addListener(autocompleteB, 'place_changed', function() {
	});

}
