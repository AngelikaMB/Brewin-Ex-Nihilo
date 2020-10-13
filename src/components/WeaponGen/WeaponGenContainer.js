import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import GoldCoin from '../../Assets/Goldencoin.svg'
import CurrencyConv from '../Constants/CurrencyConv'


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

const WeaponCost = styled.div`
    display: ${pr => pr.theme.display.disInlineFlex};
    width: 20%;
    justify-content: space-between;

`
export default function WeaponGen(props) {

const [weapon, setWeapon] = useState({})

const indexKey = [Math.floor(Math.random() * props.weaponData.length)]

       return ( 
        <WeaponCard>
            <WeaponHeader>
                <h2>{props.weaponData[indexKey].name}</h2>
            </WeaponHeader>
            <WeaponBrand>
            <p>Echroel.</p>
            </WeaponBrand>
            <WeaponBody>
                <p>Type: {props.weaponData[indexKey].size} {props.weaponData[indexKey].type}</p>
                <p>Damage: {props.weaponData[indexKey].damage} {props.weaponData[indexKey].damageType}</p>
                <p>Ammunition: {props.weaponData[indexKey].ammunition}</p>
                <h3>Attributes:</h3>
                <p>{props.weaponData[indexKey].details}</p>
                <p>{props.weaponData[indexKey].conversion}</p>
                <p>{props.weaponData[indexKey].misc}</p>
                <p>{props.weaponData[indexKey].weight} lbs</p>
            </WeaponBody>
            <WeaponCurse>
                <h3>Curse of Named.</h3>
                <p>This curse pastes Lorem Ipsum. This curse pastes Lorem Ipsum. This curse pastes Lorem Ipsum. This curse pastes Lorem Ipsum.</p>
            </WeaponCurse>
            <WeaponCost>
            <GoldCoin width={30} height={30} alt='golden coin' />
                <p>{props.weaponData[indexKey].cost}</p>
            </WeaponCost>
        </WeaponCard>
       )
}
/*
I want to take
weaponData.length and return a random number between 1 and length.

That return will become the id of the object inside the array. 

Display the matching object as a card with all of the given details filled out, taking into account any empty values.


*/
