import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNews } from '../actions/index';
class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }
  onInputChange(event) {
    this.setState({ term: event.target.value });
  }
  onFormSubmit(event) {
    event.preventDefault();
    //fetch news data here
    this.props.fetchNews(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="input-group">
        <input
          placeholder="Search your all favorites news here"
          className="form-control"
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-primary">
            search
          </button>
        </span>
      </form>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNews }, dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);
