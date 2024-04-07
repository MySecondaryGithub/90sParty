
document.addEventListener("DOMContentLoaded", function () {

    // Create a custom icon
    var discoBallIcon = L.icon({
        iconUrl: 'assets/disco_ball.png',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        className: 'disco-ball-icon'
    });

    var parkingIcon = L.icon({
        iconUrl: 'assets/parking.png',
        iconSize: [32, 32],
        iconAnchor: [16, 16],
        className: "parking-icon"
    });

    // Initialize the map
    latitude = 52.209230;
    longitude = 8.067980;
    zoom = 15;
    var map = L.map('map').setView([latitude, longitude], zoom);

    var TopPlusOpen_Color = L.tileLayer('http://sgx.geodatenzentrum.de/wmts_topplus_open/tile/1.0.0/web/default/WEBMERCATOR/{z}/{y}/{x}.png', {
	maxZoom: 18,
	attribution: 'Map data: &copy; <a href="http://www.govdata.de/dl-de/by-2-0">dl-de/by-2-0</a>'
    });
    // Add the tile layer
    TopPlusOpen_Color.addTo(map);

    // Create a HTML string
    var htmlString = '<h6>Party Location!</h6><p>Eisenbahnstraße 25, 49124 Georgsmarienhütte</p>';

    // Create a custom popup
    var customPopup = L.popup().setContent(htmlString);

    // Add the popup to the marker
    L.marker([latitude, longitude], { icon: discoBallIcon }).addTo(map)
        .bindPopup(customPopup)
        .openPopup();

    var videoUrl = 'assets/disco_ball_clear_animation.gif',
    videoBounds = [[latitude - 0.01, longitude - 0.01], [latitude + 0.01, longitude + 0.01]];
    
    L.videoOverlay(videoUrl, videoBounds).addTo(map);

    var parking_location = [52.20852127449601,8.068410670635359];
    L.marker(parking_location, { icon: parkingIcon }).addTo(map)
        .bindPopup('Parking Location')
});
