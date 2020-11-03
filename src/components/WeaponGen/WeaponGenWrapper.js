import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import data from './WeaponGenData'
import WeaponGenContainer from './WeaponGenContainer'
import CurrencyConvert from '../../Constants/CurrencyConv'

const WeaponGeneratorMain = (props) => {

//Random number to pull from weapon array
const indexKey = [Math.floor(Math.random() * data.length)]


return (

    <div>
    <WeaponGenContainer weaponData={data[indexKey]}/>
    <CurrencyConvert price={data[indexKey].cost} />
    </div>
    )
}

export default WeaponGeneratorMain