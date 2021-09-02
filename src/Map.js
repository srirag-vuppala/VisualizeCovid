import React from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const SimpleMap = (props) => {
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: "80vh", width: "80%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
          libraries: 'visualization'
        }}
        defaultCenter={{
          lat: 37.0902,
          lng: -95.7129,
        }}
        heatmapLibrary={true}
        heatmap={props.heatMapData}
        // heatmap={{
        //   positions: [
        //     { lat: 55.5, lng: 34.56 },
        //     { lat: 34.7, lng: 28.4 },
        //     { lat: 37.0902, lng: -95.7129 },
        //   ],
        //   options: {
        //     radius: 20,
        //     opacity: 0.6,
        //   },
        // }}
        defaultZoom={5}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
      {/* {getCsvData("all-states-history.csv")} */}
      {/* {console.log(data)} */}
    </div>
  );
};

export default SimpleMap;
