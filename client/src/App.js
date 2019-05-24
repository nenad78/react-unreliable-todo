import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css';

import store from './store'
import Alert from './components/layout/Alert'

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <section className="container">
            <Alert />
          </section>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App;
