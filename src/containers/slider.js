import React, { Component } from 'react';
import Truncate from 'react-truncate';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { fetchHead } from '../actions';
const Slider = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        />
        <li data-target="#carouselExampleIndicators" data-slide-to="1" />
        <li data-target="#carouselExampleIndicators" data-slide-to="2" />
      </ol>
      <div className="carousel-inner" role="listbox">
        <div className="carousel-item active">
          <img className="d-block img-fluid" src="..." alt="First slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" src="..." alt="Second slide" />
        </div>
        <div className="carousel-item">
          <img className="d-block img-fluid" src="..." alt="Third slide" />
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Slider;
