import React from "react"
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps"

function Map() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter={{ lat: 34.052235, lng: -118.243683 }}
    ></GoogleMap>
  )
}

const WrappedMap = withScriptjs(withGoogleMap(Map))

export default WrappedMap
