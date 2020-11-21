import React from 'react'
// import { route, link } from 'react-router-dom'
import WeaponGeneratorMain from './components/WeaponGen/WeaponGenWrapper'
import ShopGen from './components/ShopGen/ShopGenWrapper'
import weaponData from './Constants/WeaponGenData'
import brandData from './Constants/BrandData'



export default function App() {


return (
    <div className="app">
      <header className="app-header">
      <ShopGen/>
      <WeaponGeneratorMain weaponData={weaponData} brand={brandData}/>
      </header>
    </div>
  )
};