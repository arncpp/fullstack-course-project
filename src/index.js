import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/base.css';
import './css/reset.css';
import './fonts/Caros/stylesheet.css'

import Header from './Header'
import Home from './Home'
import Games from './Games'
import Developers from './Developers'
import ContactUs from './ContactUs'
import Footer from './Footer'

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <Home />
    <Games />
    <Developers />
    <ContactUs />
    <Footer />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
