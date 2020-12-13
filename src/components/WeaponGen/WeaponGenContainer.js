import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import CurrencyDis from '../../Constants/CurrencyConv'
import Dragon from '../../Assets/questionDragon'

//Styles
const WeaponCard = styled.div`
    display: ${pr => pr.theme.display.display};
    flex-direction: ${pr => pr.theme.display.flexCol};
    text-align:  ${pr => pr.theme.display.center};
    background:  ${pr => pr.theme.colors.background};
    color:  ${pr => pr.theme.colors.text};
    border: ${pr => pr.theme.border.style} ${pr => pr.theme.border.size} ${pr => pr.theme.colors.primary};
    border-radius:  ${pr => pr.theme.border.rounded};
    width: 20%;
`
const WeaponHeader = styled.div`
    display: ${pr => pr.theme.display.display};
    font-size: ${pr => pr.theme.text.size.DesktopAvg};
    border-bottom: ${pr => pr.theme.border.style} ${pr => pr.theme.border.size} ${pr => pr.theme.colors.primary};
`
const WeaponBrand = styled.div`
    border-bottom: ${pr => pr.theme.border.style} ${pr => pr.theme.border.size} ${pr => pr.theme.colors.primary};
`

const WeaponBody = styled.div`
    border-bottom: ${pr => pr.theme.border.style} ${pr => pr.theme.border.size} ${pr => pr.theme.colors.primary};
`

const WeaponCurse = styled.div`
    border-bottom: ${pr => pr.theme.border.style} ${pr => pr.theme.border.size} ${pr => pr.theme.colors.primary};
`

export default function WeaponGen(props) {

    const { weaponData, price, brand } = props;

//Slices of state
const [weapon, setWeapon] = useState({})

// const pickWeapon = weaponData.find(weapon => {
//     return setWeapon(weapon === indexKey)



function dieSize(props) {
  return Function(`'use strict'; return (${props.weaponData.dieSize}${props.brand.dieSizeMod})`)()
}

function dieNum(props) {
  return Function(`'use strict'; return (${props.weaponData.numOfDie}${props.brand.dieNumMod})`)()
}

function conversionDieSize(props) {
  return Function(`'use strict'; return (${props.weaponData.conversionDieSize}${props.brand.dieSizeMod})`)()
}

function conversionDieNum(props) {
  return Function(`'use strict'; return (${props.weaponData.conversionNumOfDie}${props.brand.dieNumMod})`)()
}

//The net has a save DC to modify. The string needs to be split, updated save DC inserted, string conatenated, and then returned.
function saveDC(props) {
  return Function(`'use strict'; return (${props.weaponData.saveDC}${props.brand.saveDC})`)()
}


// })

       return ( 
        <WeaponCard>
            <WeaponHeader>
                <h2>{weaponData.name}</h2>
            </WeaponHeader>
            {brand ? 
            <WeaponBrand>
            <p>{brand.name}</p>
            <Dragon width={35} height={35}/>
{/* 
Kindred = Roll on the brand table again, anything but Kindred. Do not display the name, but pull the modifiers except price which should remain as Kindred. */}


            </WeaponBrand>
            : ''}
            <WeaponBody>
                <p>{weaponData.size} {weaponData.proficiency} {weaponData.type}</p>
                {weaponData.name === 'Net' || weaponData.name === 'Blowgun' ? 
                <p>Damage: {weaponData.damage} {weaponData.damageType}</p> 
                : <p>Damage: {dieNum(props)}d{dieSize(props)} {weaponData.damageType}</p>}
                {weaponData.conversionNumOfDie ? 
                <p>{weaponData.conversion} {conversionDieNum(props)}d{conversionDieSize(props)} {weaponData.damageType} </p>
                : ''}
                {weaponData.ammunition ?
                <p>Ammunition: {weaponData.ammunition}</p>
                : ''}
                <h3>Attributes:</h3>
                <p>{weaponData.details}</p>
                {weaponData.range ? <p>Range: {weaponData.range}</p> : ''}
                <p>{weaponData.misc}</p>
                <p>{weaponData.weight} lbs</p>
            </WeaponBody>
            <WeaponCurse>
                <h3>Curse of Named.</h3>
                <p>This curse pastes Lorem Ipsum. This curse pastes Lorem Ipsum. This curse pastes Lorem Ipsum. This curse pastes Lorem Ipsum.</p>
            </WeaponCurse>
            <CurrencyDis price={price} brand={brand}/>
        </WeaponCard>
       )
}
