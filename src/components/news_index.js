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
        <div key={source.id} className="row col-md-6 col-lg-4">
          <div className="card ">
            <h3 className="card-header">{source.name}</h3>
            <div className="card-block">
              <h4 className="card-title">{source.category}</h4>
              <p className="card-text">{source.description}</p>
              <a href={source.url} className="btn btn-primary">
                Go
              </a>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <h3>News Sources</h3>
        <div className="container">{this.renderSources()}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { sources: state.sources };
}

export default connect(mapStateToProps, { fetchSources })(NewsIndex);
