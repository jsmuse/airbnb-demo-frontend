import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Landing from './Landing/';
import Header from './Header';
import Homes from './Homes';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div className="App">
            <Header />
            <Route path="/" exact component={Landing} />
            <Route path="/homes" exact component={Homes} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
