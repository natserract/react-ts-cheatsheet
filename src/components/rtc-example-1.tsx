
import React from 'react'

/* Interface 
  --- Data Types (Props)---
*/

enum Class {
    classA = '20 Orang',
    classB = '30 Orang'
}

interface Props {
    text: string,   //string
    age: number,    // number
    list: string[], //array string
    listAge: number[]  //array number
    listClass?: [string, number, number, string]  //Fixed types in array
    role: any, //Any types
    handleClick: () => void, //Void types: you can return type of the functions not value
    color: 'Black' | 'Blue' | 'Red' //Union types,
    inlineStyle: object //Object type,
    active?: boolean,

    //Not type (Just optional properties you can declare)
    dataShow?: string // declare or not it's no problem
}


const RTCEx1: React.FC<Props> = ({ 
    text, 
    age,
    list,
    listAge,
    listClass,
    role,
    handleClick,
    color,
    inlineStyle,
    active
}) => {

    // Enum here
    let ClassRoom:Class = Class.classA;

    //Read only 
    type T  = {
        readonly xProp: string,
        readonly yProp: number,
    }

    let x:T = {
        xProp: 'Alfin',
        yProp: 2
    }

    //(Just read only hanya bisa dibaca, tidak bisa diassign values) Contoh:
    // x.xProp='Benjamin' // => Maka akan Error

    return (
        <React.Fragment>
            <p>{text}</p>
            <p>{age}</p>
            <p>{list}</p>
            <p>{listAge}</p>
            <p>{listClass}</p>
            <p>{ClassRoom}</p>
            <p>{role}</p>
            <button onClick={handleClick}>Click Me</button>
            <p>{color}</p>
            <p style={inlineStyle}>Style this element</p>
            {
                active ? (<p>Element true</p>) : (<p>Element false</p>)
            }
        </React.Fragment>
    )
}


export default RTCEx1
