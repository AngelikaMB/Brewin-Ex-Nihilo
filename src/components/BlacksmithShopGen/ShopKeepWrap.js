import React from 'react'
import styled from 'styled-components'
import Sword from '../../Assets/sword.svg'
import BlacksmithShopNameGen from './BSShopNameGen'
import ProfileGen from './ProfileGen'



//Styles
const CardContainer = styled.div`
    width: 100%;
`
const ShopNameContainer = styled.div`
    text-align: ${pr => pr.theme.display.disInlineFlex};
    border: ${pr => pr.theme.border.style} ${pr => pr.theme.border.size} ${pr => pr.theme.colors.primary};
    border-radius:  ${pr => pr.theme.border.rounded};
    width: 30%;
    flex-grow: 1;
`
const NameDisplay = styled.div`
    flex: 2;
    h2 {
        font-weight: normal;
    }
`
const SwordDisplay = styled.div`
    flex: 1;
    margin: 3% 3% 0 0;
`

const NPCInfo = styled.div`
    h3, p {
        font-size: 1.2rem;
        font-weight: normal;
    }
    display: ${pr => pr.theme.display.flexCol};
`

const NPCNameDisplay = styled.div`
    display: ${pr => pr.theme.display.flex};
    margin: 3% 3% 0 0;
`

export default function ShopKeepWrap(props) {

    const { interestingWords, shopDesc, wordMod, Blacksmith, BlacksmithSuf } = props


    return (
        <CardContainer>
            <ShopNameContainer>
                <NameDisplay>
                <BlacksmithShopNameGen interestingWords={interestingWords} shopDesc={shopDesc} wordMod={wordMod} Blacksmith={Blacksmith} BlacksmithSuf={BlacksmithSuf}/>
                </NameDisplay>
                <SwordDisplay><Sword height={35} width={35}/></SwordDisplay>
                <NPCInfo>
                    <NPCNameDisplay>
                        <ProfileGen/>
                    </NPCNameDisplay>
                </NPCInfo>
            </ShopNameContainer>
        </CardContainer>
    )
}