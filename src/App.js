import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person'

const app = props => {
  const [personsState, setPersonsState] = useState({
    // useState is the most important 'use' Hooks! You don't need to
    // use class-based components


    // useState always returns two values:
    // -- 1st is always current state, including initial or default
    // -- 2nd is a function to allow us to update the state, 
    //    React is aware and will re-render the state. Uses array destructuring to split apart the two.

    // You can have as many useState variables as you want.


    // initial value for useState.
    persons: [
      {name: "Max", age: 28},
      {name: "Manu", age: 29},
      {name: "Stephanie", age: 26}
    ],
    // now handled as a seperate state value 
    //   otherState: "Some other value"
  });

  const [otherState, setOtherState] = useState("Some Other State")

  const switchNameHandler = () => {
    // console.log("Was Clicked!");
    setPersonsState({
      persons: [
        {name: "Maxamillion", age: 28},
        {name: "Manu", age: 29},
        {name: "Stephanie", age: 27}
      ]
    })
  };

  return (
    <div className="App">
      <h1>Hi, I'm a React App</h1>
      <p>This is really working!</p>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
      <Person name={personsState.persons[2].name} age={personsState.persons[2].age} />
    </div>
  );
}

export default app;
