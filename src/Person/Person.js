import React from 'react'

// stateless component because it does not manage state internally.
// best practice is to use as many stateless or dumb components.
// Often called a presentation component.

const person = (props) => {
    // ES6 Arrow function syntax

    return (
        <div>
            <p>I'm {props.name} and I am {props.age} years old!</p>
            <p>{props.children}</p>
        </div>
    );

}

export default person;