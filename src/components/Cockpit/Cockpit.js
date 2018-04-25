import React from 'react';

import classes from './Cockpit.css';

const cockpit = (props) => {
    const assignedClasses = [];

    let btnClass = '';

    if (props.persons.length <= 2) {
        assignedClasses.push(classes.bold);
    }
    if (props.persons.length <= 1) {
        assignedClasses.push(classes.red);
    }

    if (props.showPersons) {
        btnClass = classes.red;
    }

    return (
        <div className={classes.Cockpit}>
            <h1>Hi , First react app</h1>
            <p className={assignedClasses.join(' ')}>This really works..!!!</p>
            <button key="buttonSwitch" className={btnClass} onClick={() => props.switchNameClicked('Sankar Rajendran')}>Switch Name</button>
            <button className={btnClass} onClick={props.toggleClicked}>Toggle Persons</button>
        </div>

    )
}



export default cockpit;