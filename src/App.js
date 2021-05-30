import React from 'react'
import './config/bootstrap'
import Header from './components/template/Header'
import Menu from './components/template/Menu'
import Content from './components/template/Content'
import Footer from './components/template/Footer'

import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'

export default class App extends React.Component{
  render(){
    return( 
      <div id='app'>
        <Router>
        <Header />
        <Menu />
        <Content />
        <Footer />
        </Router>
      </div>
    )
    }
}


