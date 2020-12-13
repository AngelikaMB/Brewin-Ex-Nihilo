import React from 'react'
import styled from 'styled-components'


//Styles



export default function ShopNameGen(props) {

const { edibleAdj, interestingWords, shopDesc, wordMod, Apothecary, Blacksmith, Foodstuffs, General, Husbandry, Lifestyle, MagicalDevices, Tavern, Tourist, Travel } = props

//generate random index for each dataset
const ediblePick = [Math.floor(Math.random() * edibleAdj.length)]
const wordPick = [Math.floor(Math.random() * interestingWords.length)]
const descPick = [Math.floor(Math.random() * shopDesc.length)]
const modPick = [Math.floor(Math.random() * wordMod.length)]
const ApoPick = [Math.floor(Math.random() * Apothecary.length)]
const BSPick = [Math.floor(Math.random() * Blacksmith.length)]
const GenPick = [Math.floor(Math.random() * General.length)]
const AnimalsPick = [Math.floor(Math.random() * Husbandry.length)]
const FoodPick = [Math.floor(Math.random() * Foodstuffs.length)]
const LifePick = [Math.floor(Math.random() * Lifestyle.length)]
const MagicPick = [Math.floor(Math.random() * MagicalDevices.length)]
const InnPick = [Math.floor(Math.random() * Tavern.length)]
const TourPick = [Math.floor(Math.random() * Tourist.length)]
const TravelPick = [Math.floor(Math.random() * Travel.length)]

//select words from array based on desired store type
const generic = `The ${wordMod[modPick]} ${interestingWords[wordPick]}`
const randomShopType = `${wordMod[modPick]} ${shopDesc[descPick]}`
const food = `The ${edibleAdj[ediblePick]} ${Foodstuffs[FoodPick]}`
const potions = `${wordMod[modPick]} ${Apothecary[ApoPick]}`
const smity = `${wordMod[modPick]} ${Blacksmith[BSPick]}`
const generalGoods = `${wordMod[modPick]} ${General[GenPick]}`
const animal = `${wordMod[modPick]} ${Husbandry[AnimalsPick]}`
const lifestyles = `${wordMod[modPick]} ${Lifestyle[LifePick]}`
const magic = `${wordMod[modPick]} ${MagicalDevices[MagicPick]}`
const tavern = `${wordMod[modPick]} ${Tavern[InnPick]}`
const tour = `${wordMod[modPick]} ${Tourist[TourPick]}`
const travelling = `${wordMod[modPick]} ${Travel[TravelPick]}`

    return (
        <div>
            <p>The {smity}</p>
        </div>
    )
}