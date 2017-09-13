import React, { Component } from 'react';
import { connect } from 'react-redux';
class NewsList extends Component {
  renderNews(article) {
    const articleT = article.title;
    const imgUrl = article.urlToImage;

    return (
      <li key={articleT} className="media my-4">
        <div className="vedio-list media ">
          <div className="media-left">
            <img
              className="d-flex mr-3 rounded"
              src={imgUrl}
              height="200"
              width="200"
            />
          </div>

          <div className="media-body">
            <div className="media-heading">
              <h5 className="mt-0 mb-1">{articleT}</h5>
            </div>
            <hr />
            <div>{article.description}</div>
            <br />
            <div>{article.source.name}</div>
            <div>
              <a className="btn btn-primary" href={article.url} role="button">
                Read More...
              </a>
            </div>
          </div>
        </div>
      </li>
    );
    // this.renderNews = this.renderNews.bind(this);
  }
  render() {
    return (
      <ul className="col-md-12 list-group">
        {this.props.newsfeed.map(this.renderNews)}
      </ul>
    );
  }
}
function mapStateToProps({ newsfeed }) {
  return { newsfeed };
}
export default connect(mapStateToProps)(NewsList);
