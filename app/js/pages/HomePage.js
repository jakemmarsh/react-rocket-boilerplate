/**
 * @jsx React.DOM
 */
'use strict';

var React = require('react/addons');
var Link  = React.createFactory(require('react-router').Link);

var HomePage = React.createClass({

  propTypes: {
    updatePageTitle: React.PropTypes.func
  },

  componentDidMount: function() {
    this.props.updatePageTitle('Home');
  },

  render: function() {
    return (
      <section className="home-page">

        <div>
          Home
        </div>

        <div>
          <Link to="Search">Search</Link>
        </div>

      </section>
    );
  }

});

module.exports = React.createFactory(HomePage);