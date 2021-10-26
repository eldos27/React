import React, { useState } from "react";
import "./AddContact.css";

const AddContact = (props) => {
  const [contact, setContact] = useState("");
  const [number, setNumber] = useState("");
  const [image, setImage] = useState("");

  const handleInput = (e) => {
    setContact(e.target.value);
  };
  const handleInputNum = (e) => {
    setNumber(e.target.value);
  };

  const handleInputImg = (e) => {
    setImage(e.target.value);
  };

  const handleAdd = () => {
    const newcontact = {
      contact,
      number,
      image,
      id: Date.now(),
    };
    props.handleContact(newcontact);
    console.log(newcontact);
    setContact("");
    setNumber("");
    setImage("");
  };

  return (
    <div className="addContact">
      <input
        className="inputsStyle"
        placeholder="Enter the name"
        value={contact}
        onChange={handleInput}
        type="text"
      />

      <input
        className="inputsStyle"
        placeholder="Enter the number"
        value={number}
        onChange={handleInputNum}
        type="number"
      />
      <input
        className="inputsStyle"
        placeholder="Enter image url"
        value={image}
        onChange={handleInputImg}
        type="text"
      />
      <button className="buttonStyle" onClick={handleAdd}>
        Create contact
      </button>
    </div>
  );
};

export default AddContact;
