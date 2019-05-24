import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css';

import store from './store'
import Alert from './components/layout/Alert'
import Navbar from './components/layout/Navbar'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <section className="container">
            <Alert />
          </section>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App;
