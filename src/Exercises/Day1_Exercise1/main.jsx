import upper, {text1,text2, text3} from "./file1.js";
import person, {males,females} from "./file2.js";
import * as file3 from "./file3.js";
import React from 'react';

export function Main() {
    const {firstName,email} = person;
    const example1 = [...males,...females];
    console.log(example1.toString());
    const example2 = [...males,"Kurt","Helle",...females,"Tina"];
    console.log(example2.toString());
    const {email: newEmail,firstName: newFirstName,gender,lastName} = person;
    const personV2 = {email: newEmail,firstName: newFirstName, friends: [...males,...females], gender,lastName,phone: 123456};
    console.log(personV2);
    return (
      <div>
        <h2>Ex 1</h2>
        <p>{text1}</p>
        <p>{text2}</p>
        <p>{text3}</p>
        <p>{upper("please uppercase me")}</p>
        <h2>Ex 2</h2>
        <p>{firstName} & {email}</p>
        <h2><file3.MultiWelcome/></h2>
      </div>
    );
  }