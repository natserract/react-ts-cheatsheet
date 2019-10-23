import * as React from 'react'


interface Props {
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
}


/* Hooks */
const RTCEx3:React.FC<Props> = () => {
   return (
       <p>Hello</p>
   )
}

export default RTCEx3
