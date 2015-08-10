var React = require('react');
var Router = require('react-router');

var Locator = React.createClass({
  mixins: [Router.Navigation],

  routeMap: function() {
    this.transitionTo('map');
  },

  render: function() {
    return (
      <div className="locator-icon" onClick={this.routeMap}>
        <i className="fa fa-map-marker"></i>
      </div>
    );
  }
});

module.exports = Locator;