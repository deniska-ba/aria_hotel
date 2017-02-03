//=require jquery.min.js

//=require what-input.js

// Core Foundation files
//=require foundation.core.js"
//=require foundation.util.*.js"

//=require foundation.dropdown.js"
//=require foundation.responsiveMenu.js"
//=require foundation.responsiveToggle.js"
//=require foundation.toggler.js"

// to inlude foundation plugins add "=" sign below
//
// require foundation.abide.js"
// require foundation.accordion.js"
// require foundation.accordionMenu.js"
// require foundation.drilldown.js"
// require foundation.dropdownMenu.js"
// require foundation.equalizer.js"
// require foundation.interchange.js"
// require foundation.magellan.js"
// require foundation.offcanvas.js"
// require foundation.orbit.js"
// require foundation.reveal.js"
// require foundation.slider.js"
// require foundation.sticky.js"
// require foundation.tabs.js"
// require foundation.tooltip.js"
// require foundation.zf.responsiveAccordionTabs.js"

//=require slick.min.js


;(function($){
	$(document).foundation();

	$(document).ready(function(){
		var $slider = $('.ba-slider-welcome');

		$slider.slick({
			slide: '.ba-slider__slide-welcome',
			dots: true,
			arrows: false,
			infinite: true
		});
	});

	$(document).ready(function(){
		var $sliderTwo = $('.ba-slider-bedrooms');

		$sliderTwo.slick({
		slide: '.ba-slider__slide-bedrooms',
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		dots: true,
		speed: 300,
		centerMode: false,
		// initialSlide: 4,
		variableWidth: true
		});
	});



      $(function() {

        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          scrollwheel: false,
          zoom: 8
        });
     });


})(jQuery);






	// $('.ba-container-slider').slick({
	// 	slide: '.ba-container-slider__slide',
	// 	prevArrow: ".ba-arrow__prev",
	// 	nextArrow: ".ba-arrow__next",
	// 	infinite: true,
	// 	slidesToShow: 4,
	// 	slidesToScroll: 1,
	// 	dots: false,
	// 	speed: 300,
	// 	centerMode: true,
	// 	initialSlide: 4,
	// 	variableWidth: true
	// });





// ;(function(){
// 	"use strict";

// 	window.onload = function(){

// 		var poltavaCoord = {lat: 49.592552, lng: 34.547128},
// 		mapDiv = document.querySelector('.ba-map');

// // Get poltava info before map init

// var poltavaInfo = document.querySelector('.ba-poltava-info');

// poltavaInfo = poltavaInfo.innerHTML;


// var officeMap = new google.maps.Map(mapDiv, {
// 	zoom: 17,
// 	center: poltavaCoord,
// 			// mapTypeId: google.maps.MapTypeId.HYBRID,
// 			disableDefaultUI: true
// 		});



// var poltavaMarker = new google.maps.Marker({
// 	position: poltavaCoord,
// 	map: officeMap,
// 	title: 'Poltava',
// 	animation: google.maps.Animation.DROP,
// 	icon: 'img/beetroot.svg'


// });

// 		// Set infowindow for poltava marker

// 		var poltavaInfowindow = new google.maps.InfoWindow({
// 			content: poltavaInfo
// 		});

// 		poltavaInfowindow.open(officeMap, poltavaMarker);

// 		// center map on window resize

// 		google.maps.event.addDomListener(window, "resize", function() {
// 			var center = officeMap.getCenter();
// 			google.maps.event.trigger(officeMap, "resize");
// 			officeMap.setCenter(center);
// 		});






// 	};





// })();








