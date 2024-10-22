import { TInitialMap } from "../types";

declare const google: { 
  maps: { 
    LatLng: new (arg0: string, arg1: string) => void;

    MapTypeId: { ROADMAP: string; }; 

    Map: new (arg0: HTMLElement | null, arg1: { 
      scrollwheel: boolean; 
      center: unknown; 
      zoom: number; 
      zoomControl: boolean; 
      mapTypeId: string; }

    ) => {setOptions: (arg0: {}) => void}; 
    
    Marker: new (arg0: { position: string; map: string }) => void } }

export const  initializeMap = ({longitude, latitude}: TInitialMap) => {
    const mapOptions = {
      scrollwheel: true,
      center: new google.maps.LatLng(latitude, longitude),
      zoom: 16,
      zoomControl: false,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    const map = new google.maps.Map(document.getElementById("map"), mapOptions);
	
    const styles = [
		  {
		    "stylers": [
		      { "hue": "#0D3DFC" },
		      { "saturation": 0 },
		      { "lightness": 0 }
		    ]
		  }
	];

	map.setOptions({styles: styles});            

}