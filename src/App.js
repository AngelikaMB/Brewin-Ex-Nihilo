import React from 'react'
// import { route, link } from 'react-router-dom'
import WeaponGenContainer from './Components/WeaponGen/WeaponGenContainer'
import weaponData from './Components/WeaponGen/WeaponGenData'
import CurrencyConv from './components/Constants/CurrencyConv'
import axios from 'axios'


export default function App() {
return (
    <div className="app">
      <header className="app-header">
      <WeaponGenContainer weaponData={weaponData} />
      <CurrencyConv />
      </header>
    </div>
)
};