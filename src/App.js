import React from 'react'
// import { route, link } from 'react-router-dom'
import BlacksmithShopGen from './components/BlacksmithShopGen/BSShopGenWrapper'
// import brandData from './Constants/BrandData'
import edibleAdj from '../src/Constants/EdibleAdjectives'
import Apothecary from '../src/Constants/ApothecaryData'
import Foodstuffs from '../src/Constants/Foodstufs'
import General from '../src/Constants/GeneralData'
import Husbandry from '../src/Constants/HusbandryData'
import Lifestyle from '../src/Constants/Lifestyle'
import MagicalDevices from '../src/Constants/MagicalDevicesData'
import Tavern from '../src/Constants/TavernData'
import Tourist from '../src/Constants/TouristAndCivicData'
import Travel from '../src/Constants/TransportationData'


export default function App() {


return (
    <div className="app">
      <header className="app-header">
      <BlacksmithShopGen />
      </header>
    </div>
  )
};