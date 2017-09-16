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
      <div key={articleT} className="row flex col-lg-4 col-md-6">
        <div className="card ">
          <img
            className="card-img-top rounded mx-auto d-block"
            src={imgUrl}
            alt="Card image cap"
            width="300"
            height="200"
            href={article.url}
          />
          <div className="card-block">
            <h6 className="card-title">{articleT}</h6>
            <Truncate lines={4}>
              <p className="card-text text-justify">{article.description}</p>
            </Truncate>
            <a href={article.url} className="btn btn-primary-sm">
              More..
            </a>
            <p>{article.publishedAt}</p>
          </div>
        </div>
      </div>
    );
    // this.renderNews = this.renderNews.bind(this);
  }

  render() {
    console.log(this.props.articles);
    return (
      <div className="container-fluid">
        <h4 className="text-center  text-danger">Today Top Headlines</h4>
        {this.props.articles.map(this.renderNews)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { articles: state.articles };
}
export default connect(mapStateToProps, { fetchHead })(HeadNews);
