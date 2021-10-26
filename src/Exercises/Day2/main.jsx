import React from 'react';
import { Clock } from './exercise1';
import { Fetchapi } from './exercise3';
import { FetchAndDisplay } from './FetchAndDisplayExercise';
import { Counter } from './useStateExercise';

export function Main() {
    return (
      <div>
        <h2>Ex 1</h2>
        <Clock/>
        <Fetchapi/>
        <Counter initialvalue={10} number={5}/>
        <FetchAndDisplay/>
      </div>
    );
  }