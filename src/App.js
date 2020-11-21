import React from 'react'
// import { route, link } from 'react-router-dom'
import WeaponGeneratorMain from './components/WeaponGen/WeaponGenWrapper'
import ShopGen from './components/ShopGen/ShopGenWrapper'
import weaponData from './Constants/WeaponGenData'
import brandData from './Constants/BrandData'
import edibleAdj from '../src/Constants/EdibleAdjectives'
import interestingWords from '../src/Constants/InterestingWords'
import interestingWordMod from '../src/Constants/InterestingWordMod'
import shopDesc from '../src/Constants/ShopDesc'
import Apothecary from '../src/Constants/ApothecaryData'
import Blacksmith from '../src/Constants/BlacksmithData'
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
      <ShopGen edibleAdj={edibleAdj} interestingWords={interestingWords} shopDesc={shopDesc} wordMod={interestingWordMod} Apothecary={Apothecary} Blacksmith={Blacksmith} Foodstuffs={Foodstuffs} General={General} Husbandry={Husbandry} Lifestyle={Lifestyle} MagicalDevices={MagicalDevices} Tavern={Tavern} Tourist={Tourist} Travel={Travel}/>
      <WeaponGeneratorMain weaponData={weaponData} brand={brandData}/>
      </header>
    </div>
  )
};