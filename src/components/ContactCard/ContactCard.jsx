import React from "react";
import "./ContactCard.css";

const ContactCard = (props) => {
  return (
    <div className="contactCard">
      {props.contacts.map((item, index) => (
        <p key={item.id} className={item.status ? "completed" : ""}>
          <img className="imageCard" src={item.image} alt="" />
          <div>{item.contact}</div>
          <div>{item.number}</div>
          <div className="btn-flex">
            <button className="btn" onClick={() => props.handleDelete(item.id)}>
              Delete
            </button>
            <button className="btn" onClick={() => props.handleEdit(index)}>
              Edit
            </button>
          </div>
        </p>
      ))}
    </div>
  );
};

export default ContactCard;
