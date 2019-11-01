import * as React from 'react'

//Like heterogenus - Option 1
const Component = () => {
    type Partial<T> = {
        [P in keyof T]: T[P]
    };
    type Any = {
        value: <A extends Partial<A>>() => void
    }
    const createAny = (value: any): Any => (value)
    const arr = [createAny('str'), createAny(2), createAny("String")]
    arr.map(el => console.log(el));

    return (
        <p>Hello</p>
    )
}

//Like heterogenus - Option 2
export const Component2 = () => {
    interface Show<A> {
        toString: () => A
    }

    type Any = {
        value: <A extends Show<A>>() => A
    }

    const createAny = (value: any): Any => ({ value })
    const arr = [createAny('str'), createAny(1)]
}
export default Component

