import React from 'react'
// import { route, link } from 'react-router-dom'
import WeaponGeneratorMain from './components/WeaponGen/WeaponGenWrapper'
import weaponData from './Components/WeaponGen/WeaponGenData'
import currencyConv from './Constants/CurrencyConv'



export default function App() {


return (
    <div className="app">
      <header className="app-header">
      <WeaponGeneratorMain weaponData={weaponData}/>
      </header>
    </div>
  )
};