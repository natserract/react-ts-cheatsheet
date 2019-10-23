
/*  
  --- handleEvent, Generic Types, Children, Function, Type-Definitions ---
*/

import * as React from 'react'


//Generic types
interface Person<T> {
    firstName?: T
}

interface Type<TValues, TDump> extends Person<string> {
    data?: [TValues, TDump];
}

interface InitialName extends Type<string, number> {
    typeMouseEvent?: (event: React.MouseEvent<HTMLButtonElement>) => void,  // mouse event 
    typeFocusEvent?: (event: React.FocusEvent<HTMLInputElement>) => void,  //Focus event
    children?: React.ReactNode //Children
}


//Type definitions for iframe
interface IFrameHTMLAttribute extends React.IframeHTMLAttributes<HTMLIFrameElement> {
    height: number | string
    marginHeight: number | undefined
}

//Dom Attributes
interface DOMAttribute {
    onChange?: React.FormEventHandler
    onClick?: React.MouseEventHandler

    //... you can add much more here...
}


//Define Component
const BlurryFace: React.FC<DOMAttribute> = ({ onChange, onClick }) => {
    return <input type="text" onChange={onChange} onClick={onClick} />
}


//Define Component
const IframeHTMLElement: React.FC<IFrameHTMLAttribute & InitialName> = ({ height, marginHeight, children }) => {
    return (
        <iframe height={height} marginHeight={marginHeight}>
            {children}
        </iframe>
    )
}


const RTCEx2: React.FC<InitialName> = ({ typeMouseEvent, typeFocusEvent, data, firstName }) => {
    return (
        <React.Fragment>
            {/* Iframe Component */}
            <IframeHTMLElement height={200} marginHeight={120}>
                {/* return in array */}
                <p>{[data, firstName]}</p>
            </IframeHTMLElement>

            {/* Click event */}
            <button onClick={typeMouseEvent}>
                Click Me <br />
            </button>

            {/* Focus event */}
            <input type="text" onFocus={typeFocusEvent} />

            {/* Ext component */}
            <BlurryFace
                onChange={() => console.log("Event onChange on Input")}
                onClick={() => console.log("Event onClick on Input")}
            />

        </React.Fragment>
    )
}

export default RTCEx2