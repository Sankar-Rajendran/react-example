import React from 'react';
// import Radium from 'radium';
import classes from  './Person.css'

import WithClass from '../../../hoc/WithClass_Component'


const person = (props) => {

    // const style = {
    //     '@media (min-width:500px)':{
    //         width:'450px'
    //     }
    // }
    return (
        <WithClass classes={classes.Person}>
            <p onClick={props.click}>I am {props.name} and {props.age} years old..!!! </p>
            <p>{props.children}</p>
            <input type="text" onChange={props.changed} value={props.name}/>
        </WithClass>
    )
}


export default person;