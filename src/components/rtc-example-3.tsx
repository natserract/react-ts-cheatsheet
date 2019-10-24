
/*
    Hooks 
    -- Rules of Hooks : 
        - Don’t call Hooks inside loops, conditions, or nested functions. (Top Level)
        - Don’t call Hooks from regular JavaScript functions.

*/

import * as React from 'react'

interface Props {}

interface IUSer {
    job: string
    phone: number,
    url: string,
}

/* Hooks */
const RTCEx3: React.FC<Props> = () => {

    //Hooks - Use state
    const [value] = React.useState<IUSer>({
        job: 'Developer',
        phone: 7208814715695,
        url: 'gitlab.com/alfinsuryaS'
    })

    //Hooks - Use Reducer

    return (
        <div>
            {/* View State */}
            <span> { JSON.stringify(value) }</span>
        </div>
    )
}

export default RTCEx3
