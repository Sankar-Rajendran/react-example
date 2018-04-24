import React, { Component } from 'react';
import classes from  './App.css';
import Radium, { StyleRoot } from 'radium';
import Person from './Person/Person';


class App extends Component {

  state = {
    persons: [{
      name: 'Sankar',
      age: 28
    },
    {
      name: 'Sesh',
      age: 28
    },
    {
      name: 'Vasanth',
      age: 31
    }],
    showPersons: false
  }


  switchNameHandler = (newName) => {
    //  DON'T DO THIS .THIS WON'T BE RECOGNIZED BY REACT this.state.persons[1].name = 'Kannan';

    this.setState({
      persons: [{
        name: newName,
        age: 28
      },
      {
        name: 'Kannan',
        age: 28
      },
      {
        name: 'Vasanth',
        age: 31
      }]
    })
  }



  nameChagnedHandler = (event, index) => {

    const person = { ...this.state.persons[index] };

    // const person = Object.assign({},this.state.persons[index]);

    person.name = event.target.value;

    const persons = [...this.state.persons];

    persons[index] = person;

    this.setState({
      persons: persons
    })
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  }


  deletePersonHandler = (index) => {
    const persons = this.state.persons.slice();
    persons.splice(index, 1)
    this.setState({
      persons: persons
    })
  }

  render() {
    const assignedClasses = [];

    // const buttonStyle = {
    //   backgroundColor: 'green',
    //   color: 'white',
    //   font: 'inherit',
    //   border: '1px solid blue',
    //   padding: '8px',
    //   cursor: 'pointer',
    //   ':hover': {
    //     backgroundColor: 'lightgreen',
    //     color: 'black'
    //   }
    // }

    let btnClass = '';

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  key={index}
                  changed={(event) => this.nameChagnedHandler(event, index)}
                  click={this.deletePersonHandler.bind(this, index)}
                  name={person.name}
                  age={person.age} />
              )
            })
          }
        </div>
      )

      btnClass = classes.red;

      //buttonStyle.backgroundColor = 'red';

      // buttonStyle[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }

      // if (this.state.persons.length <= 2) {
      //   assignedClasses.push(classes.bold);
      // }
      // if (this.state.persons.length <= 1) {
      //   assignedClasses.push(classes.red);
      // }
    }
    return (
      <StyleRoot>
        <div className={classes.App}>
          <h1>Hi , First react app</h1>
          <p className={assignedClasses.join(' ')}>This really works..!!!</p>
          <button key="buttonSwitch" className={btnClass}  onClick={this.switchNameHandler.bind(this, 'Sankar Rajendran')}>Switch Name</button>
          <button className={btnClass}  onClick={this.togglePersonsHandler}>Toggle Persons</button>
          {/* click={()=>this.switchNameHandler('First Person')} this is not efficient */}
          {persons}
        </div>
      </StyleRoot>

    );
  }
}

export default Radium(App);
