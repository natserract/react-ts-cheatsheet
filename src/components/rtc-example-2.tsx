
/*  
  --- handleEvent, Generic Types, Children, Function, Type-Definitions, Generic Component ---
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
    marginHeight: number | undefined,
    title: string
}

//Dom Attributes
interface DOMAttribute {
    onChange?: React.FormEventHandler
    onClick?: React.MouseEventHandler

    //... you can add much more here...
}

//Generic component (as generic lists)
interface ListsProps<T> {
    items: T[] 
    itemDisplay: (item: T, key:T) => JSX.Element //return JSX Element / React Nodes
}


//Component
const GenericComponent:React.FC<ListsProps<number>> = ({ items, itemDisplay }:any) => {
    return <div>{ items.map(itemDisplay) }</div>
}

//Component
const BlurryFace: React.FC<DOMAttribute> = ({ onChange, onClick }) => {
    return <input type="text" onChange={onChange} onClick={onClick} />
}

//Component
const IframeHTMLElement: React.FC<IFrameHTMLAttribute & InitialName> = ({ height, marginHeight, children, title }) => {
    return (
        <iframe title={title} height={height} marginHeight={marginHeight}>
            {children}
        </iframe>
    )
}


//Generic Component
const RTCEx2: React.FC<InitialName> = ({ typeMouseEvent, typeFocusEvent, data, firstName }) => {
    let user = [1, 2, 3, 4, 5];
    
    return (
        <React.Fragment>
            {/* Iframe Component */}
            <IframeHTMLElement title="Iframe" height={200} marginHeight={120}>
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

            {/* Generic Component */}
            <GenericComponent 
                items={user} 
                itemDisplay={(item, id) => <p key={id}>{ item }</p>} 
            />

        </React.Fragment>
    )
}

export default RTCEx2