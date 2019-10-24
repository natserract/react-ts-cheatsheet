
/*
    Hooks 
    -- Rules of Hooks : 
        - Don’t call Hooks inside loops, conditions, or nested functions. (Top Level)
        - Don’t call Hooks from regular JavaScript functions.

*/

import * as React from 'react'


interface Props { }

// -Hooks UseState Section
interface IUSer {
    job: string
    phone: number,
    url: string,
}

//State - Hooks UseReducer Section
interface State {
    count: number
}

//Action - Hooks UseReducer Section
type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' } | { type: 'RESET' }

//Initial Reducer - Hooks UseReducer Section
const reducer = (state: State, action: Action) => {
    switch (action.type) {
        case 'INCREMENT': {
            return {
                ...state,
                count: state.count + 1
            }
        }
        case 'DECREMENT': {
            return {
                ...state,
                count: state.count - 1
            }
        }
        case 'RESET': {
            return {
                ...state,
                count: 0,
            }
        }
        default: throw new Error()
    }
}


const RTCEx3: React.FC<Props> = () => {

    //Hooks - Use state
    const [value] = React.useState<IUSer>({
        job: 'Developer',
        phone: 7208814715695,
        url: 'gitlab.com/alfinsuryaS'
    })

    //Hooks - Use Reducer
    const [state, dispatch] = React.useReducer(reducer, {
        count: 0
    })

    return (
        <div>
            {/* View State - Hooks UseState Section  */}
            <div style={{ marginBottom: 40 }}>
                <span> {JSON.stringify(value)}</span>
            </div>

            {/* Show reducer action - Hooks UseReducer Section */}
            <span>{state.count}</span>

            {/*  Increment action  - Hooks UseReducer Section  */}
            <button onClick={() => dispatch({ type: 'INCREMENT' })}>
                Increment
            </button>

            {/*  Decrement action - Hooks UseReducer Section  */}
            <button onClick={() => dispatch({ type: 'DECREMENT' })}>
                Decrement
            </button>

            {/*  Reset action - Hooks UseReducer Section  */}
            <button onClick={() => dispatch({ type: 'RESET' })}>
                Reset
            </button>

        </div>
    )
}

export default RTCEx3
