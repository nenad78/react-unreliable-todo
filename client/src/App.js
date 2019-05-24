import React, { Fragment, useEffect } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import './App.css';

import store from './store'

const App = () => {
  return (
    <Provider store={store}>
    
    </Provider>
  )
}

export default App;
