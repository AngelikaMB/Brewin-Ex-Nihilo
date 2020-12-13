import React from 'react'
import NameFunc from './namingFunc'

class NameGen extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
        firstname: '',
        middlename: '',
        lastname: '',
        id: Date.now(),
        ancestry: props.ancestry,
        subAncestry: props.subAncestry,
        sex: props.sex,
        alignment: props.alignment
        }
    }

    componentDidMount = () => {
        }

    onChange = () => {
        this.setState({
            firstname: firstname.toString().split(',').join(''),
            middlename: middlename.toString().split(',').join(''),
            lastname: lastname.toString().split(',').join(''),
            id: Date.now()
        })
    }

    render() {
        if (this.state.firstname === '') {
        return(
            <div>
                <h3>Thinking up a name... </h3>
                <p>{this.props.sex} {this.props.subAncestry} {this.props.ancestry}</p>
                <p> Generally considered {this.props.alignment.toLowerCase()}.</p>
            </div>
        )} else
        return (
            <div>
                <NameFunc sex={this.props.sex} ancestry={this.state.ancestry} firstname={this.state.firstname} middlename={this.state.middlename} lastname={this.state.lastname} key={this.state.id}/>
                <p>{this.props.sex} {this.props.subAncestry} {this.props.ancestry}</p>
                <p> Generally considered {this.props.alignment.toLowerCase()}.</p>
            </div>
        )
    }
}

export default NameGen


































// import GermanicVowel from './GermanicSingleVowel'
// import GermanicCon from './GermanicSingleCon'
// import GermanicConVow from './GermanicConVowel'
// import GermanicVowCon from './GermanicVowelCon'
// import GermanicDblCon from './GermanicDblCon'
// import GermanicDblVowel from './GermanicDblVowel'
// import DwarfSurOne from './DwarfFamilyPre'
// import DwarfSurTwo from './DwarfFamilySuf'
// import Virtues from './Virtues'
// import RomanMale from './RomanMaleNames'
// import RomanFemale from './RomanFemaleNames'
// import LatinateConVowel from './LatinateConVowel'
// import LatinateDblCon from './LatinateDblCon'
// import LatinateDblVowel from './LatinateDblVowel'
// import LatinateSingleCon from './LatinateSingleCon'
// import LatinateVowlCon from './LatinateVowlCon'
// import LatinateSingleVowel from './LatinateSingleVowel'

// export default function NameGen() {

// const racePick = Math.floor(Math.random() * Ancestry.length)

// //Pick a dataset by index.
// // const chosenAncestry = (Ancestry[racePick].Type)  <------------- BRING THIS BACK!! COMMENTED OUT FOR TESTING PURPOSES ONLY. -------------->

// //<----------------------------- Rule Set Collections ------------------------------>

// //----- Latinate Syllables for Elves, Half-Elves, Human, Halflings, Tieflings,  Aasymar  --->

// const latinCon = [LatinateSingleCon, LatinateDblCon]
// const latinVow = [LatinateDblVowel]
// const latinVowelCon = [LatinateSingleCon, LatinateDblVowel]
// const latinConVow = [LatinateConVowel, LatinateVowlCon]
// const LatinDblCon = [LatinateDblCon]
// const latinDblVow = [LatinateDblVowel]
// const latinEnd = [LatinateSingleVowel]
// const latinAll = [latinCon, latinVow, latinConVow, latinEnd]

// // --- Germanic Syllables for Dragonborn, Orc, Dwarven, Gnome, Human, Half-Elf, Halflings, and Aasymar & Half-Orc --->

// const germanicCon = [GermanicCon, GermanicDblCon]
// const germanicVow = [GermanicVowel, GermanicDblVowel]
// const germanicVowelCon = [GermanicVowel, GermanicCon]
// const germanicConVow = [GermanicConVow, GermanicVowCon]
// const germanicDblCon = [GermanicDblCon]
// const germanicDblVow = [GermanicDblVowel]
// const germanicDbl = [GermanicDblCon, GermanicDblVowel]
// const germanicEnd = [GermanicCon]
// const germanicAll = [germanicVowelCon, germanicConVow, germanicDblCon, germanicDblVow]

// // Dwarven Surnames
// const dwarfSurnamePre = Math.floor(Math.random() * DwarfSurOne.length)
// const dwarfSurnameSuf = Math.floor(Math.random() * DwarfSurTwo.length)

// //Tiefling Names
// const tiefVirtue = Math.floor(Math.random() * Virtues.length)
// const tiefRomanFemale = Math.floor(Math.random() * RomanFemale.length)
// const tiefRomanMale = Math.floor(Math.random() * RomanMale.length)
// //<  ------------------------ Germanic First & Last name functions ------------------->

// const generatedFirstName = ['']
// const generatedMiddleName = ['']
// const generatedLastName = [' ']
// let pickArray;
// let pickArrayAll;
// let pickFNArray;
// let pickFNArrayAll;
// let chosenArray;
// let chosenArrayAll;
// let chosenFNArray;
// let chosenFNArrayAll;
// let sylSelectorAll;
// let chosenSyll;
// let sylFNSelectorAll;
// let chosenFNSyll;
// let chosenSyllAll;
// let pickSyllAll;
// let chosenFNSyllAll;
// let pickFNSyllAll;


// function setAllPickerFirstName(array) {
//             //randomizes based on parent.length
//             pickFNArrayAll = Math.floor(Math.random() * array.length)
//             //randomizes based on child-parent.length
//             chosenFNArrayAll = Math.floor(Math.random() * array[pickFNArrayAll].length)
//             //randomizes based on child array.length
//             sylFNSelectorAll = Math.floor(Math.random() * array[chosenFNArrayAll].length)
//             //finalizes child array
//             chosenFNSyllAll = array[chosenFNArrayAll][sylFNSelectorAll]
//             //randomizes based on syllable array.length
//             pickFNSyllAll = Math.floor(Math.random() * chosenFNSyllAll.length)
//             //pushes chosen syllable to name
//             return generatedFirstName.push(chosenFNSyllAll[pickFNSyllAll])
// }

// function setRulePickerFirstName(array) {
//             //randomizes based on parent.length
//             pickFNArray = Math.floor(Math.random() * array.length)
//             //randomizes based on child array.length
//             chosenFNArray = Math.floor(Math.random() * array[pickFNArray].length)
//             //finalizes child array
//             chosenFNSyll = array[pickFNArray][chosenFNArray]
//             //pushes chosen syllable to name
//             return generatedFirstName.push(chosenFNSyll)
// }

// function setRulePicker(array) {
//             //randomizes based on parent.length
//             pickArray = Math.floor(Math.random() * array.length)
//             //randomizes based on child array.length
//             chosenArray = Math.floor(Math.random() * array[pickArray].length)
//             //finalizes child array
//             chosenSyll = array[pickArray][chosenArray]
//             //pushes chosen syllable to name
//             return generatedLastName.push(chosenFNSyll)
// }

// function setAllPicker(array) {
//             //randomizes based on parent.length
//             pickArrayAll = Math.floor(Math.random() * array.length)
//             //randomizes based on child-parent.length
//             chosenArrayAll = Math.floor(Math.random() * array[pickArrayAll].length)
//             //randomizes based on child array.length
//             sylSelectorAll = Math.floor(Math.random() * array[chosenArrayAll].length)
//             //finalizes child array
//             chosenSyllAll = array[chosenArrayAll][sylSelectorAll]
//             //randomizes based on syllable array.length
//             pickSyllAll = Math.floor(Math.random() * chosenSyllAll.length)
//             //pushes chosen syllable to name
//             return generatedLastName.push(chosenSyllAll[pickSyllAll])
// }

// //<  ------------------------ End of Germanic First & Last name functions ------------------->

// //Maximum syllable length.
//         const numOfSyllArray = [0,1,2,3,4,5,6,7,8]

// //Generated names always capitalize first letter.
// function titleize(str) {
//     let upper = true
//     let newStr = ""
//     for (let i = 0, l = str.length; i < l; i++) {
//         if (str[i] == " ") {
//             upper = true
//             newStr += str[i]
//             continue
//         }
//         newStr += upper ? str[i].toUpperCase() : str[i].toLowerCase()
//         upper = false
//     }
//     return newStr
// }

// let chosenAncestry = 'Gnome'

// function selectNamingConvention(){

//     if(chosenAncestry === 'Dragonborn') {
//         dragonbornNaming()
//     } else if (chosenAncestry === 'Dwarf') {
//         dwarvenNaming()
//     } else if (chosenAncestry === 'Gnome') {
//         gnomeNaming()
//     } else if(chosenAncestry === 'Elf') {
//         elfNaming()
//     } else if (chosenAncestry === 'Half-Elf') {
//         halfElfNaming()
//     } else if (chosenAncestry === 'Halfling') {
//         halflingNaming()
//     } else if (chosenAncestry === 'Tiefling') {
//         tieflingNaming()
//     } else if (chosenAncestry === 'Half-Orc') {
//         halfOrcNaming()
//     } else if (chosenAncestry === 'Human') {
//         humanNaming()
//     } else if (chosenAncestry === 'Half-Angel') {
//         halflingNaming()
//      } else {
//         orcNaming()
//     }

//     function dragonbornNaming() {

//             //Decide how many syllables are in this name.
//         const dragonbornFNSyll = Math.ceil(Math.random() * 5)
//         const dragonbornLNSyll = Math.ceil(Math.random() * 9)

//         //Loop iterating through possible syllable positions.
//         let i;
//         for (i = 0; i < numOfSyllArray.length; i++) {
//             dragonBornFirstName()
//             dragonBornLastName()

//             function dragonBornLastName(){
//                 if(i === dragonbornLNSyll){
//                     setRulePicker(germanicEnd)
//                 } else if(i < dragonbornLNSyll){
//                     setAllPicker(germanicAll)
//                 } else if (i < dragonbornLNSyll) {
//                     setRulePicker(germanicConVow)
//                 } else if(i < dragonbornLNSyll){
//                     setAllPicker(germanicAll)
//                 } else if (i < dragonbornLNSyll) {
//                     setRulePicker(germanicCon)
//                 } else if(i < dragonbornLNSyll){
//                     setAllPicker(germanicAll)
//                 } else if(i < dragonbornLNSyll){
//                     setRulePicker(germanicDblCon)
//                 } else if(i < dragonbornLNSyll){
//                     setAllPicker(germanicAll)
//                 } else if(i < dragonbornLNSyll){
//                     setAllPicker(germanicAll)
//                 } else {
//                     return
//                     }
//                 }
//             }

//             function dragonBornFirstName(){
//                  if(i === dragonbornFNSyll){
//                     setRulePickerFirstName(germanicEnd)
//                 } else if(i < dragonbornFNSyll){
//                     setAllPickerFirstName(germanicAll)
//                 } else if (i < dragonbornFNSyll) {
//                     setRulePickerFirstName(germanicConVow)
//                 } else if(i < dragonbornFNSyll){
//                     setAllPickerFirstName(germanicAll)
//                 } else if (i < dragonbornFNSyll) {
//                     setRulePickerFirstName(germanicCon)
//                 } else if(i < dragonbornFNSyll){
//                     setAllPickerFirstName(germanicAll)
//                 } else {
//                     return
//                 }
//             }
//     }
    
//     function dwarvenNaming() {
//         dwarfLastName()
//         function dwarfLastName(){
//             generatedLastName.push(
//             `${DwarfSurOne[dwarfSurnamePre]}${DwarfSurTwo[dwarfSurnameSuf]}`)
//         }

//             //Decide how many syllables are in this name.
//         const FNSyll = Math.ceil(Math.random() * 4)

//         //Loop iterating through possible syllable positions.
//         let i;
//         for (i = 0; i < numOfSyllArray.length; i++) {
//         dwarfFirstName()

//         function dwarfFirstName(){
//             if(i === FNSyll){
//                 setRulePickerFirstName(germanicEnd)
//             } else if (i < FNSyll) {
//                 setRulePickerFirstName(germanicConVow)
//             } else if(i < FNSyll){
//                 setAllPickerFirstName(germanicAll)
//             } else if (i < FNSyll) {
//                 setRulePickerFirstName(germanicCon)
//             } else if(i < FNSyll){
//                 setRulePickerFirstName(germanicDblCon)
//             } else {
//                 return
//             }
//                 }
//             }
//     }

//     function gnomeNaming() {
//         const gnomeFNSyll = Math.ceil(Math.random() * 5)
//         const gnomeLNSyll = Math.ceil(Math.random() * 6)

//         let i;
//         for(i = 0; i < numOfSyllArray.length; i++) {
//             gnomeFirstName()

//             function gnomeFirstName() {
//                 if(i === gnomeFNSyll){
//                     setRulePicker(germanicEnd)
//                 } else if (i < gnomeFNSyll) {
//                     setRulePicker(germanicAll)
//                 }
//             }

//         }
//     }

// function gnomeNaming() {
//          const gnomeFNSyll = Math.ceil(Math.random() * 5)
//          const gnomeLNSyll = Math.ceil(Math.random() * 6)

//         //Loop iterating through possible syllable positions.
//         let i;
//         for (i = 0; i < numOfSyllArray.length; i++) {
//             gnomeFirstName()
//             gnomeLastName()

//         function gnomeLastName(){
//             if(i === gnomeLNSyll){
//                 setRulePicker(germanicEnd)
//             } else if (i < gnomeLNSyll) {
//                 setRulePicker(germanicEnd)
//             } else if(i < gnomeLNSyll) {
//                 setRulePicker(germanicVow)
//             }else if (i < gnomeLNSyll) {
//                 setRulePicker(germanicEnd)
//             } else if(i < gnomeLNSyll){
//                 setRulePicker(germanicDbl)
//             } else if (i < gnomeLNSyll) {
//                 setRulePicker(germanicDblVow)
//             } else {
//                 return
//                 }
//             }
//         }

//         function gnomeFirstName(){
//             if(i === gnomeFNSyll){
//                 setRulePickerFirstName(germanicEnd)
//             } else if (i < gnomeFNSyll) {
//                 setRulePickerFirstName(germanicCon)
//             } else if (i < gnomeFNSyll) {
//                 setRulePickerFirstName(germanicVowelCon)
//             }else if (i < gnomeFNSyll) {
//                 setAllPickerFirstName(germanicAll)
//             } else if(i < gnomeFNSyll){
//                 setRulePickerFirstName(germanicDblCon)
//             } else if (i < gnomeFNSyll) {
//                 setAllPickerFirstName(germanicAll)
//             } else {
                
//                 }
//             }
//     }
    
// function elfNaming () {
        
//             //Decide how many syllables are in this name.
//         const elvenLNSyll = Math.ceil(Math.random() * 7)
//         const elvenFNSyll = Math.ceil(Math.random() * 4)

//         //Loop iterating through possible syllable positions.
//         let i;
//         for (i = 0; i < numOfSyllArray.length; i++) {
//             elfFirstName()
//             elfLastName()

//             function elfLastName(){
//                 if(i === elvenLNSyll){
//                     setRulePicker(latinEnd)
//                 } else if(i < elvenLNSyll){
//                     setRulePicker(latinVowelCon)
//                 } else if (i < elvenLNSyll) {
//                     setAllPicker(latinDblVow)
//                 } else if(i < elvenLNSyll){
//                     setRulePicker(LatinDblCon)
//                 } else if (i < elvenLNSyll) {
//                     setAllPicker(latinAll)
//                 } else {
//                     return
//                 }
//             }
//         }

//             function elfFirstName(){
//                  if(i === elvenFNSyll){
//                     setRulePickerFirstName(latinEnd)
//                 } else if(i < elvenFNSyll){
//                     setRulePickerFirstName(latinVowelCon)
//                 } else if (i < elvenFNSyll) {
//                     setAllPickerFirstName(latinAll)
//                 } else if(i < elvenFNSyll){
//                     setAllPickerFirstName(latinAll)
//                 } else if (i < elvenFNSyll) {
//                     setAllPickerFirstName(latinAll)
//                 } else if (i < elvenFNSyll) {
//                     setRulePickerFirstName(latinDblVow)
//                 } else if (i < elvenFNSyll) {
//                     setAllPickerFirstName(latinAll)
//                 } else {
//                     return
//                 }
//             }
//     }

//      function tieflingNaming() {

//     //     tiefFirstName()
//     //     function tiefFirstName(){
//     //         generatedFirstName.push(
//     //         `${RomanFemale[tiefRomanFemale]} or ${RomanMale[tiefRomanMale]}///)
//     //     }
//     //     tiefVirtueName()
//     //     function tiefVirtueName(){
//     //         generatedMiddleName.push(
//     //         `'${Virtues[tiefVirtue]}'`)
//     //     }

//     //         //Tiefling Last Names are HUMAN! Revist when HUMAN is done ---->

//     //     //     //Decide how many syllables are in this name.
//     //     // const tiefLNSyll = Math.ceil(Math.random() * 5)

//     //     // //Loop iterating through possible syllable positions.
//     //     // let i;
//     //     // for (i = 0; i < numOfSyllArray.length; i++) {
//     //     // tiefLastName()

//     //     // function tiefLastName(){
//     //     //     if(i === tiefLNSyll){
//     //     //         setRulePickerFirstName(germanicEnd)
//     //     //     } else if (i < tiefLNSyll) {
//     //     //         setRulePickerFirstName(germanicConVow)
//     //     //     } else if(i < tiefLNSyll){
//     //     //         setAllPickerFirstName(germanicAll)
//     //     //     } else if (i < tiefLNSyll) {
//     //     //         setRulePickerFirstName(germanicCon)
//     //     //     } else if(i < tiefLNSyll){
//     //     //         setAllPickerFirstName(germanicAll)
//     //     //     } else if(i < tiefLNSyll){
//     //     //         setRulePickerFirstName(germanicDblCon)
//     //     //     } else {
//     //     //         return
//     //         }
//     //             //}
//     //        // }
        
//     }
//    }

// selectNamingConvention();

// const capitalFirstNames  = generatedFirstName.toString().split(',').join('')
// const capitalMiddleNames = generatedMiddleName.toString().split(',').join('')
// const capitalLastNames = generatedLastName.toString().split(',').join('')


 //{titleize(capitalMiddleNames)} {titleize(capitalLastNames)}  

//     return (
//         <div>
//         <p>Shopkeep: {titleize(capitalFirstNames)} </p>
//         </div>
//     )
// }