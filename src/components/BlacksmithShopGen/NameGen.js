import React from 'react'
import Ancestry from '../../Constants/AncestryData'
import GermanicVowel from '../../Constants/GermanicSingleVowel'
import GermanicCon from '../../Constants/GermanicSingleCon'
import GermanicConVow from '../../Constants/GermanicConVowel'
import GermanicVowCon from '../../Constants/GermanicVowelCon'
import GermanicDblCon from '../../Constants/GermanicDblCon'
import GermanicDblVowel from '../../Constants/GermanicDblVowel'
import GermanicConVowel from '../../Constants/GermanicConVowel'

export default function NameGen() {

const racePick = Math.floor(Math.random() * Ancestry.length)

//Pick a dataset by index.
// const chosenAncestry = (Ancestry[racePick].Type)  <------------- BRING THIS BACK!! COMMENTED OUT FOR TESTING PURPOSES ONLY. -------------->

//Individual Rule Sets
const germanicVowelCon = [GermanicVowel, GermanicCon]
const germanicConVow = [GermanicConVow, GermanicVowCon]
const germanicDblCon = [GermanicDblCon]
const germanicDblVow = [GermanicDblVowel]
const germanicEnd = [GermanicCon]
const germanicAll = [germanicVowelCon, germanicConVow, germanicDblCon, germanicDblVow]
//Rule Set Collections



// -------------------- Testing -----------------------

const syllChoice = []
const generatedFirstName = [' ']
let pickArray;
let pickArrayAll;
let chosenArray;
let chosenArrayAll;
let sylSelector;
let sylSelectorAll;
let chosenSyll;
let chosenSyllAll;
let pickSyll;
let pickSyllAll;


function setGermanicAllPicker(array) {
            //randomizes based on parent.length
            pickArrayAll = Math.floor(Math.random() * array.length)
            //randomizes based on child-parent array.length
            chosenArrayAll = Math.floor(Math.random() * array[pickArrayAll].length)
            //randomizes based on child array.length
            sylSelectorAll = Math.floor(Math.random() * array[chosenArrayAll].length)
            //finalizes child array
            chosenSyllAll = array[chosenArrayAll][sylSelectorAll]
            //randomizes based on syllable array.length
            pickSyllAll = Math.floor(Math.random() * chosenSyllAll.length)
            //pushes chosen syllable to name
            return generatedFirstName.push(chosenSyllAll[pickSyllAll])
}

function setGermanicRulePicker(array) {
            //randomizes based on parent.length
            pickArray = Math.floor(Math.random() * array.length)
            //randomizes based on child array.length
            chosenArray = Math.floor(Math.random() * array[pickArray].length)
            //finalizes child array
            chosenSyll = array[pickArray][chosenArray]
            //pushes chosen syllable to name
            return generatedFirstName.push(chosenSyll)
}

setGermanicRulePicker(germanicVowelCon)
setGermanicRulePicker(germanicConVow)
setGermanicAllPicker(germanicAll)
setGermanicRulePicker(germanicVowelCon)
setGermanicRulePicker(germanicEnd)

// -------------------- Testing -----------------------



// ------------- Titlecase Convertor ----------------

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

// function selectNamingConvention(){

// //Decide how many syllables are in this name
// const dragonbornSyll = Math.floor(Math.random() * 2)

// //The number of construction insutrctions in any given name cannot be fewer than 1 or exceed 9 steps.
// const numOfSyllArray = [0,1,2,3,4,5,6,7,8]

// // //Randomize which sound gets pulled from the selected syllables array
// // const sylSelector = Math.floor(Math.random() * syllChoice.length)








// //compare the number of syllables to the step number of numOfSyllArray by iteration. Perform specified instructions on case-by-case basis.
// //   if(chosenAncestry === 'Dragonborn'){
// //       for (let i = 0; i < dragonbornSyll; i++) {
// //       console.log(`This is i-->`, i)
// //       console.log(`This is dragonbornSyll -->`, dragonbornSyll)
// //             if (i === numOfSyllArray[0])
// //                 namingSyllables.push(
// //                     germanicVowelCon[Picker(germanicVowelCon)][Math.floor(Math.random() * (germanicVowelCon[Picker(germanicVowelCon)]).length)])
// //                 generatedName.push(namingSyllables[SylSelector])
// //             if (i < dragonbornSyll)
// //                 return
// //         }}

//         // if(dragonbornSyll < 9) 
      
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
     
// }
// selectNamingConvention();

const capitalNames = generatedFirstName.toString().split(',').join('')
console.log(capitalNames)
// console.log(`This is the current step selection -->`, namingSyllables)
// console.log(`This is the completed name -->`, generatedName)

    return (
        <div>
        <p>Shopkeep: {titleize(capitalNames)}</p>
        </div>
    )
}