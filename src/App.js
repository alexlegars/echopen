import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import HomePage from './pages/home';
import Layout from './layout/layout';
import './App.css';
import './css/app.css'

export default class App extends React.Component {


  render() {
    return (
        <div>
            <Redirect from="/" to="/home"/>
            <Route path="/" component={Layout}/>
            <Route path="/home" exact component={HomePage}/>
        </div>
    );
  }
}

