import React from 'react'
import ReactDOM from 'react-dom'
// import {BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import App from './App'
import { ThemeProvider } from 'styled-components'
import Theme from '../src/Theme/Theme'

ReactDOM.render (

<ThemeProvider theme={Theme}>
<App /> 
</ThemeProvider>

, document.getElementById('root')
);