import React from 'react';
import GoldCoin from '../Assets/Goldencoin'
import PlatCoin from '../Assets/platinumCoin'
import SilvCoin from '../Assets/Silvercoin'
import CopCoin from '../Assets/bronzecoin'
import Dragon from '../Assets/questionDragon'
import styled from 'styled-components'

//Styles
const CoinWrapper = styled.div`
    display: ${pr => pr.theme.display.disCol};
`
const CoinDisplay = styled.div`
    display: ${pr => pr.theme.display.disFlex};
    justify-content: space-around;
    align-items: center;
    padding: ${pr => pr.theme.padding.none}, ${pr => pr.theme.padding.small};
`

export default function CurrencyConvert(props) {

const { price, brand } = props

let plat = 0
let gold = 0
let silver = 0
let copper = 0

//Calculates all cost modifiers and divides total by breakpoints
let conversion  = (price) => {

function x() {
    if(brand.name === 'Echroel') {
       return (
           Math.ceil(price * brand.cost)+100000)
    }
    return(
        Math.ceil(price * brand.cost))
}

const platDiv = 1000
const goldDiv = 100
const silvDiv = 10
let quo1 = 0
let quo2 = 0

return (
plat = Math.floor(x() / platDiv),
quo1 = x() % platDiv,
gold = Math.floor(quo1 / goldDiv),
quo2 = x() % goldDiv,
silver = Math.floor(quo2 / silvDiv),
copper = x() % silvDiv
)};

conversion(price)

    return (
        <CoinWrapper>
         <Dragon width={35} height={35} alt='stylistic dragon'/>
            <CoinDisplay>
                <PlatCoin width={25} height={25} alt='platinum coin' />
                <p>{plat}</p>
                <GoldCoin width={25} height={25} alt='golden coin' />
                <p>{gold}</p>
                <SilvCoin width={25} height={25} alt='silver coin' />
                <p>{silver}</p>
                <CopCoin width={25} height={25} alt='copper coin' />
                <p>{copper}</p>
            </CoinDisplay>
        </CoinWrapper>
    )
}