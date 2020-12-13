import React from 'react'

export default function BlacksmithShopNameGen(props) {

const { interestingWords, shopDesc, wordMod, Blacksmith, BlacksmithSuf } = props

const shopNameArray = []

//Generates index from appropriate dataset.
const wordPick = [Math.floor(Math.random() * interestingWords.length)]
const descPick = [Math.floor(Math.random() * shopDesc.length)]
const modPick = [Math.floor(Math.random() * wordMod.length)]
const bSPick = [Math.floor(Math.random() * Blacksmith.length)]
const bSAddPick = [Math.floor(Math.random() * BlacksmithSuf.length)]

//Concatenate chosen datasets into naming convention and pushes to array.
function createShopNames(){
    return shopNameArray.push(
    `The ${wordMod[modPick]} ${Blacksmith[bSPick]}`,
    `The ${wordMod[modPick]} ${shopDesc[descPick]} `,
    `The ${wordMod[modPick]} ${interestingWords[wordPick]}`,
    `${wordMod[modPick]} ${Blacksmith[bSPick]} & ${BlacksmithSuf[bSAddPick]}`,
    `NPC's ${Blacksmith[bSPick]} & ${BlacksmithSuf[bSAddPick]}`)
}
createShopNames();

//Generates random index.
function namePick() {
return Math.floor(Math.random() * shopNameArray.length)
}

//Selects naming convention from array by randomized index.
const displayShopName = shopNameArray[namePick()]

    return (
        <div>
            <h2>{displayShopName}</h2>
        </div>
    )
}