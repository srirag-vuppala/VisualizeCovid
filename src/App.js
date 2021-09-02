import "./App.css";
import Map from "./Map";
import React from "react";
import Papa from "papaparse";

function cleanUp(data) {
  //parse
  let newData = [];
  for (let i = 1; i < data.length; i++) {
    console.log('lat', data[i][1], 'lng', data[i][2])
    newData.push({
      lat: data[i][1],
      lng: data[i][2],
    });
  }
  console.log("hi new data");
  console.log(newData);
  return newData;
}

function App() {
  const [data, SetData] = React.useState();
  const [heatMapData, SetHeatMapData] = React.useState({
    positions: [
      { lat: 55.5, lng: 34.56 },
      { lat: 34.7, lng: 28.4 },
      { lat: 34.7, lng: 28.4 },
      { lat: 34.7, lng: 28.4 },
      { lat: 37.0902, lng: -95.7129 },
      { lat: 37.0902, lng: -95.7129 },
      { lat: 37.0902, lng: -95.7129 },
      { lat: 37.0902, lng: -95.7129 },
      { lat: 37.0902, lng: -95.7129 },
    ],
    options: {
      radius: 20,
      opacity: 0.6,
    },
  });

  // const heatMapData =  {
  //     positions: cleanUp(data),
  //     options: {
  //       radius: 20,
  //       opacity: 0.6,
  //     },
  // };

  const setData = (result) => {
    SetData({ data: result.data });

    if (data !== null && data !== undefined) {
      SetHeatMapData({
        positions: cleanUp(data),
        // positions: data,
        options: {
          radius: 20,
          opacity: 0.6,
        },
      });
    }
  };

  const getCsvData = async (file) => {
    let csvData = await fetchCsv(file);

    Papa.parse(csvData, {
      complete: setData,
    });
  };

  const fetchCsv = (file) => {
    return fetch(file).then(function (response) {
      let reader = response.body.getReader();
      let decoder = new TextDecoder("utf-8");

      return reader.read().then(function (result) {
        return decoder.decode(result.value);
      });
    });
  };

  // React.useEffect(() => {
  //   getCsvData("statelatlong.csv");
  // }, []);

  let Component = () => {
    // getCsvData("statelatlong.csv")
    return <Map heatMapData={heatMapData} />;
  };

  return (
    <div className="App">
      <Component />
      {console.log(data)}
      {console.log(heatMapData)}
    </div>
  );
}

export default App;
