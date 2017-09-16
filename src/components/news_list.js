import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Truncate from 'react-truncate';
import { fetchNews } from '../actions';
class NewsList extends Component {
  renderNews(article) {
    const articleT = article.title;
    const imgUrl = article.urlToImage;
    return (
      <div key={articleT} className="row col-sm-6 col-md-4 ">
        <div className="card-deck">
          <img
            className="card-img-top"
            src={imgUrl}
            alt="Card image cap"
            width="318"
            height="180"
            href={article.url}
          />
          <div className="card-block">
            <h6 className="card-title">{articleT}</h6>
            <Truncate lines={5}>
              <p className="card-text">{article.description}</p>
            </Truncate>
            <a href={article.url} className="btn btn-primary-sm">
              More...
            </a>
          </div>
        </div>
      </div>
    );
    // this.renderNews = this.renderNews.bind(this);
  }
  render() {
    return (
      <div className="container">
        {this.props.newsfeed.map(this.renderNews)}
      </div>
    );
  }
}
function mapStateToProps({ newsfeed }) {
  return { newsfeed };
}
export default connect(mapStateToProps, { fetchNews })(NewsList);
