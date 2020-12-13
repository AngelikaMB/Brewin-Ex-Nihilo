import React from 'react'
import Sword from '../../Assets/sword.svg'
import ShopNameGen from '../../Constants/ShopNameGen'

export default function ShopGenContainer (props) {

const { edibleAdj, interestingWords, shopDesc, wordMod, Apothecary, Blacksmith, Foodstuffs, General, Husbandry, Lifestyle, MagicalDevices, Tavern, Tourist, Travel } = props


//Shop Description

//NPC name

//NPC Hometown

//Economic Breakdown

//Barter DC & Discounts

//Inventory Cards

    return (
        <div>
        <Sword height={35} width={35}/>
        <ShopNameGen edibleAdj={edibleAdj} interestingWords={interestingWords} shopDesc={shopDesc} wordMod={wordMod} Apothecary={Apothecary} Blacksmith={Blacksmith} Foodstuffs={Foodstuffs} General={General} Husbandry={Husbandry} Lifestyle={Lifestyle} MagicalDevices={MagicalDevices} Tavern={Tavern} Tourist={Tourist} Travel={Travel}/>
        </div>
    )
}