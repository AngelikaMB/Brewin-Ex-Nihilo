import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import data from './WeaponGenData'
import WeaponGenContainer from './WeaponGenContainer'
import CurrencyConvert from '../Constants/CurrencyConv'

const WeaponGeneratorMain = (props) => {

const indexKey = [Math.floor(Math.random() * data.length)]

console.log(data[indexKey])
console.log(data[indexKey].cost)

return (

    <div>

    <WeaponGenContainer weaponData={data[indexKey]}/>
    <CurrencyConvert price={data[indexKey].cost} />   
    {/* I think this needs to be
     .mapped */}
    </div>

    )
}

export default WeaponGeneratorMain