const notes = [
    "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B",
    "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B"
]

export const commonTunings = {
    "standard": ["E", "A", "D", "G", "B", "E"],
    "half-step-down": ["D#", "G#", "C#", "F#", "A#", "D#"],
    "drop-D": ["D", "A", "D", "G", "B", "E"],
    "dadgad": ["D", "A", "D", "G", "A", "D"],
}

const scales = {
    "major": [0, 2, 4, 5, 7, 9, 11],
    "minor": [0, 2, 3, 5, 7, 8, 10],
    "majorPentatonic": [0, 2, 4, 7, 9],
    "minorPentatonic": [0, 3, 5, 7, 10],
    "harmonicMinor": [0, 2, 3, 5, 7, 8, 11],
    "harmonicMajor": [0, 2, 4, 5, 7, 8, 11]
}

export function getScale(scale, key) {
    let res = []
    let startIndex = notes.indexOf(key)
    let nums = [...scales[scale]]
    for (let num of nums) {
        res.push(notes[startIndex+num])
    }
    return res
    // [root, note, note, note]
}

const getStringNotes = (root) => {
    let res = []
    const rootIndex = notes.indexOf(root)
    for (let i=0; i<12; i++) {
        res.push(notes[rootIndex + i])
    }
    let tmp = [...res]
    for (let i of tmp) {
        res.push(i)
    }
    // third octabes
    // for (let i of tmp) {
        // res.push(i)
    // }
    return res
    // [root, note, note, note]
}

export const getNotes = (roots) => {
    let res = []
    for (let root of roots) {
        res.push(getStringNotes(root))
    }
    return res
    // [
    //  [note, note, note], [note, note, note], 
    // ]
}

export const getDiagram = (guitar, selectedNotes, root) => {

    let res = []

    for (let string of guitar) {
        let stringObj = []
        for(let note of string) {
            if (note === root) {
                stringObj.push([note, "root"])
            } else if (selectedNotes.includes(note)) {
                stringObj.push([note, "normal"])
            } else {
                stringObj.push([note, "none"])
            }
        }
        res.push(stringObj)
    }

    // returns {"diagram":[[]], "root":""}
    return {"diagram": res.reverse(), "root": root}
}

// export const getDiagram = (notes, scale) => {
//     let res = []
//     for (let string of notes) {
//         let stringObj = []
//         for (let note of string) {
//             if (note === scale[0]) {
//                 stringObj.push([note, "root"])
//             } else if (scale.includes(note)) {
//                 stringObj.push([note, "normal"])
//             } else {
//                 stringObj.push([note, "none"])
//             }
//         }
//         res.push(stringObj)
//     }
//     return res.reverse()
//     // [
//     //  [[note, diagramStyle], [note, diagramStyle]], [[], []], [[], []]
//     // ]
// }