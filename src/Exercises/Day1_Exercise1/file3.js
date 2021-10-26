import React from 'react';
import {persons} from './file2.js'
import PropTypes from 'prop-types';

export function Welcome(props) {
    return <h1>Hello,{props.name}</h1>;
  }
  
export function MultiWelcome() {
    return (
      <div>
        <Welcome name="Sara" />
        <Welcome name="Cahal" />
        <Welcome name="Edith" />
        {persons.map((person)=>{
            return <WelcomePerson person={person}/>
        })}
        <WelcomePerson person="test"/>
      </div>
    );
  }

  WelcomePerson.propTypes = {
    person: PropTypes.shape({
      firstName: PropTypes.string.isRequired,
      lastName: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })
    };

function WelcomePerson(props){
    return (
        <h1>wELCOME {props.person.firstName} -  {props.person.lastName} - {props.person.email}</h1>
    );
}


  