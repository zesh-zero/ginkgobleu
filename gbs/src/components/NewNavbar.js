import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo_md.png';
import { StyledButton } from './Button';
import styled from 'styled-components';
import { Button } from 'bootstrap';

export default class Navbar extends Component {
    render() {
        return (
          <section>
            <Link to='/'>
              <img className="navbar-logo-img" src={logo} alt="Ginkgo Bleu" />
            </Link>

            <hr className='hr-mobile' />

            {/*Navbar*/}
            <nav className="navbarCustom">
              <div className='navbar-dropdown-section'>
              <button className='navbar-dropdown'>
                  Men
                  <div className='navbar-dropdown-content'>
                  <ul className='navbar-link'><Link to='/wallets' className='navbar-link text-capitalize'>wallets</Link></ul>
                  <ul className='navbar-link'><Link to='/belts' className='navbar-link text-capitalize'>belts</Link></ul>
                  <ul className='navbar-link'><Link to='/satchels' className='navbar-link text-capitalize'>satchels</Link></ul>
                  <ul className='navbar-link'><Link to='/portfolios' className='navbar-link text-capitalize'>portfolios</Link></ul>
                  </div>
                </button>
                <button className='navbar-dropdown'>
                  Women
                  <div className='navbar-dropdown-content'>
                  <ul className='navbar-link'><Link to='/purses' className='navbar-link'>purses</Link></ul>
                  <ul className='navbar-link'><Link to='/belts' className='navbar-link'>Belts</Link></ul>
                  <ul className='navbar-link'><Link to='/portfolios' className='navbar-link'>portfolios</Link></ul>
                  </div>
                </button>
                <button className='navbar-dropdown'>
                  Backpacks
                  <div className='navbar-dropdown-content'>
                  <ul className='navbar-link'><Link to='/purses' className='navbar-link'>purses</Link></ul>
                  <ul className='navbar-link'><Link to='/belts' className='navbar-link'>Belts</Link></ul>
                  <ul className='navbar-link'><Link to='/portfolios' className='navbar-link'>portfolios</Link></ul>
                  </div>
                </button>
                <button className='navbar-dropdown'>
                  Purses
                  <div className='navbar-dropdown-content'>
                  <ul className='navbar-link'><Link to='/purses' className='navbar-link'>purses</Link></ul>
                  <ul className='navbar-link'><Link to='/belts' className='navbar-link'>Belts</Link></ul>
                  <ul className='navbar-link'><Link to='/portfolios' className='navbar-link'>portfolios</Link></ul>
                  </div>
                </button>
                <button className='navbar-dropdown'>
                  Belts
                  <div className='navbar-dropdown-content'>
                  <ul className='navbar-link'><Link to='/purses' className='navbar-link'>purses</Link></ul>
                  <ul className='navbar-link'><Link to='/belts' className='navbar-link'>Belts</Link></ul>
                  <ul className='navbar-link'><Link to='/portfolios' className='navbar-link'>portfolios</Link></ul>
                  </div>
                </button>
                <button className='navbar-dropdown'>
                  Wallets
                  <div className='navbar-dropdown-content'>
                  <ul className='navbar-link'><Link to='/purses' className='navbar-link'>purses</Link></ul>
                  <ul className='navbar-link'><Link to='/belts' className='navbar-link'>Belts</Link></ul>
                  <ul className='navbar-link'><Link to='/portfolios' className='navbar-link'>portfolios</Link></ul>
                  </div>
                </button>
                <button className='navbar-dropdown'>
                  More
                  <div className='navbar-dropdown-content'>
                  <ul className='navbar-link'><Link to='/purses' className='navbar-link'>purses</Link></ul>
                  <ul className='navbar-link'><Link to='/belts' className='navbar-link'>Belts</Link></ul>
                  <ul className='navbar-link'><Link to='/portfolios' className='navbar-link'>portfolios</Link></ul>
                  </div>
                </button>
    
                <Link className='navbar-dropdown' to='/'>
                  About Us
                </Link>
              </div>

              {/* Navbar right */}
              <Link to='/cart' className='navbar-right'>
                    <button className='navbar-cart-btn'>
                      <span className='me-2'>
                        <i className='fas fa-cart-plus' />
                      </span>
                        my cart
                    </button>
                </Link>       
            </nav>

            {/* <div className='navbar-logo-container'>
              <img className="navbar-logo-img" src={logo} alt="Ginkgo Bleu" />
            </div>      */}
          </section>
        )
    }
}