import React, {useEffect} from 'react'
import L from 'leaflet'
import 'leaflet-control-geocoder/dist/Control.Geocoder.css'
import 'leaflet-control-geocoder/dist/Control.Geocoder.js'
import { useMap } from 'react-leaflet';


function LeafletGeocoder() {
    const map = useMap();
    useEffect(()=>{
        L.Control.geocoder({
            defaultMarkGeocode: false
          })
            .on('markgeocode', function(e) {
              const latlng = e.geocode.center;
              L.marker(latlng).addTo(map).bindPopup(e.geocode.name).openPopup();
              map.fitBounds(e.geocode.bbox);
            })
            .addTo(map);
    })
  return <div></div>
}

export default LeafletGeocoder