import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <header>
      <nav classNameN="navbar navbar-inverse navbar-primary navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
              aria-expanded="false"
            >
              <span className="sr-only">Menu</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a className="navbar-brand" href="#">
              <span className="" aria-hidden="true">
                NewsyPedia
              </span>
            </a>
          </div>
          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav">
              <li>
                <Link className="btn btn-primary-sm" to="/">
                  Today Headlines
                </Link>
              </li>
              <li>
                {' '}
                <Link className="btn btn-primary-sm" to="/search">
                  Search Top News
                </Link>
              </li>
              <li>
                <Link className="btn btn-primary-sm" to="/index">
                  News Directory
                </Link>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a href="#">Sign In</a>
              </li>
              <li>
                <a href="#">Account</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
