import React, { useState } from "react"
import ReactMapGL from "react-map-gl"

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 34.052235,
    longitude: -118.243683,
    height: "100vh",
    width: "100vw",
    zoom: 10,
  })
  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAP_KEY}
        mapStyle="mapbox://styles/springlordpants/ckhv4s2y101ms19pl30nuoiwr"
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
      ></ReactMapGL>
    </div>
  )
}
