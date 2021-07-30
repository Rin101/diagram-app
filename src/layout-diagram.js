import { useEffect, useRef, useState } from "react"

function Note (props) {
    const noteBox = useRef()


    useEffect(() => {

        const note = noteBox.current.querySelector(".note")

        switch (props.note[1]) {
            case "none":
                note.className = "note note-none"
                break;
            case "normal":
                note.className = "note note-normal"
                break;
            case "root":
                note.className = "note note-root"
                break;
            default:
                note.className = "note note-none"
                break;
        }

        // clear edge border
        if (props.stringNum === 0) {
            noteBox.current.querySelector('.note-right-border').style.top = "50%"
            noteBox.current.querySelector('.note-left-border').style.top = "50%"
        } else if (props.stringNum === 5) {
            noteBox.current.querySelector('.note-right-border').style.top = "-50%"
            noteBox.current.querySelector('.note-left-border').style.top = "-50%"
        }

        // draw head and open string
        if (props.noteNum === 1) {
            noteBox.current.style.width = 38 + 10 + "px"
            noteBox.current.querySelector('.note-left-border').style.width = "10px"
        } else if (props.noteNum === 0) {
            noteBox.current.querySelector('.note-right-border').style.display = "none"
            noteBox.current.querySelector('.note-left-border').style.display = "none"
            note.style.height = "13px"
            note.style.width = "13px"
        } 
    })

    const toggleNote = () => {
        // const isNotShowing = noteBox.current.querySelector(".note").classList.contains("note-none")
        // if (isNotShowing) {   
        // }
        let tmpDiagram = [...props.diagram]
        let noteInDiagram = tmpDiagram[props.stringNum][props.noteNum]
        switch (noteInDiagram[1]) {
            case "none":
                if (noteInDiagram[1] === props.root) {
                    noteInDiagram[1] = "root"
                } else {
                    noteInDiagram[1] = "normal"
                }
                break;
            default:
                noteInDiagram[1] = "none"
        }

        props.setDiagram(tmpDiagram)
        console.log(noteInDiagram)
    }
    
    return (
        <div ref={noteBox} className="note-box" onClick={() => toggleNote()}>
            <div className="note"></div>
            <div className="note-right-border"></div>
            <div className="note-left-border"></div>
        </div>
    )
}

export const String = (props) => {

    const displayNotes = () => {
        let res = []
        for (let i=0; i<props.notes.length; i++) {
            const note = props.notes[i]
            const key = note + i + props.stringNum
            res.push(<Note diagram={props.diagram} setDiagram={props.setDiagram} root={props.root} note={note} stringNum={props.stringNum} noteNum={i} key={key}></Note>)
        }
        return res
    }

    return (
        <div className="string-container">
            { displayNotes() }
            <div className="string"></div>
        </div>
    )
}

const FretNum = (props) => {

    const p = useRef()

    useEffect(() => {
        p.current.style.left = (38 + 38 + 10 + 38*(props.num-1) - 19) + "px"
    })

    return (
        <p className="fretNum" ref={p}>{ props.num }</p>
    )
}

export const FretNumbers = () => {

    const fretNums = [3, 5, 7, 9, 12, 15, 17, 19, 21, 23]

    return (
        <div className="fret-numbers">
            {fretNums.map(num => <FretNum num={num} key={num}></FretNum>)}
        </div>
    )
}