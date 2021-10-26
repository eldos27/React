import React, { useState } from "react";
import "./EditModal.css";

const EditModal = (props) => {
  let [item, setItem] = useState(props.editContact);

  function handleEditInput(e) {
    let newObj = {
      ...item,
      contact: e.target.value,
    };
    setItem(newObj);
  }
  function handleEditInputNum(e) {
    let newObj = {
      ...item,
      number: e.target.value,
    };
    setItem(newObj);
  }
  function handleEditInputImg(e) {
    let newObj = {
      ...item,
      image: e.target.value,
    };
    setItem(newObj);
  }

  function handleSave() {
    props.handleSaveContact(item);
  }

  return (
    <>
      <div className="main-modal">
        <div className="inner-modal">
          <span>Edit contact</span>
          <div className="close">
            <button
              className="btn-close"
              onClick={props.handleCloseModal}
            ></button>
          </div>
          <div className="inputs">
            <input
              onChange={handleEditInput}
              type="text"
              value={item.contact}
              className="inp-edit"
            />
            <input
              onChange={handleEditInputNum}
              type="number"
              value={item.number}
              className="inp-edit"
            />
            <input
              onChange={handleEditInputImg}
              type="text"
              value={item.image}
              className="inp-edit"
            />

            <button className="btn-save" onClick={handleSave}>
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditModal;
