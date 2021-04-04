import React from 'react'

const person = (props) => {
    // ES6 Arrow function syntax

    return (
        <div>
            <p onClick={props.click}>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </div>
    );

}

export default person;