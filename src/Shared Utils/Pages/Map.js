import React from 'react'
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useState, useEffect } from 'react';
import L from 'leaflet'
import LeafletGeocoder from './LeafletGeocoder'
import LeafletRoutingMachine from './LeafletRoutingMachine'

function Map() {
  const [latitude,setLatitude] = useState('')
  const [longitude,setLongitude] = useState('')

  useEffect(() => {
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
  }, []);

  const icon = L.icon({
    iconUrl: require('./location.png'),
    iconSize: [38, 38]
  })
  L.Marker.prototype.options.icon = icon

  const LocationMarker = () => {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e){
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      }
    })
    return position === <Marker position={[latitude, longitude]} icon={icon}>
      <Popup>Your location</Popup></Marker> ? null : (
      <Marker position={[latitude, longitude]} icon={icon}>
          <Popup>Your location</Popup>
        </Marker>
    )
  }


  return (
        <MapContainer center={[6.6745, -1.5716]} zoom={16.7} style={{ height:'100vh' }}>
          <TileLayer 
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <LocationMarker/>
          <LeafletGeocoder/>
          <LeafletRoutingMachine/>
        </MapContainer>
  )
}

export default Map