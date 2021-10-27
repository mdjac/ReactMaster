import React, { useState, useEffect } from "react";

export const CelciusExercise = () => {
  const [celsius, setCelsius] = useState(0);

  const toCelsius = (fahrenheit) => {
    setCelsius(((fahrenheit - 32) * 5) / 9);
  };

  // const toFahrenheit = (celsius) => {
  // return (celsius * 9 / 5) + 32;
  // }
  return (
    <>
      <InputComp phone={toCelsius} />
      <ViewComp celsius={celsius} />
    </>
  );
};

const InputComp = (props) => {
  const [fahrenheit, setFahrenheit] = useState(0);
  return (
    <>
      <input
        type="text"
        value={fahrenheit}
        placeholder="Skriv en temperatur i fahrenheit her"
        onChange={(evt) => setFahrenheit(evt.target.value)}
      />
      <button onClick={() => props.phone(fahrenheit)}>Enter</button>
    </>
  );
};
const ViewComp = (props) => <h2>{props.celsius}</h2>;
