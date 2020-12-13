import React from 'react'
import ChromaticData from '../../Constants/ChromaticData'
import MetallicData from '../../Constants/MetallicData'
import ElfData from '../../Constants/ElfData'
import Ancestry from '../../Constants/Ancestry'
import DwarfData from '../../Constants/DwarfData'
import HalflingData from '../../Constants/HalflingData'
import GnomeData from '../../Constants/GnomeData'
import NameGen from '../../Constants/NameGen'
import Sex from '../../Constants/SexData'
import Alignment from '../../Constants/AlignmentData'

export default function profileGen() {

const subAncestryPick = []

//Generate index based on selected dataset.
const racePick = Math.floor(Math.random() * Ancestry.length)
const sexPick = Math.floor(Math.random() * Sex.length)
const chromaticPick = Math.floor(Math.random() * ChromaticData.length)
const metallicPick = Math.floor(Math.random() * MetallicData.length)
const elfPick = Math.floor(Math.random() * ElfData.length)
const dwarfPick = Math.floor(Math.random() * DwarfData.length)
const halflingPick = Math.floor(Math.random() * HalflingData.length)
const gnomePick = Math.floor(Math.random() * GnomeData.length)

//Pick a dataset by index.
const chosenAncestry = (Ancestry[racePick].Type)

//Retrieve sub-Ancestry dataset based on Ancestry selection and push to array.
function selectAncestry() {
    if(chosenAncestry === 'Dragonborn')
        return subAncestryPick.push(
        `${ChromaticData[chromaticPick]}`,
        `${MetallicData[metallicPick]}`,
    )
    else if(chosenAncestry === 'Elf')
        return subAncestryPick.push(
        `${ElfData[elfPick]}`,
    )
    else if(chosenAncestry === 'Half-Elf')
        return subAncestryPick.push(
        `${ElfData[elfPick]}`,
    )
    else if(chosenAncestry === 'Dwarf')
    return subAncestryPick.push(
    `${DwarfData[dwarfPick]}`,
    )
    else if(chosenAncestry === 'Halfling')
    return subAncestryPick.push(
    `${HalflingData[halflingPick]}`,
    )
    else if(chosenAncestry === 'Gnome')
    return subAncestryPick.push(
    `${GnomeData[gnomePick]}`,
    )
}
selectAncestry();

//pick sub-Ancestry from chosen dataset.
const subAncestrySelector = Math.floor(Math.random() * subAncestryPick.length)
const chosenSubAncestry = subAncestryPick[subAncestrySelector]

//pick sex from dataset.
const chosenSex = Sex[sexPick]

//pick alignment from dataset
    const alignmentPick = Math.floor(Math.random() * Alignment.length)
    const chosenAlignment = Alignment[alignmentPick]


    return (
        <div>
            <NameGen ancestry={chosenAncestry} subAncestry={chosenSubAncestry} sex={chosenSex} alignment={chosenAlignment}/>
        </div>
    )
}