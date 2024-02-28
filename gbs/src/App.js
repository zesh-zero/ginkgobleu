import React, { Component } from 'react';
import { Route, Routes, json } from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProductList from './components/ProductList';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';
import Modal from './components/Modal';
import Footer from './components/Footer';
import About from './components/About';
import Handbags from './components/Handbags';
import NewNavbar from './components/NewNavbar';

function App() {
  return (
   <div className='app'>

    <NewNavbar />

    <Routes>
      <Route exact path="/" Component={ProductList} />
      <Route path="/handbags" Component={Handbags} />
      <Route path="/details" Component={Details} />
      <Route path="/about" Component={About} />
      <Route path="/cart" Component={Cart} />
      <Route path="*" Component={Default} />
    </Routes>

    <Modal />

    <Footer className='footerBar'/>
   </div>
  );
}

export default App;
