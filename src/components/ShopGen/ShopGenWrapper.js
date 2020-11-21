import React from 'react'
import ShopGenContainer from './ShopGenContainer'


export default function ShopGen (props) {

const { edibleAdj, interestingWords, shopDesc, wordMod, Apothecary, Blacksmith, Foodstuffs, General, Husbandry, Lifestyle, MagicalDevices, Tavern, Tourist, Travel} = props

//Shop name



return (

    <div>
    <ShopGenContainer edibleAdj={edibleAdj} interestingWords={interestingWords} shopDesc={shopDesc} wordMod={wordMod} Apothecary={Apothecary} Blacksmith={Blacksmith} Foodstuffs={Foodstuffs} General={General} Husbandry={Husbandry} Lifestyle={Lifestyle} MagicalDevices={MagicalDevices} Tavern={Tavern} Tourist={Tourist} Travel={Travel}/>
    </div>
    )
}

