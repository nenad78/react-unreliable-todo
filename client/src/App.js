import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css';

import store from './store'
import Alert from './components/layout/Alert'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Sessions from './components/sessions/Sessions'

import { loadSession } from './actions/session'
import setSessionId from './utils/setSession'

if (localStorage.sessionid) {
  setSessionId(localStorage.sessionid)
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadSession())
  }, [])

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Navbar />
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/sessions" component={Sessions} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App;
