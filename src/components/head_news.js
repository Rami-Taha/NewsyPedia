import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHead } from '../actions';
import Truncate from 'react-truncate';
import { Link } from 'react-router-dom';

class HeadNews extends Component {
  componentDidMount() {
    this.props.fetchHead();
  }
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
            <Truncate lines={3}>
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
    console.log(this.props.articles);
    return (
      <div className="container">
        <h1>Top Today Headlines News </h1>
        {this.props.articles.map(this.renderNews)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { articles: state.articles };
}
export default connect(mapStateToProps, { fetchHead })(HeadNews);
