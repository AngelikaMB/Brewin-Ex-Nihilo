import React from 'react'
import GermanicVowel from './GermanicSingleVowel'
import GermanicCon from './GermanicSingleCon'
import GermanicConVow from './GermanicConVowel'
import GermanicVowCon from './GermanicVowelCon'
import GermanicDblCon from './GermanicDblCon'
import GermanicDblVowel from './GermanicDblVowel'
import CapitalizeWords from './CapitalizeWords'



export default function nameFunc(props) {

    namingConvention = () => {
        if(props.ancestry === 'Dragonborn') {
            dragonbornNaming()
        } else if (props.ancestry === 'Dwarf') {
            dwarvenNaming()
        } else if (props.ancestry === 'Gnome') {
            gnomeNaming()
        } else if(props.ancestry === 'Elf') {
            elfNaming()
        } else if (props.ancestry === 'Half-Elf') {
            halfElfNaming()
        } else if (props.ancestry === 'Halfling') {
            halflingNaming()
        } else if (props.ancestry === 'Tiefling') {
            tieflingNaming()
        } else if (props.ancestry === 'Half-Orc') {
            halfOrcNaming()
        } else if (props.ancestry === 'Human') {
            humanNaming()
        } else if (props.ancestry === 'Half-Angel') {
            halflingNaming()
        } else {
           orcNaming()
        }
    }

        return(
            <div>
                <h3>{CapitalizeWords(this.state.firstname)} {CapitalizeWords(this.state.middlename)} {CapitalizeWords(this.state.lastname)}</h3>
                <button>Reroll!</button>
            </div>
            )
}
