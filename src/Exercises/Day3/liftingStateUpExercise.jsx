import React, { useState, useEffect } from "react";
import uuid from "react-uuid";
import Table from "react-bootstrap/Table";

export const LiftingStateUpExerciseExercise = () => {
  const [personList, setPersonList] = useState([]);
  const [person, setPerson] = useState({ id: "", name: "" });

  const addToPersonList = (newPerson) => {
    //Check if id is in list, if it does - replace on the same index
    //personlist[i] = newPerson
    //Personlist[i].name = newPerson.name
    if (newPerson.id) {
      for (let i = 0; i < personList.length; i++) {
        if (personList[i].id == newPerson.id) {
          personList.splice(i, 1, newPerson);
          setPersonList([...personList]);
        }
      }
    } else {
      newPerson.id = uuid();
      setPersonList([...personList, newPerson]);
    }
  };

  const removePersonFromList = (event) => {
    const id = event.target.id;
    const newArray = personList.filter((person) => !(id == person.id));
    setPersonList([...newArray]);
  };

  const editPerson = (event) => {
    const index = event.target.value;
    setPerson(personList[index]);
  };
  return (
    <>
      <h1>Lifting state up exercise</h1>
      <ViewList
        personList={personList}
        removePerson={removePersonFromList}
        editPerson={editPerson}
      />
      <AddPersonComponent callback={addToPersonList} person={person} />
    </>
  );
};

const ViewList = (props) => {
  return (
    <>
      <h2>All persons</h2>

      <Table striped bordered hover size="sm">
        {props.personList.length > 0 && (
          <tr key={uuid()}>
            {Object.keys(props.personList[0]).map((header, index) => {
              return <th key={index}>{header}</th>;
            })}
          </tr>
        )}
        {props.personList.map((person, index) => {
          return (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.name}</td>
              <td>
                <button id={person.id} onClick={props.removePerson}>
                  Remove person
                </button>
                <button value={index} onClick={props.editPerson}>
                  Edit person
                </button>
              </td>
            </tr>
          );
        })}
      </Table>
    </>
  );
};

const AddPersonComponent = (props) => {
  const [person, setPerson] = useState(props.person);

  const change = (evt) => {
    const target = evt.target;
    const id = target.id;
    person[id] = target.value;
    setPerson({ ...person });
  };

  const resetPerson = () => {
    setPerson({ id: "", name: "" });
  };
  useEffect(() => {
    setPerson(props.person);
  }, [props.person]);

  return (
    <>
      <h2>New person</h2>
      <input
        type="text"
        value={person.name}
        id="name"
        placeholder="enter name"
        onChange={change}
      />
      <button
        onClick={() => {
          props.callback(person);
          resetPerson();
        }}
      >
        Save
      </button>
    </>
  );
};
