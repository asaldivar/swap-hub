var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Locator = require('./header/Locator');

var Main = React.createClass({
  mixins: [Router.Navigation],

  routeHome: function() {
    this.transitionTo('home');
  },

  render: function(){
    return (
      <div className="wrapper">

        <header>
          <a href="#" className="menu-icon">
            <i className="fa fa-bars"></i>
          </a>

          <h1 className="app-name" onClick={this.routeHome}>
            SWAP
          </h1>

          <Locator />
        </header>

        <RouteHandler />

      </div>
    )
  }
});

module.exports = Main;