var React = require('react');
var Router = require('react-router');

var Map = React.createClass({
  mixins: [Router.Navigation, Router.State],

  render: function() {
    return (
      <div id="map-canvas" style={{width: '100%', height: '100%'}}>
      </div>
    );
  },

  componentDidMount: function() {
    var location = this.getParams().location;
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({address: String(location)}, function(results, status) {
      if(status === google.maps.GeocoderStatus.OK) {
        console.log('everything is ok');
        var lat = results[0].geometry.location.lat(),
            lng = results[0].geometry.location.lng();
        var center = {
          lat: lat,
          lng: lng
        };

        var mapOptions = {
          center: center,
          zoom: 15
        };
        var map = new google.maps.Map(document.getElementById('map-canvas'),
            mapOptions);
      } else {
        console.log('Google maps could not find location');
      }
    });
  }
});

module.exports = Map;