import React, { Component } from 'react';
import classes from './App.css';
// import Radium, { StyleRoot } from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
// import ErrorBoundary from '../components/ErrorBoundary/ErrorBoundry';


// import WithClass from '../hoc/WithClass';

import withClass from '../hoc/withClass';
import Aux from '../hoc/Aux';


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


    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChagnedHandler}></Persons>
        </div>
      );



      //buttonStyle.backgroundColor = 'red';

      // buttonStyle[':hover'] = {
      //   backgroundColor: 'salmon',
      //   color: 'black'
      // }

    }
    return (
      // <StyleRoot>
      // <WithClass classes={classes.App}>
      <Aux>
        <Cockpit
          showPersons={this.state.showPersons}
          toggleClicked={this.togglePersonsHandler}
          switchNameClicked={this.switchNameHandler}
          persons={this.state.persons} />

        {/* click={()=>this.switchNameHandler('First Person')} this is not efficient */}
        {persons}
      </Aux>
      // </WithClass>
      // </StyleRoot>

    );
  }
}

export default withClass(App, classes.App);
