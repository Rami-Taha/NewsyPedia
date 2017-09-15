import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchHead } from '../actions';

class HeadNews extends Component {
  componentDidMount() {
    this.props.fetchHead();
    console.log(this.props.articles);
  }

  render() {
    return <div>Hello</div>;
  }
}

function mapStateToProps(state) {
  return { articles: state.articles };
}
export default connect(mapStateToProps, { fetchHead })(HeadNews);
