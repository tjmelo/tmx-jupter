declare var google: { 
  maps: { 
    LatLng: new (arg0: any, arg1: any) => any; 
    MapTypeId: { ROADMAP: any; }; 
    Map: new (arg0: HTMLElement | null, arg1: { 
      scrollwheel: boolean; 
      center: any; 
      zoom: number; 
      zoomControl: boolean; 
      mapTypeId: any; }
    ) => any; Marker: new (arg0: { position: any; map: any; }) => any; }; }; 

export const  initializeMap = ({longitude, latitude}: any) => {
    var mapOptions = {
      scrollwheel: true,
      center: new google.maps.LatLng(latitude, longitude),
      zoom: 16,
      zoomControl: false,
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