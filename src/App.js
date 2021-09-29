import "./App.css";
import React, { useState } from "react";
// import { uuid } from uuidv4;

function App() {
  const [inputList, setInputList] = useState([{ firstName: "", lastName: "" }]);

  // handle input change
  const inputHandler = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = (index) => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { firstName: "", lastName: "" }]);
  };

  return (
    <div className="wrapper">
      <div className="header">
      <h3>Employee Manager</h3>
      </div>
      <div className="main-containt">
        <div className="aside">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#clients">Clients</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="section">
        <div className="tableFormat">
          <table>
            <thead>
              <tr className="trHead">
                <th>First Name</th>
                <th>Last Name</th>
              </tr>
            </thead>
            <tbody>
              {inputList.map((element, i) => (
                <tr key={i}>
                  <td>{element.firstName}</td>
                  <td>{element.lastName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      <div className="inputSection">
        {inputList.map((element, i) => {
          return (
            <div className="box">
              <input
                name="firstName"
                placeholder="Enter First Name"
                value={element.firstName}
                onChange={(e) => inputHandler(e, i)}
              />
              <input
                className="ml10"
                name="lastName"
                placeholder="Enter Last Name"
                value={element.lastName}
                onChange={(e) => inputHandler(e, i)}
              />
              <div className="btn-box">
                {inputList.length !== 1 && (
                  <button className="mr10" onClick={() => handleRemoveClick(i)}>
                    Remove
                  </button>
                )}
                {inputList.length - 1 === i && (
                  <button onClick={handleAddClick}>Add</button>
                )}
              </div>
            </div>
          );
        })}
      </div>
      </div>
      </div>
    </div>
  );
}

export default App;
