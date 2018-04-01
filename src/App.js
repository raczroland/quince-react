import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Layout from './components/Layout';
import { Provider } from "react-redux";
import store from "./store";

class App extends Component {
  render() {
    return (<Provider store={store}>
      <Layout />
    </Provider>);
  }
}

export default App;
