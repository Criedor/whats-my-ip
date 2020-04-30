import React from 'react'
import { Map, TileLayer } from 'react-leaflet'

function MyMap (props) {
  return(
      <div className="map-container"> 
        <div className="leaflet-container"> 
          <Map center={props.position} zoom={props.zoom}>
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
            />
          </Map>
        </div>
      </div>
        )
  }


  export default MyMap