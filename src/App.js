import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person'

class App extends Component {
  state = {
    persons: [
      {id: 'fdasa', name: "Max", age: 28},
      {id: 'fdwad', name: "Manu", age: 29},
      {id: 'ratat', name: "Stephanie", age: 26}
    ],
    otherState: "Some other value",
    showPersons: false,
  }
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  /* A flaw, in javascript, objects and arrays are reference types. 
  Best practive is to copy the object/array and then edit. 
  Always update state with an immutable approach. */   
  deletePersonHandler = (personIndex) => {
    /* either use .slice() or use ... approach to create copy */
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }


  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }


  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    }


    /* preferred way of outputting conditional content */

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        /* javascript syntax for React handling of lists */
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
                    /* either use this arrow handler syntax or bind syntax */
                    click={() => this.deletePersonHandler(index)} 
                    name={person.name} 
                    age={person.age} 
                    key={person.id} 
                    changed={(event) => this.nameChangedHandler(event, person.id)} />
          })}
          {/* <Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          <Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, "Max!")}
            changed={this.nameChangedHandler}>My Hobbies: Racing</Person>
          <Person 
            name={this.state.persons[2].name} 
            age={this.state.persons[2].age} /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* This method of data binding may be inefficient. */}
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>Toggle Persons</button>
        {persons}
      </div>
    );
  }
}

export default App;
