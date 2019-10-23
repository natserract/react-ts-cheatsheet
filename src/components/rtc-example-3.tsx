import * as React from 'react'

interface Props {
    value: number,
    setValue: React.Dispatch<React.SetStateAction<number>>
}

/* Hooks */
const RTCEx3: React.FC<Props> = () => {
    const [value, setValue] = React.useState(0)
    return (
        <div>
            <p>{ value }</p>
        </div>
    )
}

export default RTCEx3
