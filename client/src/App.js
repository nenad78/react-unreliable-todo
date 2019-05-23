import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css';

import store from './store'

import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            
            <Switch>
              
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App;
