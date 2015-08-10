var React = require('react');
var RouteHandler = require('react-router').RouteHandler;

var Map = React.createClass({
  render: function() {
    return (
      <div id="map-canvas" style={{width: '100%', height: '100%'}}>
      </div>
    );
  },

  componentDidMount: function() {
    var mapOptions = {
      center: { lat: 33.7683, lng: -118.1956},
      zoom: 13
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);
  }
});

module.exports = Map;