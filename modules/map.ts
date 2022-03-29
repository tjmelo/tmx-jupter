export const  initializeMap = ({longitude, latitude}) => {
    var mapOptions = {
      scrollwheel: false,
      center: new google.maps.LatLng(latitude, longitude),
      zoom: 16,
      disableDefaultUI: true,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("map"),
        mapOptions);
    //estilos
	
    var styles = [
		  {
		    "stylers": [
		      { "hue": "#0D3DFC" },
		      { "saturation": 0 },
		      { "lightness": 0 }
		    ]
		  }
	];

	map.setOptions({styles: styles});

    //icone personalizado
    var myLatLng = new google.maps.LatLng(latitude, longitude);
    var beachMarker = new google.maps.Marker({
        position: myLatLng,
        map: map,
    });              

}