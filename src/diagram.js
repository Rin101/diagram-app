import { useRef, useState } from "react"
import { getDiagram } from "./general"
import "./css/diagram.css"
import { FretNumbers, String } from "./layout-diagram"

export const Diagram = (props) => {
    
    let diagram = props.diagramObj["diagram"]
    const root = props.diagramObj["root"]


    const Guitar = () => {
        let res = []
        for (let string of diagram) {
            const stringNum = diagram.indexOf(string)
            res.push(<String diagram={diagram} setDiagram={props.setDiagram} root={root} notes={string} stringNum={stringNum} key={stringNum}></String>)
        }

        console.log("diagram", diagram)
        return res
    }

    return(
        <div className="diagram">
            <Guitar></Guitar>
            <FretNumbers></FretNumbers>
        </div>
    )
}