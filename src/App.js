import React, { useState } from "react"
import ReactMapGL from "react-map-gl"
// import GlobalStyles from "./styles/GlobalStyles.css"

export default function App() {
  const [viewport, setViewport] = useState({
    latitude: 34.052235,
    longitude: -118.243683,
    width: "100vw",
    height: "100vh",
    zoom: 10,
  })

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
        mapStyle="mapbox://styles/springlordpants/ckhv4s2y101ms19pl30nuoiwr"
        onViewportChange={(viewport) => {
          setViewport(viewport)
        }}
      ></ReactMapGL>
    </div>
  )
}
