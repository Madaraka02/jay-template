import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './Header';
import Checkout from './Checkout';
import Home from './Home';
import Shop from './Shop';
import Footer from './Footer';
import Slides from './Slides';
import MaleClothes from './MaleClothes';
import Payment from './Payment';
import FemaleClothes from './FemaleClothes';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/payment">
          <Header/>
          <Payment/>
          </Route>
          <Route path="/checkout">
          <Header/>
            <Checkout />
          </Route>
          <Route path="/Shop">
            <Header/>
          <Shop/>
          <Footer/>
          </Route>
          <Route path="/MaleClothes">
            <Header/>
          <MaleClothes/>
          <Footer/>
          </Route>
          <Route path="/FemaleClothes">
            <Header/>
          <FemaleClothes/>
          <Footer/>
          </Route>
          <Route path="/Slides">
            <Header/>
          <Slides/>
          <Footer/>
          </Route>
          <Route path="/">
            <Header/>
          <Home/>
          <Footer/>
          </Route>
        </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
