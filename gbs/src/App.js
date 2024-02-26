import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './components/Footer';

import NewNavbar from './components/NewNavbar';

function App() {
  return (
   <div className='app'>
    {/* <Navbar /> */}

    <NewNavbar />

    <Routes>
      <Route exact path="/" Component={ProductList} />
      <Route path="/details" Component={Details} />
      <Route path="/cart" Component={Cart} />
      <Route path="*" Component={Default} />
    </Routes>

    <Modal />

    
    <Footer className='footerBar'/>
   </div>
  );
}

export default App;
