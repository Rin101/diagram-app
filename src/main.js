import { useEffect, useState } from "react";
import { Diagram } from "./diagram";
import { commonTunings, getDiagram, getNotes, getScale } from "./general";
import { Settings } from "./settings";

export function Main () {
    
    const [tuning, setTuning] = useState(commonTunings["standard"]) 
    const [root, setRoot] = useState('E')
    const [selectedNotes, setSelectedNotes] = useState({
            "notes": getScale("minorPentatonic", root),
            "scaleName": "minorPentatonic"
        })

    let guitar = getNotes(tuning)
    // {"diagram": [[]], "root":""}
    // let diagramObj = getDiagram(guitar, selectedNotes["notes"], root)
    
    const [diagramObj, setDiagramObj] = useState(getDiagram(guitar, selectedNotes["notes"], root))
    
    const changeDiagram = (guitar=guitar, selectedNotes=selectedNotes["notes"], root=root) => {
        setDiagramObj(getDiagram(guitar, selectedNotes, root))
    }

    const setDiagram = (diagram) => {
        setDiagramObj({"diagram": diagram, "root": root})
    }


    return(
        <div>
            <Settings selectedNotes={selectedNotes} setSelectedNotes={setSelectedNotes} root={root} setRoot={setRoot} tuning={tuning} setTuning={setTuning} changeDiagram={changeDiagram}></Settings>
            <Diagram diagramObj={diagramObj} setDiagram={setDiagram}></Diagram>
        </div>
    )
}