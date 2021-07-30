import { useEffect, useRef } from "react"
import { commonTunings, getDiagram, getNotes, getScale } from "./general"


export const Select = (props) => {
    const selector = useRef()
    const selectorItems = useRef()

    useEffect(() => {
        
    }, [selectorItems])

    const hideMenu = () => {
        selectorItems.current.classList.remove("showing")
        console.log("asdfghgdfdds", selectorItems.current.style.display)
        selectorItems.current.style.display = "none"
        console.log("kjdkjsodxj", selectorItems.current)
        console.log("asdfghgdfdds", selectorItems.current.style.display)
    }
    const toggleMenu = () => {
        const isShowing = selectorItems.current.classList.contains("showing")
        if (isShowing) {
            hideMenu()
        } else {
            selectorItems.current.classList.add('showing')
            selectorItems.current.style.display = "block"
        }
    }

    return(
        <div className="select-menu select-tuning" ref={selector} onClick={() => toggleMenu()}>
            <p className="label">{props.title}: </p>
            <div>
                <p className="current-item">{props.currentValue} <i className="fas fa-caret-down"></i></p>
                <div className="selector-items" ref={selectorItems}>
                    {/* { mapScaleSelectors(props.items, props.setScale, hideMenu) } */}
                    { props.mapSelectors(props.items, props.setItem, props.changeDiagram, hideMenu) }
                </div>
            </div>
        </div>
    )
}


// ================================

const SelectorTuningItem = (props) => {
    const item = useRef()
    const setMenu = () => {
        const tuning = commonTunings[props.value]
        props.setTuning(tuning)
        props.changeDiagram()
        props.hideMenu()
    }
    return(
        <div className="selector-item" ref={item} onClick={() => setMenu()}><p>{props.title}</p></div>
    )
}

export const mapTuningSelectors = (items, setTuning, changeDiagram, hideMenu) => {
    //  item : [title, value] 
    return items.map(item => <SelectorTuningItem title={item[0]} value={item[1]} setTuning={setTuning} changeDiagram={changeDiagram} hideMenu={hideMenu} key={item}></SelectorTuningItem>)
}

// ==============================

const SelectorScaleItem = (props) => {
    const item = useRef()
    const setMenu = () => {
        props.setScale(props.value)
        props.changeDiagram()
        props.hideMenu()
    }
    return(
        <div className="selector-item" ref={item} onClick={() => setMenu()}><p>{props.title}</p></div>
    )
}

export const mapScaleSelectors = (items, setScale, hideMenu) => {
    //  item : [title, value] 
    return items.map(item => <SelectorScaleItem title={item[0]} value={item[1]} setScale={setScale} hideMenu={hideMenu} key={item}></SelectorScaleItem>)
}

// ===============================

const SelectorRootItem = (props) => {
    const item = useRef()
    const setMenu = () => {
        props.setRoot(props.value)
        props.changeDiagram()
        props.hideMenu()
    }
    return(
        <div className="selector-item" ref={item} onClick={() => setMenu()}><p>{props.title}</p></div>
    )
}

export const mapRootSelectors = (items, setRoot, hideMenu) => {
    //  item : [title, value] 
    return items.map(item => <SelectorRootItem title={item} value={item} setRoot={setRoot} hideMenu={hideMenu} key={item}></SelectorRootItem>)
}