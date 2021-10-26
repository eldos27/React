import React, { useState } from "react";
import AddContact from "../AddContact/AddContact";
import ContactCard from "../ContactCard/ContactCard";
import EditModal from "../EditModal/EditModal";

const ContactList = () => {
  let [contacts, setContacts] = useState([]);
  let [modal, setModal] = useState(false);
  let [editContact, setEditContact] = useState({});

  function handleContact(newObj) {
    let newcontacts = [...contacts];

    newcontacts.push(newObj);
    setContacts(newcontacts);
  }

  function changeStatus(id) {
    const newcontacts = contacts.map((item) => {
      if (item.id === id) {
        item.status = !item.status;
      }
      return item;
    });

    setContacts(newcontacts);
  }
  function handleDelete(id) {
    let newContacts = contacts.filter((item) => {
      return item.id !== id;
    });
    setContacts(newContacts);
  }

  function handleEdit(index) {
    setModal(true);
    setEditContact(contacts[index]);
  }

  function handleSaveContact(elem) {
    const newContacted = contacts.map((item) => {
      if (item.id === elem.id) {
        return elem;
      }
      return item;
    });

    setContacts(newContacted);
    setModal(false);
  }

  function handleCloseModal() {
    setModal(false);
  }

  return (
    <div className="app">
      <AddContact handleContact={handleContact} />

      <ContactCard
        handleEdit={handleEdit}
        contacts={contacts}
        changeStatus={changeStatus}
        handleDelete={handleDelete}
      />
      {modal ? (
        <EditModal
          editContact={editContact}
          handleSaveContact={handleSaveContact}
          handleCloseModal={handleCloseModal}
        />
      ) : null}
    </div>
  );
};

export default ContactList;
