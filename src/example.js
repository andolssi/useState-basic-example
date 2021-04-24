import React from "react";
import { useState } from "react";
import { data } from "./data";

// useState Exemples--------

const ErrorExample = () => {
  const [people, setPeople] = useState(data);

  const [person, setPerson] = useState({
    name: "peter",
    age: 24,
    messege: "Random massege!!!",
  });

  const changeMessage = () => {
    if (person.messege === "I Got u !!") {
      setPerson({ ...person, messege: "Random massege!!!" });
    } else {
      setPerson({ ...person, messege: "I Got u !!" });
    }
  };

  const removeItem = (id) => {
    const buttonC = document.getElementById("btnn");
    let newPeople = people.filter((person) => person.id !== id);
    if (newPeople.length === 0) {
      buttonC.innerText = "Refresh";
    }
    setPeople(newPeople);
  };
  return (
    <>
      <h1>useState Exercice</h1>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button
              onClick={() => {
                removeItem(id);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        className="btn"
        id="btnn"
        onClick={() => {
          const buttonC = document.getElementById("btnn");
          if (buttonC.innerText === "Clear Items") {
            setPeople([]);
            buttonC.innerText = "Refresh";
          } else {
            setPeople(data);
            buttonC.innerText = "Clear Items";
          }
        }}
      >
        Clear Items
      </button>
      <br />
      <br />
      <h3>{person.name}</h3>
      <h3>{person.age}</h3>
      <h4>{person.messege}</h4>
      <button className="btn" onClick={changeMessage}>
        Change Message
      </button>
    </>
  );
};

export default ErrorExample;
