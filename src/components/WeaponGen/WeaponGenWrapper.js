import React, { useState } from 'react'
// import data from './WeaponGenData'
import WeaponGenContainer from './WeaponGenContainer'
import CurrencyConvert from '../../Constants/CurrencyConv'

export default function WeaponGeneratorMain(props) {

const { currency, weaponData } = props

//Random number to pull from weapon array
const indexKey = [Math.floor(Math.random() * weaponData.length)]


return (

    <div>
    <WeaponGenContainer weaponData={weaponData[indexKey]} currency={currency}/>
    <CurrencyConvert price={weaponData[indexKey].cost} />
    </div>
    )
}