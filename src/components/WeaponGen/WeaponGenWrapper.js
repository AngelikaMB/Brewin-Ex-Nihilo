import React from 'react'
import WeaponGenContainer from './WeaponGenContainer'

export default function WeaponGeneratorMain(props) {

const { weaponData, brand } = props

//Random number to pull from weapon array
const indexKey = [Math.floor(Math.random() * weaponData.length)]
const brandPick = [Math.floor(Math.random() * brand.length)]

return (

    <div>
    <WeaponGenContainer weaponData={weaponData[indexKey]} price={weaponData[indexKey].cost} brand={brand[brandPick]}/>
    </div>
    )
}