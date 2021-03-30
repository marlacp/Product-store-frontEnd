import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Product from './Products/Product';
import {Footer} from './Footer/Footer';
import '../assets/styles/App.css'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Product} />
        {/* <Route component={NotFound} /> */}
      </Switch>
      <Footer />
    </BrowserRouter>

  );
}

export default App;
