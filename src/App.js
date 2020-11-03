import React from 'react'
// import { route, link } from 'react-router-dom'
import WeaponGenContainer from './Components/WeaponGen/WeaponGenContainer'
import WeaponGeneratorMain from './components/WeaponGen/WeaponGenWrapper'
import weaponData from './Components/WeaponGen/WeaponGenData'
import CurrencyConv from './Constants/CurrencyConv'



export default function App() {


return (
    <div className="app">
      <header className="app-header">
      <WeaponGeneratorMain weaponData={weaponData}/>
      </header>
    </div>
  )
};