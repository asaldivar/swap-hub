var React = require('react');
var Router = require('react-router');

var SwapTile = React.createClass({
  getInitialState: function() {
    return {
      swaps: ['Rose Bowl Flea Market', 'Long Beach SoCal Cycle Swap', 'Alexs Bar Record Swap']
    }
  },

  render: function() {
    var swaps = this.state.swaps;

    return (
    <div className="swap-tiles-container">
      { swaps.map(() => {return <div className="swap-tile"></div>}) }
    </div>
    );
  }
})

module.exports = SwapTile;