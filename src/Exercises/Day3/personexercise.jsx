import React, { useState, useEffect } from "react";
import uuid from "react-uuid";

export const PersonExercise = () => {
  const initialList = [
    { name: "name1", age: 1 },
    { name: "name2", age: 2 },
  ];
  const [personList, setPersonList] = useState(initialList);

  const addToPersonList = (newPerson) => {
    setPersonList([...personList, newPerson]);
  };
  return (
    <>
      <ViewList personList={personList} />
      <AddPersonComponent callback={addToPersonList} />
    </>
  );
};

const ViewList = (props) => {
  return (
    <ul>
      {props.personList.map((person) => {
        return (
          <li key={uuid()}>
            {person.name} & {person.age}
          </li>
        );
      })}
    </ul>
  );
};

const AddPersonComponent = (props) => {
  const defaultPerson = { name: "", age: "" };
  const [person, setPerson] = useState(defaultPerson);

  const change = (evt) => {
    const target = evt.target;
    const id = target.id;
    person[id] = target.value;
    setPerson({ ...person });
  };

  return (
    <>
      <input
        type="text"
        value={person.name}
        id="name"
        placeholder="enter name"
        onChange={change}
      />
      <input
        type="number"
        value={person.age}
        id="age"
        placeholder="enter age"
        onChange={change}
      />
      <button
        onClick={() => {
          props.callback(person);
          setPerson(defaultPerson);
        }}
      >
        Enter
      </button>
    </>
  );
};
