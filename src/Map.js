import React, { Component } from 'react';
import 'leaflet';
import { LinearFunction, Graph } from 'leaflet-dvf';
import _ from 'underscore';
const flights = require('./flightData.json');
const airports = require('./usAirports.json');
import 'leaflet/dist/leaflet.css';
// using webpack json loader we can import our geojson file like this
import geojson from 'json!./custom.geojson';
var Filter = require('./Filter');

// store the map configuration properties in an object,
// we could also move this to a separate file & import it if desired.
let config = {};
let subwayLines = [];

config.params = {
  center: [20.0, 5.0]
};
config.tileLayer = {
  uri: '',
  params: {
    minZoom: 2,
    attribution:
      '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    id: '',
    accessToken: ''
  }
};

// array to store unique names of Brooklyn subway lines,
// this eventually gets passed down to the Filter component

class MapsSelection extends Component {
  constructor(props) {
    super(props);
   
  }
	state = {
    options: [
      {
        name: 'Select…',
        value: null,
      },
      {
        name: 'A',
        value: 'a',
      },
      {
        name: 'B',
        value: 'b',
      },
      {
        name: 'C',
        value: 'c',
      },
    ],
    value: '?',
    tileUri: ''
  };

  onFieldChange(event) {
    // for a regular input field, read field name and value from the event
    const fieldValue = event.target.value;
    this.props.onChange(this.state.tileUri, fieldValue);
}

  render() {
    const { options, value } = this.state;

    return (
        <select onChange={this.onFieldChange.bind(this)}>
          {options.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
    );
  }

}

class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      map: null,
      tileLayer: null,
      geojsonLayer: null,
      geojson: null,
      tileUri: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    };
    this._mapNode = null;
  }

  componentDidMount() {
    // code to run just after the component "mounts" / DOM elements are created
    // we could make an AJAX request for the GeoJSON data here if it wasn't stored locally
    this.getData();
    debugger;
    // create the Leaflet map object
    if (!this.state.map) this.init(this._mapNode);
  }

  componentDidUpdate(prevProps, prevState) {
    // code to run when the component receives new props or state
    // check to see if geojson is stored, map is created, and geojson overlay needs to be added
    if (this.state.geojson && this.state.map && !this.state.geojsonLayer) {
      // add the geojson overlay
      //this.addGeoJSONLayer(this.state.geojson);
    }
  }

  onChange(value) {
    debugger;
    // parent class change handler is always called with field name and value
    this.state = {
      map: null,
      tileLayer: null,
      geojsonLayer: null,
      geojson: null,
      tileUri: value,
    };
    let map = L.map("XX", {
      center: [20.0, 5.0],
      minZoom: 3,
      zoom: 2
    });
    const tileLayer = L.tileLayer(
      this.state.tileUri,
      config.tileLayer.params
    ).addTo(map);
}

  componentWillUnmount() {
    // code to run just before unmounting the component
    // this destroys the Leaflet map object & related event listeners
    this.state.map.remove();
  }

  getInitialState() {
    return {
      tileUri: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    };
  }

  getData() {
    this.setState({
      tileUri: "http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      geojson : null
    });
  }

  updateMap(e) {
    let subwayLine = e.target.value;
    // change the subway line filter
    if (subwayLine === 'All lines') {
      subwayLine = '*';
    }
  }

  getLocation(context, locationField, fieldValues, callback) {
    let key = fieldValues[0];
    var airportsLookup = L.GeometryUtils.arrayToMap(airports, 'code');
    let airport = airportsLookup[key];
    let location;

    if (airport) {
      var latlng = new L.LatLng(Number(airport.lat), Number(airport.lon));

      location = {
        location: latlng,
        text: key,
        center: latlng
      };
    }

    return location;
  }

  init(id) {
    this.getInitialState();
    if (this.state.map) return;
    // this function creates the Leaflet map object and is called after the Map component mounts
    let map = L.map(id, {
      center: [20.0, 5.0],
      minZoom: 3,
      zoom: 2
    });
    console.log(this.state.tileUri);
    const tileLayer = L.tileLayer(
      this.state.tileUri,
      config.tileLayer.params
    ).addTo(map);

    var options = {
      recordsField: null,
      locationMode: L.LocationModes.CUSTOM,
      fromField: 'airport1',
      toField: 'airport2',
      codeField: null,
      getLocation: this.getLocation,
      getEdge: L.Graph.EDGESTYLE.ARC,
      includeLayer: function(record) {
        return false;
      },
      getIndexKey: function(location, record) {
        return record.airport1 + '_' + record.airport2;
      },
      setHighlight: function(style) {
        style.opacity = 1.0;

        return style;
      },
      unsetHighlight: function(style) {
        style.opacity = 0.5;

        return style;
      },
      layerOptions: {
        //					dashArray: "15, 15",
        fill: false,
        opacity: 1.0,
        weight: 1.5,
        fillOpacity: 1.0,
        distanceToHeight: new L.LinearFunction([0, 20], [1000, 300]),

        //The starting and ending percentages (0 - 1) along the line at which to position control points
        //controlPointOffsets: new L.Point(0.2, 0.2),

        // Q or C for quadratic or cubic bezier
        mode: 'C',
        markers: {
          end: false
        },

        animatePath: {
          property: 'stroke-dashoffset',
          duration: '1.5s',
          timingFunction: 'ease-in-out'
        }
      },
      legendOptions: {
        width: 200,
        numSegments: 5,
        className: 'legend-line'
      },
      tooltipOptions: {
        iconSize: new L.Point(80, 64),
        iconAnchor: new L.Point(-5, 64),
        className: 'leaflet-div-icon line-legend'
      },
      displayOptions: {
        cnt: {
          // weight: new L.LinearFunction([0, 1], [100, 14]),
          color: new L.HSLHueFunction([0, 200], [200, 230], {
            outputLuminosity: '60%'
          }),
          displayName: 'Flights'
        }
      },
      onEachRecord: function(layer, record, location) {
        //layer.bindPopup($(L.HTMLUtils.buildTable(record)).wrap('<div/>').parent().html());

        location.location.animateLine({
          duration: Math.random() * 5000 + 500,
          easing: L.AnimationUtils.easingFunctions.easeOut
        });
      }
    };

    var allLayer = new L.Graph(flights, options);
    map.addLayer(allLayer);

    var layerControl = L.control.layers().addTo(map);
    var airlineLookup = _.groupBy(flights, function(value) {
      return value.airline;
    });

    let count = 0;
    for (var key in airlineLookup) {
      if (key !== 'all') {
        // Create a graph layer that draws lines from the location in the fromField to the location in the toField.
        // In this case, we'll use a custom locationMode and implement the getLocation function to lookup the airport
        // location from the airport data we have available.
        var airportOptions = L.extend(options, {
          includeLayer: function(record) {
            return record.airline === key;
          }
        });

        var flightLayer = new L.Graph(flights, airportOptions);

        layerControl.addOverlay(flightLayer, key);

        if (count === 0) {
          // Add the layers we want to display to the legend
          // Since all group lines use the same weight and color scales, just add the first layer to the legend
          //legendControl.addLayer(flightLayer);
          // Add each layer to the map
          //map.addLayer(flightLayer);
        }
        count++;
      }
    }

    map.fitWorld({ animate: false });
    // set our state to include the tile layer
    //this.setState({ map, tileLayer });
  }

  render() {
    return (
      <div id="mapUI">
      <MapsSelection onChange={this.onChange.bind(this)}/>
        <div ref={node => (this._mapNode = node)} id="map"/>
      </div>
    );
  }
}

export default Map;
