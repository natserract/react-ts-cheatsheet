
import * as React from 'react'

/*  
  --- handleEvent, Generic Types, Children, Function ---
*/

//Generic
interface Person<T> {
    firstName: T
}

interface Type<TValues, TDump> extends Person<string> {
    data: [TValues, TDump];
}

interface InitialName extends Type<string, number> {
    typeMouseEvent: (event: React.MouseEvent<HTMLButtonElement>) => void,  // mouse event 
    typeFocusEvent: (event: React.FocusEvent<HTMLInputElement>) => void,  //Focus event
    children: React.ReactNode //Children
}

const RTCEx2: React.FC<InitialName> = ({ typeMouseEvent, typeFocusEvent, data, firstName, children }) => {
    return (
        <div>
            {/* return in array */}
            <p>{[data, firstName]}</p>

            {/* Click event */}
            <button onClick={typeMouseEvent}>
                Click Me <br/>
            </button>

            {/* Focus event */}
            <input type="text" onFocus={typeFocusEvent} />

            {children}
        </div>
    )
}

export default RTCEx2