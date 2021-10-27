import React from "react";
import { CelciusExercise } from "./celciusexercise.jsx";
import { PersonExercise } from "./personexercise.jsx";
import { FetchDataFromJsonServer } from "./fetchdataexercise.jsx";
import MultipleForm from './FormDemoMultiple.jsx';

export function Main() {
  return (
    <div>
      <h2>Day3</h2>
      <CelciusExercise />
      <PersonExercise/>
      <FetchDataFromJsonServer/>
      <MultipleForm/>
    </div>
  );
}
