var React = require('react');
var Main = require('../components/Main');
var Home = require('../components/Home');
var Map = require('../components/Map');
var Router = require('react-router');
var DefaultRoute = Router.DefaultRoute;
var Route = Router.Route;

module.exports = (
  <Route name="app" path="/" handler={Main}>
    <Route name="map" path="store-locator" handler={Map} />
    <DefaultRoute name="home" handler={Home} />
  </Route>
);