import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHead } from '../actions';

class HeadNews extends Component {
  componentDidMount() {
    this.props.fetchHead();
    console.log(this.props.heads);
  }
  render() {
    return <div>Hello</div>;
  }
}
export default connect(null, { fetchHead })(HeadNews);
