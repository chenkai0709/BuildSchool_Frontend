var map;

function initMap() {
  var myLatLng = { lat: 25.041593, lng: 121.536304 };

  var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      center: myLatLng
  });

  var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: 'Hello World!'
  });
}