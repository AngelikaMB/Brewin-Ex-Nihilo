import React from 'react'
import interestingWords from '../../Constants/InterestingWords'
import interestingWordMod from '../../Constants/InterestingWordMod'
import shopDesc from '../../Constants/ShopDesc'
import Blacksmith from '../../Constants/BlacksmithData'
import BlacksmithSuf from '../../Constants/BlacksmithSufData'
import weaponData from '../../Constants/WeaponGenData'
import brandData from '../../Constants/BrandData'
import ShopKeepWrap from './ShopKeepWrap'
import WeaponGeneratorMain from '../WeaponGen/WeaponGenWrapper'
import styled from 'styled-components'

//Styles
const ShopGenLayout = styled.div`
    display: ${pr => pr.theme.display.flexCol};
    justify-content: ${pr => pr.theme.display.center};
    align-content: ${pr => pr.theme.display.center};
    text-align:  ${pr => pr.theme.display.center};
    width: 100% !important;
`

export default function ShopGen () {

//import ShopKeepWrap
//import EconWrap
//import DiscountWrap
//import WeaponGenerator
//import ArmorGenerator


return (

    <ShopGenLayout>
    <ShopKeepWrap interestingWords={interestingWords} shopDesc={shopDesc} wordMod={interestingWordMod} Blacksmith={Blacksmith} BlacksmithSuf={BlacksmithSuf}/>
    <WeaponGeneratorMain weaponData={weaponData} brandData={brandData}/>
    </ShopGenLayout>
    )
}

