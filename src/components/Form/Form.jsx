import { useSelector, useDispatch } from "react-redux";
import { addToContacts } from "../../redux/contacts/contacts-operations";

import { useState } from "react";
import Label from "./Label";
import styles from "./Form.module.css";

const Form = () => {
  const [state, setState] = useState({ name: "", number: "" });
  const contacts = useSelector((store) => store.contacts.items);
  const dispatch = useDispatch();

  const addContact = (name, number) => {
    const result = contacts.find((contact) => {
      return contact.name === name || contact.number === number;
    });
    if (result) {
      alert("Number is already in contacts");
      return;
    }
    dispatch(addToContacts({ name, number }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addContact(state.name, state.number);
    setState({ name: "", number: "" });
  };
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <Label
        label="Name"
        name="name"
        value={state.name}
        callback={handleChange}
      />
      <Label
        label="Number"
        name="number"
        value={state.number}
        callback={handleChange}
      />
      <button className={styles.formButton} type="submit">
        Add contact
      </button>
    </form>
  );
};

export default Form;
