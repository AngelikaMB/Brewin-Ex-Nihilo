import React from 'react';
import CurrencyDisplay from '../components/CurrencyDisplay';

export default function CurrencyConvert(props) {


const { price } = props

let plat = 0
let gold = 0
let silver = 0
let copper = 0

//Divides price by breakpoints and assigns value to individual const
let conversion  = (price) => {
const x = price
const platDiv = 1000
const goldDiv = 100
const silvDiv = 10
let quo1 = 0
let quo2 = 0

return (
plat = Math.floor(x / platDiv),
quo1 = x % platDiv,
gold = Math.floor(quo1 / goldDiv),
quo2 = x % goldDiv,
silver = Math.floor(quo2 / silvDiv),
copper = x % silvDiv
)};

conversion(price)

        return <CurrencyDisplay plat={plat} gold={gold} silver={silver} copper={copper}/>
}