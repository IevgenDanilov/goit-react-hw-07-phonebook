import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";

import {
  getContacts,
  removeContact,
} from "../../redux/contacts/contacts-operations";

import styles from "./ContactsList.module.css";

const ContactsList = () => {
  const dispatch = useDispatch();
  const [newList, setNewList] = useState([]);
  const contacts = useSelector((state) => state.contacts.items);
  const filter = useSelector((state) => state.contacts.filter);

  useEffect(() => {
    const actionFunc = getContacts();
    dispatch(actionFunc);
  }, [dispatch]);

  useEffect(() => {
    const newList = contacts.filter((item) => {
      const result = item.name.toLowerCase().includes(filter.toLowerCase());
      if (result) {
        return result;
      } else {
        return item.number.includes(filter);
      }
    });
    setNewList(newList);
  }, [contacts, filter]);

  const onDelete = (id) => {
    dispatch(removeContact(id));
  };
  if (newList.length !== 0) {
    const listMarkup = newList.map((item) => {
      const { name, number } = item;
      return (
        <li key={item.id} className={styles.item}>
          {name}: {number}
          <button
            type="button"
            className={styles.button}
            key={item.id}
            id={item.id}
            onClick={() => {
              onDelete(item.id);
            }}
          >
            Delete
          </button>
        </li>
      );
    });
    return <ul>{listMarkup}</ul>;
  } else {
    return <p>Nothing found</p>;
  }
};
export default ContactsList;
