import { useEffect, useState } from 'react'
import L from 'leaflet'
import 'leaflet-routing-machine'
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css'
import { useMap } from 'react-leaflet';

function LeafletRoutingMachine() {
    const map = useMap();
    const [latitude,setLatitude] = useState('')
    const [longitude,setLongitude] = useState('')

    navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLatitude(latitude);
          setLongitude(longitude);
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    useEffect(() => {
        L.Routing.control({
            waypoints: [
              L.latLng(latitude, longitude),
              L.latLng()
            ],
            geocoder: L.Control.Geocoder.nominatim(),
            showAlternatives: true,
            collapsible: true
          }).addTo(map);
    })
}

export default LeafletRoutingMachine