import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './nav.css';

class Nav extends Component {
  state = {};
  render() {
    return (
      <div className='navigation'>
        <input
          type='checkbox'
          className='navigation__checkbox'
          id='navi-toggle'
        />

        <label for='navi-toggle' className='navigation__button'>
          <span className='navigation__icon' />
        </label>

        <div className='navigation__background' />

        <nav className='navigation__nav'>
          <ul className='navigation__list'>
            <li className='navigation__item'>
              {' '}
              <Link className='navigation__link'  to="/">01 Home</Link>
              {/* <a href='#' className='navigation__link'>
                <span>01</span>
              </a> */}
            </li>
            <li className='navigation__item'>
              {' '}
              <Link to="/Products" className='navigation__link'>
                <span>02</span> Products
              </Link>
            </li>
            <li className='navigation__item'>
              {' '}
              <Link to="/Blogs" className='navigation__link'>
                <span>03</span> Blogs
              </Link>
            </li>
            <li className='navigation__item'>
              {' '}
              <a href='#' className='navigation__link'>
                <span>04</span>About Me
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Nav;