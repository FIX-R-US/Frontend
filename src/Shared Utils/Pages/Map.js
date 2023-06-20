import React from 'react'
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'
import { useState } from 'react';
import { Icon } from 'leaflet';


function Map() {
  const [latitude,setLatitude] = useState('')
  const [longitude,setLongitude] = useState('')


    navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        setLatitude(latitude);
        setLongitude(longitude);
        console.log(latitude, longitude)
      },
      (error) => {
        console.error('Error getting current location:', error);
      }
    );


  const icon = new Icon({
    iconUrl: require('./location.png'),
    iconSize:[38, 38]
  })



  return (
        <MapContainer center={[latitude, longitude]} zoom={13} style={{ height:'100vh' }}>
        <TileLayer 
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={[latitude, longitude]} icon={icon}/>
        </MapContainer>
  )
}

export default Map