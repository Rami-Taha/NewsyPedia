import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchSources } from '../actions';

class NewsIndex extends Component {
  componentDidMount() {
    this.props.fetchSources();
  }
  renderSources() {
    return _.map(this.props.sources, source => {
      return (
        <li key={source.id} className="list-group-item">
          {source.name}
        </li>
      );
    });
  }
  render() {
    return (
      <div>
        <h3>News Sources</h3>
        <ul className="list-group">{this.renderSources()}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { sources: state.sources };
}

export default connect(mapStateToProps, { fetchSources })(NewsIndex);
