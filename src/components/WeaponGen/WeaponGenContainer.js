import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'



const WeaponCard = styled.div`
    display: ${pr => pr.theme.display.display};
    font-size: ${pr => pr.theme.text.size.DesktopAvg};
`


export default function WeaponGen(props) {

const {weaponData} = props

const [weapon, setWeapon] = useState({})

const indexKey = [Math.floor(Math.random() * props.weaponData.length)]

       return ( 
        <WeaponCard>
            <h1>Weapon: {props.weaponData[indexKey].name}</h1>
            <p>Type: {props.weaponData[indexKey].size} {props.weaponData[indexKey].type}</p>
            <p>Damage: {props.weaponData[indexKey].damage} {props.weaponData[indexKey].damageType}</p>
            <p>Ammunition: {props.weaponData[indexKey].ammunition}</p>
            <p>Conversion: {props.weaponData[indexKey].conversion}</p>
            <p>Attributes: {props.weaponData[indexKey].details}</p>
            <p>{props.weaponData[indexKey].misc}</p>
            <p>Weight: {props.weaponData[indexKey].weight} lbs</p>
            <p>Cost: {props.weaponData[indexKey].cost}</p>
        </WeaponCard>
       )
}
/*
I want to take
weaponData.length and return a random number between 1 and length.

That return will become the id of the object inside the array. 

Display the matching object as a card with all of the given details filled out, taking into account any empty values.


*/
