var React = require('react');

var Home = React.createClass({
  render: function() {
    return (
      <div className="swap-tiles-container">
        <div className="swap-tile"></div>
        <div className="swap-tile"></div>
        <div className="swap-tile"></div>
      </div>
    )
  }
});

module.exports = Home;