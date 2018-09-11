import React, { Component } from 'react';
import 'leaflet';
import axios from 'axios';
import {LinearFunction, Graph} from 'leaflet-dvf';
import _ from 'underscore';
const flights = require("./flightData.json");
const airports = require("./usAirports.json");

//var flights=[];
// postCSS import of Leaflet's CSS
import 'leaflet/dist/leaflet.css';
// using webpack json loader we can import our geojson file like this
import geojson from 'json!./custom.geojson';
// import local components Filter and ForkMe
import Filter from './Filter';
import ForkMe from './ForkMe';

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

// array to store unique names of Brooklyn subway lines,
// this eventually gets passed down to the Filter component

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
		// axios.get('flightData.json').then(res => {
		// 	flights = res.data;
		// });

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

  filterFeatures(feature, layer) {
    // filter the subway entrances based on the map's current search filter
    // returns true only if the filter value matches the value of feature.properties.LINE
    const test = feature.properties.LINE.split('-').indexOf(
      this.state.subwayLinesFilter
    );
    if (this.state.subwayLinesFilter === '*' || test !== -1) {
      return true;
    }
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

    //map.addLayer(arcedPolyline);

    return L.circleMarker(latlng, markerParams);
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


		var options = {
			recordsField: null,
			locationMode: L.LocationModes.CUSTOM,
			fromField: 'airport1',
			toField: 'airport2',
			codeField: null,
			getLocation: this.getLocation,
			getEdge: L.Graph.EDGESTYLE.ARC,
			includeLayer: function (record) {
					return false;
			},
			getIndexKey: function (location, record) {
					return record.airport1 + '_' + record.airport2;
			},
			setHighlight: function (style) {
					style.opacity = 1.0;

					return style;
			},
			unsetHighlight: function (style) {
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
			onEachRecord: function (layer, record, location) {
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
	var airlineLookup = _.groupBy(flights, function (value) {
		return value.airline;
	})

	let count = 0;
	for (var key in airlineLookup) {

			if (key !== 'all') {
					// Create a graph layer that draws lines from the location in the fromField to the location in the toField.
					// In this case, we'll use a custom locationMode and implement the getLocation function to lookup the airport
					// location from the airport data we have available.
					var airportOptions = L.extend(options, {
							includeLayer: function (record) {
									return record.airline === key;
							}
					})

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
