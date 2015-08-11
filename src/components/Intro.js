var React = require('react');
var Router = require('react-router');

var Intro = React.createClass({
  mixins: [Router.Navigation],

  findSwap: function() {
    var location = React.findDOMNode(this.refs.location).value

    this.transitionTo('map', {location: location})
  },

  render: function() {
    return (
      <div className="intro-tile">
        <h2 className="intro-motto"> Be the first to discover the new old. </h2>

        <input type="text" placeholder="Where do you want to go?" ref="location" />
        <input type="submit" value="Search" onClick={this.findSwap}/>
      </div>
    );
  }
});

module.exports = Intro;