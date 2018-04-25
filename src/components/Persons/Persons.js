import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map((person, index) => {
    return (<Person
        changed={(event) => props.changed(event, index)}
        click={() => props.clicked(index)}
        name={person.name}
        key={index}
        age={person.age} />)
});


export default persons;

