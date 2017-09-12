import React, { Component } from 'react';
import { connect } from 'react-redux';
class NewsList extends Component {
  renderNews(newsData) {
    const articleT = newsData.articles.title;
    return (
      <tr key={articleT}>
        <td>{articleT}</td>
      </tr>
    );
    this.renderNews = this.renderNews.bind(this);
  }
  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>Title</th>
            <th>urlToImage</th>
            <th>description</th>
            <th>url</th>
            <th>publishdate</th>
            <th>source</th>
          </tr>
        </thead>
        <tbody>{this.props.newsfeed.map(this.renderNews)}</tbody>
      </table>
    );
  }
}
function mapStateToProps({ newsfeed }) {
  return { newsfeed };
}
export default connect(mapStateToProps)(NewsList);
