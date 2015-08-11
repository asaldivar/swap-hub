var React = require('react');
var Router = require('react-router');

var SwapTile = React.createClass({
  // route to individual swap page
  // which has map, lists of vendors
  // and skinny rectangle between with description of swap
  // and directions link
  mixins: [Router.Navigation],

  getInitialState: function() {
    return {
      swaps: [{name:'Rose Bowl Flea Market'}, {name:'Long Beach SoCal Cycle Swap'}, {name:'Alex\'s Bar Record Swap'}]
    }
  },

  goToSwap: function() {

  },

  render: function() {
    var swaps = this.state.swaps;

    return (
    <div className="swap-tiles-container" onClick={this.goToSwap}>
      { swaps.map((swap, i) => {
        return <div key={i} className="swap-tile"><div className="swap-name"> {swap.name} </div></div>
        })
      }
    </div>
    );
  }
})

module.exports = SwapTile;