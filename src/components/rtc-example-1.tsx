
import React from 'react'

/* Interface 
  --- Data Types (Props), extends interface, enum, readonly---
*/

enum SelectClassRoom {
    classA = '20 Orang',
    classB = '30 Orang'
}

interface Detail {
    typeStringExt: string,
    typeStringExtV: string
}

type listsColor = {
    typeUnion: 'Black' | 'Blue' | 'Red' //Union types,
}

//Read only 
type T = {
    readonly xProp: string,
    readonly yProp: number,
}


//nested interface
interface Props extends Detail, listsColor {
    typeString: string,   //string
    typeNumber: number,    // number
    typeArrayString: string[], //array string
    typeArrayNumber: number[]  //array number
    typeArrayFixed: [string, number, number, string]  //Fixed types in array
    typeAny: any, //Any types
    typeObject: object //Object type,
    typeBoolean: boolean, //Boolean type
    optionType?: string // //Not type (Just optional properties you can declare)
    typeVoid: () => void, //Void types: you can return type of the functions not value
}


const PersonDetail: React.FC<Props> = ({
    typeString,
    typeNumber,
    typeArrayString,
    typeArrayNumber,
    typeArrayFixed,
    typeAny,
    typeObject,
    typeStringExt,
    typeStringExtV,
    typeUnion,
    optionType,
    typeVoid,
    typeBoolean
}) => {

    //Enum here
    const Class: SelectClassRoom = SelectClassRoom.classA;
    console.log(Class);

    //ready only
    const x: T = {
        xProp: 'Alfin',
        yProp: 2
    }
    
    //(Just read only hanya bisa dibaca, tidak bisa diassign values) Contoh:
    // x.xProp='Benjamin' // => Maka akan Error

    return (
        typeBoolean ? (
            <div>
                <p style={typeObject}>
                    {[
                        typeString,
                        typeNumber,
                        typeArrayString,
                        typeArrayNumber,
                        typeArrayFixed,
                        typeAny,
                        typeStringExt,
                        typeStringExtV,
                        typeUnion
                    ]}
                </p>
                <button onClick={typeVoid}>
                    Hey! Click Me
                </button>
            </div>) : (
                <p>You give false condition, just change condition to true, you will see! :</p>
            )
    )
}

export default PersonDetail
