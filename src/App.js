var React = require('react');

var App = React.createClass({
  render: function() {
    return (
      <div>
        Hello Friends
      </div>
    )
  }
});

React.render(<App />, document.getElementById('app'));