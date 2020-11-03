import React from 'react';
import GoldCoin from '../Assets/Goldencoin'
import PlatCoin from '../Assets/platinumCoin'
import SilvCoin from '../Assets/Silvercoin'
import CopCoin from '../Assets/bronzecoin'
import styled from 'styled-components'

//Styles
const CoinDisplay = styled.div`
    display: ${pr => pr.theme.display.disFlex};
    justify-content: space-around;
    align-items: center;
`

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

    return (
            <CoinDisplay>
                <PlatCoin width={25} height={25} alt='platinum coin' />
                <p>{plat}</p>
                <GoldCoin width={25} height={25} alt='golden coin' />
                <p>{gold}</p>
                <SilvCoin width={25} height={25} alt='silver coin' />
                <p>{silver}</p>
                <CopCoin width={25} height={25} alt='golden coin' />
                <p>{copper}</p>
            </CoinDisplay>
    )
}