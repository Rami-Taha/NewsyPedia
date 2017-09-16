import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Link } from 'react-router-dom';
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
      <div>
      <h3>News Search</h3>
      </div>
      <div class="w3-container w3-red">
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
      </div>
    );
  }
}
export default connect(null, { fetchNews })(SearchBar);
