import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
// import { Router } from 'react-router';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Pages/Home';
import Web from './Pages/Web';
import Contacts from './Pages/Contacts';
import Blog from './Pages/Blog';
import Footer from './Components/Footer';

function App() {
  return (
    <div className="page">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/web" component={Web} />
          <Route path="/contacts" component={Contacts} />
          <Route path="/blog" component={Blog} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
