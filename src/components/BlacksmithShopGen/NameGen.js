import React from 'react'
import Ancestry from '../../Constants/AncestryData'
import GermanicVowel from '../../Constants/GermanicSingleVowel'
import GermanicCon from '../../Constants/GermanicSingleCon'
import GermanicConVow from '../../Constants/GermanicConVowel'
import GermanicVowCon from '../../Constants/GermanicVowelCon'
import GermanicDblCon from '../../Constants/GermanicDblCon'
import GermanicDblVowel from '../../Constants/GermanicDblVowel'
import Virtues from '../../Constants/Virtues'

export default function NameGen() {

const racePick = Math.floor(Math.random() * Ancestry.length)

//Pick a dataset by index.
// const chosenAncestry = (Ancestry[racePick].Type)  <------------- BRING THIS BACK!! COMMENTED OUT FOR TESTING PURPOSES ONLY. -------------->

//Rule Set Collections
const germanicVowelCon = [GermanicVowel, GermanicCon]
const germanicConVow = [GermanicConVow, GermanicVowCon]
const germanicDblCon = [GermanicDblCon]
const germanicDblVow = [GermanicDblVowel]
const germanicEnd = [GermanicCon]


const germanicVow = [GermanicVowel, GermanicVowCon, GermanicDblVowel]
const germanicCon = [GermanicCon, GermanicConVow, GermanicDblCon]
const germanicAll = [germanicVowelCon, germanicConVow, germanicDblCon, germanicDblVow]


// -------------------- Testing -----------------------

const generatedLastName = [' ']
let pickArray;
let pickArrayAll;
let chosenArray;
let chosenArrayAll;
let sylSelectorAll;
let chosenSyll;
let chosenSyllAll;
let pickSyllAll;


function setGermanicAllPicker(array) {
            //randomizes based on parent.length
            pickArrayAll = Math.floor(Math.random() * array.length)
            //randomizes based on child-parent.length
            chosenArrayAll = Math.floor(Math.random() * array[pickArrayAll].length)
            //randomizes based on child array.length
            sylSelectorAll = Math.floor(Math.random() * array[chosenArrayAll].length)
            //finalizes child array
            chosenSyllAll = array[chosenArrayAll][sylSelectorAll]
            //randomizes based on syllable array.length
            pickSyllAll = Math.floor(Math.random() * chosenSyllAll.length)
            //pushes chosen syllable to name
            return generatedLastName.push(chosenSyllAll[pickSyllAll])
}

function setGermanicRulePicker(array) {
            //randomizes based on parent.length
            pickArray = Math.floor(Math.random() * array.length)
            //randomizes based on child array.length
            chosenArray = Math.floor(Math.random() * array[pickArray].length)
            //finalizes child array
            chosenSyll = array[pickArray][chosenArray]
            //pushes chosen syllable to name
            return generatedLastName.push(chosenSyll)
}

function titleize(str) {
    let upper = true
    let newStr = ""
    for (let i = 0, l = str.length; i < l; i++) {
        if (str[i] == " ") {
            upper = true
            newStr += str[i]
            continue
        }
        newStr += upper ? str[i].toUpperCase() : str[i].toLowerCase()
        upper = false
    }
    return newStr
}

const chosenAncestry = 'Dragonborn'

function selectNamingConvention(){

//Decide how many syllables are in this name
const dragonbornSyll = Math.ceil(Math.random() * 9)

//The number of construction insutrctions in any given name cannot be fewer than 1 or exceed 9 steps.
const numOfSyllArray = [0,1,2,3,4,5,6,7,8]

//For loop following greatest number of syllables possible.
let i;
for (i = 0; i < numOfSyllArray.length; i++) {
    
const vowels = /['aeiouAEIOU']/

chosenAncestry === 'Dragonborn' ? 
    dragonBornLastName() : ''
function dragonBornLastName(){
console.log(dragonbornSyll)

function stepOne() {
    i < dragonbornSyll ?
    setGermanicRulePicker(germanicConVow) : ''
    stepTwo
}
stepOne()

const stepTwo = () => {
    if (i < dragonbornSyll && generatedLastName.length-1 === vowels)
    setGermanicRulePicker(germanicCon) 
    if (i < dragonbornSyll && !generatedLastName.length-1 === vowels)
     setGermanicRulePicker(germanicVow)
    else (i >= dragonbornSyll)
    (setGermanicRulePicker(germanicEnd))
}
}
}

//     // else if(chosenAncestry === 'Elf')
//     //     return subAncestryPick.push(
//     //     `${ElfData[elfPick]}`,
//     // )
//     // else if(chosenAncestry === 'Half-Elf')
//     //     return subAncestryPick.push(
//     //     `${ElfData[elfPick]}`,
//     // )
//     // else if(chosenAncestry === 'Dwarf')
//     // return subAncestryPick.push(
//     // `${DwarfData[dwarfPick]}`,
//     // )
//     // else if(chosenAncestry === 'Halfling')
//     // return subAncestryPick.push(
//     // `${HalflingData[halflingPick]}`,
//     // )
//     // else if(chosenAncestry === 'Gnome')
//     // return subAncestryPick.push(
//     // `${GnomeData[gnomePick]}`,
//     // )
 }

selectNamingConvention();

const capitalNames = generatedLastName.toString().split(',').join('')
    return (
        <div>
        <p>Shopkeep: {titleize(capitalNames)}</p>
        </div>
    )
}