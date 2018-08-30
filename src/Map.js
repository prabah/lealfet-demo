import React, { Component } from 'react';
import L from 'leaflet';
import '../node_modules/leaflet-dvf/examples/data/usAirports.js';
import '../node_modules/leaflet-dvf/examples/data/flightData.js';
//import '../node_modules/leaflet-dvf/dist/leaflet-dvf.js';
//import 'leaflet-dvf';
import 'leaflet/dist/leaflet.css';
import 'leaflet-dvf/dist/css/dvf.css';
import geojson from 'json!./custom.geojson';
import arc from 'arc';

// store the map configuration properties in an object,
// we could also move this to a separate file & import it if desired.
let config = {};
config.params = {
  center: [20.0, 5.0]
};
config.tileLayer = {
  uri: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  params: {
    minZoom: 2,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    id: '',
    accessToken: ''
  }
};

// config.tileLayer = L.tileLayer.provider('Stamen.TonerLite', {
//   minZoom: 2,
//   zIndex: 1
// });

// array to store unique names of Brooklyn subway lines,
// this eventually gets passed down to the Filter component

let flights = [
  {
    airline: 'AA',
    airport1: 'DFW',
    airport2: 'SJU',
    cnt: '120'
  }
];

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      tileLayer: null,
      geojsonLayer: null,
      geojson: null,
      subwayLinesFilter: '*',
      numEntrances: null
    };
    this._mapNode = null;
  }

  componentDidMount() {
    // code to run just after the component "mounts" / DOM elements are created
    // we could make an AJAX request for the GeoJSON data here if it wasn't stored locally
    this.getData();
    // create the Leaflet map object
    if (!this.state.map) this.init(this._mapNode);
  }

  componentDidUpdate(prevProps, prevState) {
    // code to run when the component receives new props or state
    // check to see if geojson is stored, map is created, and geojson overlay needs to be added
    if (this.state.geojson && this.state.map && !this.state.geojsonLayer) {
      // add the geojson overlay
      this.addGeoJSONLayer(this.state.geojson);
    }

    // check to see if the subway lines filter has changed
    // if (this.state.subwayLinesFilter !== prevState.subwayLinesFilter) {
    //   // filter / re-render the geojson overlay
    //   this.filterGeoJSONLayer();
    // }
  }

  componentWillUnmount() {
    // code to run just before unmounting the component
    // this destroys the Leaflet map object & related event listeners
    this.state.map.remove();
  }

  getData() {
    // could also be an AJAX request that results in setting state with the geojson data
    // for simplicity sake we are just importing the geojson data using webpack's json loader
    this.setState({
      numEntrances: geojson.features.length,
      geojson
    });
  }

  updateMap(e) {
    let subwayLine = e.target.value;
    // change the subway line filter
    if (subwayLine === 'All lines') {
      subwayLine = '*';
    }
    // update our state with the new filter value
    this.setState({
      subwayLinesFilter: subwayLine
    });
  }

  addGeoJSONLayer(geojson) {
    // create a native Leaflet GeoJSON SVG Layer to add as an interactive overlay to the map
    // an options object is passed to define functions for customizing the layer
    const geojsonLayer = L.geoJson(geojson, {
      onEachFeature: this.onEachFeature,
      pointToLayer: this.pointToLayer
    });
    // add our GeoJSON layer to the Leaflet map object
    geojsonLayer.addTo(this.state.map);
    // store the Leaflet GeoJSON layer in our component state for use later
    this.setState({ geojsonLayer });
    // fit the geographic extent of the GeoJSON layer within the map's bounds / viewport
    this.zoomToFeature(geojsonLayer);
  }

  filterGeoJSONLayer() {
    // clear the geojson layer of its data
    this.state.geojsonLayer.clearLayers();
    // re-add the geojson so that it filters out subway lines which do not match state.filter
    this.state.geojsonLayer.addData(geojson);
    // fit the map to the new geojson layer's geographic extent
    this.zoomToFeature(this.state.geojsonLayer);
  }

  zoomToFeature(target) {
    // pad fitBounds() so features aren't hidden under the Filter UI element
    var fitBoundsParams = {
      paddingTopLeft: [200, 10],
      paddingBottomRight: [10, 10]
    };
    // set the map's center & zoom so that it fits the geographic extent of the layer
    //this.state.map.fitBounds(target.getBounds(), fitBoundsParams);
  }

  pointToLayer(feature, latlng) {
    // renders our GeoJSON points as circle markers, rather than Leaflet's default image markers
    // parameters to style the GeoJSON markers
    var markerParams = {
      radius: 4,
      fillColor: 'orange',
      color: '#fff',
      weight: 1,
      opacity: 0.5,
      fillOpacity: 0.8
    };

    return L.circleMarker(latlng, markerParams);
  }

  init(id) {
    if (this.state.map) return;
    // this function creates the Leaflet map object and is called after the Map component mounts
    let map = L.map(id, {
      center: [20.0, 5.0],
      minZoom: 3,
      zoom: 2
    });

    //L.control.zoom({ position: "bottomleft"}).addTo(map);
    //L.control.scale({ position: "bottomleft"}).addTo(map);

    // a TileLayer is used as the "basemap"
    const tileLayer = L.tileLayer(
      config.tileLayer.uri,
      config.tileLayer.params
    ).addTo(map);

    let start = { x: -0.46, y: 52 };
    let end = { x: -92.57, y: 37 };
    let generator = new arc.GreatCircle(start, end, { name: 'Seattle to DC' });
    let line = generator.Arc(100, { offset: 10 });

    L.geoJson(line.json(), {
      color: '#ff0000'
    }).addTo(map);

    // var graphDataLayer = new L.Graph(flights, options);
    // map.addLayer(graphDataLayer, options);

    // let latlang = [
    //   [[17.385044, -75.486671], [16.506174, 80.648015], [17.686816, 83.218482]],
    //   [[13.08268, 80.270718], [12.971599, 77.594563], [15.828126, 78.037279]]
    // ];
    // let multiPolyLineOptions = { color: 'red' };
    // let multipolyline = L.multiPolyline(latlang, multiPolyLineOptions);

    map.fitWorld({ animate: false });
    // set our state to include the tile layer
    this.setState({ map, tileLayer });
  }

  render() {
    return (
      <div id="mapUI">
        <div ref={node => (this._mapNode = node)} id="map" />
      </div>
    );
  }
}

export default Map;
