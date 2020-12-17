import React from 'react'
import ReactDOM from 'react-dom'
// import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import App from './App'
import { ThemeProvider } from 'styled-components'
import Theme from '../src/Theme/Theme'
import { reducer } from './Reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)))

ReactDOM.render (
/* <Router> */
<Provider store={store}>
<ThemeProvider theme={Theme}>
<App /> 
</ThemeProvider>
</Provider>
, document.getElementById('root')
);