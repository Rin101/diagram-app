import { useRef } from "react"
import "./css/settings.css"
import { getScale } from "./general"
import { mapRootSelectors, mapScaleSelectors, mapTuningSelectors, Select, SelectTuning } from "./settings-ind"


export function Settings (props) {

    // (guitar, selecedNotes, root)
    // const changeDiagram = props.changeDiagram

    const tuning = props.tuning
    const tuningItems = [
        ["standard", "standard"], ["half step down", "half-step-down"], 
        ["drop D", "drop-D"], ["DADGAD", "dadgad"], ["custom", "custom"]
    ]
    const setTuning = props.setTuning

    const scaleName = props.selectedNotes["scaleName"]
    const scaleItems = [
        ["Minor Pentatonic", "minorPentatonic"], ["Major Pentatonic", "majorPentatonic"],
        ["Minor", "minor"], ["Major", "major"], ["Harmonic Minor", "harmonicMinor"], ["Harmonic Major", "harmonicMajor"]
    ]
    const setScale = (scaleName, root=props.root) => {
        props.setSelectedNotes({"notes": getScale(scaleName, root),"scaleName":scaleName})
    }

    const root = props.root
    const rootItems = ["C", "C#", "D" ,"D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"]
    const setRootNote = (value) => {
        props.setRoot(value)
        if (scaleName !== "custom") {
            setScale(scaleName, value)
        }
    }


    return(
        <div className="settings">
            <Select changeDiagram={props.changeDiagram} title={"Tuning"} currentValue={tuning} items={tuningItems} setItem={setTuning} mapSelectors={mapTuningSelectors}></Select>
            <Select changeDiagram={props.changeDiagram} title={"Scale"} currentValue={scaleName} items={scaleItems} setItem={setScale} mapSelectors={mapScaleSelectors}></Select>
            <Select changeDiagram={props.changeDiagram} title={"Root"} currentValue={root} items={rootItems} setItem={setRootNote} mapSelectors={mapRootSelectors}></Select>
        </div>
    )
}
