var React = require('react');

var NotFound = React.createClass({
  render: function() {
    return (
      <h1 className="error-page">Sorry, page doesn't exist :(</h1>
    );
  }
});

module.exports = NotFound;