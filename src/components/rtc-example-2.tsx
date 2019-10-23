
import * as React from 'react'

/*  
  --- Event, Generic Types ---
*/

//Generic
interface Type<TValues, TDump>{
    data: [TValues, TDump];
}

interface InitialName extends Type<string, number> {
    handleClick: (event: React.MouseEvent<HTMLButtonElement>) => void,  //event 
}

const initialFunc = (message: string) => {
    console.log(message)
}

const RTCEx2: React.FC<InitialName>= ({ handleClick, data }) => {
    return (
        <div>
            <p>Hello</p>
            <button onClick={handleClick}>
                Click Me
            </button>
            <p>{data}</p>
            {initialFunc}
        </div>
    )
}

export default RTCEx2