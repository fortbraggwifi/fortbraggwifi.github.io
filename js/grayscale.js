/*!
 * Start Bootstrap - Grayscale Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery to collapse the navbar on scroll
$(window).scroll(function() {
    if ($(".navbar").offset().top > 50) {
        $(".navbar-fixed-top").addClass("top-nav-collapse");
    } else {
        $(".navbar-fixed-top").removeClass("top-nav-collapse");
    }
});

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});

$('a.color-change').click(function() {
  var color = $("body").css("background-color");
  if (color == "rgb(0, 0, 0)") {
  $("body").css({"background-color": "#fff", "color": "#000"});
  } else {
  $("body").css({"background-color": "#000", "color": "#fff"});
  }   
  }); 

// Google Maps Scripts
// When the window has finished loading create our google map below
google.maps.event.addDomListener(window, 'load', init);

function init() {
    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 17,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(39.4458, -123.8053), // Fort Bragg 

        // Disables the default Google Maps UI components
        disableDefaultUI: true,
        scrollwheel: false,
        draggable: false,

        // How you would like to style the map. 
        // This is where you would paste any style found on Snazzy Maps.
        styles:
        [{"stylers":[{"saturation":-100},{"gamma":1}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.business","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"poi.place_of_worship","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"water","stylers":[{"visibility":"on"},{"saturation":50},{"gamma":0},{"hue":"#50a5d1"}]},{"featureType":"administrative.neighborhood","elementType":"labels.text.fill","stylers":[{"color":"#333333"}]},{"featureType":"road.local","elementType":"labels.text","stylers":[{"weight":0.5},{"color":"#333333"}]},{"featureType":"transit.station","elementType":"labels.icon","stylers":[{"gamma":1},{"saturation":50}]}]
    }; 
 //       styles: [{
 //           "featureType": "water",
 //           "elementType": "geometry",
 //           "stylers": [{
 //               "color": "#000000"
 //           }, {
 //               "lightness": 17
 //           }]
 //       }, {
 //           "featureType": "landscape",
 //           "elementType": "geometry",
 //           "stylers": [{
 //               "color": "#000000"
 //           }, {
 //               "lightness": 20
 //           }]
 //       }, {
 //           "featureType": "road.highway",
 //           "elementType": "geometry.fill",
 //           "stylers": [{
 //               "color": "#000000"
 //           }, {
 //               "lightness": 17
 //           }]
 //       }, {
 //           "featureType": "road.highway",
 //           "elementType": "geometry.stroke",
 //           "stylers": [{
 //               "color": "#000000"
 //           }, {
 //               "lightness": 29
 //           }, {
 //               "weight": 0.2
 //           }]
 //       }, {
 //           "featureType": "road.arterial",
 //           "elementType": "geometry",
 //           "stylers": [{
 //               "color": "#000000"
 //           }, {
 //               "lightness": 18
 //           }]
 //       }, {
 //           "featureType": "road.local",
 //           "elementType": "geometry",
 //           "stylers": [{
 //               "color": "#000000"
 //           }, {
 //               "lightness": 16
 //           }]
 //       }, {
 //           "featureType": "poi",
 //           "elementType": "geometry",
 //           "stylers": [{
 //               "color": "#000000"
 //           }, {
 //               "lightness": 21
 //           }]
 //       }, {
 //           "elementType": "labels.text.stroke",
 //           "stylers": [{
 //               "visibility": "on"
 //           }, {
 //               "color": "#000000"
 //           }, {
 //               "lightness": 16
 //           }]
 //       }, {
 //           "elementType": "labels.text.fill",
 //           "stylers": [{
 //               "saturation": 36
 //           }, {
 //               "color": "#000000"
 //           }, {
 //               "lightness": 40
 //           }]
 //       }, {
 //           "elementType": "labels.icon",
 //           "stylers": [{
 //               "visibility": "off"
 //           }]
 //       }, {
 //           "featureType": "transit",
 //           "elementType": "geometry",
 //           "stylers": [{
 //               "color": "#000000"
 //           }, {
 //               "lightness": 19
 //           }]
 //       }, {
 //           "featureType": "administrative",
 //           "elementType": "geometry.fill",
 //           "stylers": [{
 //               "color": "#000000"
 //           }, {
 //               "lightness": 20
 //           }]
 //       }, {
 //           "featureType": "administrative",
 //           "elementType": "geometry.stroke",
 //           "stylers": [{
 //               "color": "#000000"
 //           }, {
 //               "lightness": 17
 //           }, {
 //               "weight": 1.2
 //           }]
 //       }]

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using out element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);
    // Pine+Franklin = 39.446731, -123.804518
    // Redwood and Franklin = 39.444204, -123.804523
    // Redwood and Main = 39.444208, -123.806030
    // Pine and Main = 39.444208, -123.806030
    // Custom Map Marker Icon - Customize the map-marker.png file to customize your icon
    var image = 'img/map-marker.png';
    var myLatLng = new google.maps.LatLng(39.4458, -123.8053);
    //var beachMarker = new google.maps.Marker({
    //    position: myLatLng,
    //    map: map,
    //    icon: image  
    //});
    var rectangle = new google.maps.Rectangle({
    strokeColor: '#428BCA',
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: '#428BCA',
    fillOpacity: 0.35,
    map: map,
    bounds: new google.maps.LatLngBounds(
      new google.maps.LatLng(39.444, -123.807),
      new google.maps.LatLng(39.447, -123.8044))

    });
}
