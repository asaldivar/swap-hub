var React = require('react');
var Intro = require('./Intro');
var SwapTiles = require('./Swap-Tiles');

var Home = React.createClass({
  render: function() {
    return (
      <div className="content">
        <Intro />
        <SwapTiles />
      </div>
    );
  }
});

module.exports = Home;