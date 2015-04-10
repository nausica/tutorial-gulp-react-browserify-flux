
var React = require('react');
var Child = require('./Child');

var Parent = React.createClass({
  render: function(){
  	console.log('render');
    return (
      <div>
        <div> This is the parent. </div>
        <Child name="child"/>
      </div>
    )
  }
});
module.exports = Parent;