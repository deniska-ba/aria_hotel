;(function($){
	$(document).foundation();


	$(function(){


		var poltavaCoord = {lat: 49.592552, lng: 34.547128},
		mapDiv = document.querySelector('.ba-map');

// Get poltava info before map init

var poltavaInfo = document.querySelector('.ba-poltava-info');

poltavaInfo = poltavaInfo.innerHTML;


var officeMap = new google.maps.Map(mapDiv, {
	zoom: 17,
	center: poltavaCoord,
			// mapTypeId: google.maps.MapTypeId.HYBRID,
			disableDefaultUI: true
		});



var poltavaMarker = new google.maps.Marker({
	position: poltavaCoord,
	map: officeMap,
	title: 'Poltava',
	animation: google.maps.Animation.DROP,
	icon: 'img/beetroot.svg'


});

		// Set infowindow for poltava marker

		var poltavaInfowindow = new google.maps.InfoWindow({
			content: poltavaInfo
		});

		poltavaInfowindow.open(officeMap, poltavaMarker);

		// center map on window resize

		google.maps.event.addDomListener(window, "resize", function() {
			var center = officeMap.getCenter();
			google.maps.event.trigger(officeMap, "resize");
			officeMap.setCenter(center);
		});



	});
})(jQuery);
