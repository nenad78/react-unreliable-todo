import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css';

import store from './store'
import Alert from './components/layout/Alert'
import Navbar from './components/layout/Navbar'
import Landing from './components/layout/Landing'
import Todos from './components/todos/Todos'
import Sessions from './components/sessions/Sessions'
import PrivateRoute from './components/routing/PrivateRoute'

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
              <PrivateRoute exact path="/todos" component={Todos} />
              <Route exact path="/sessions" component={Sessions} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
  )
}

export default App
