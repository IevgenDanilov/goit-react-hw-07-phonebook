import { nanoid } from "nanoid";
import { createReducer } from "@reduxjs/toolkit";
// import { combineReducers } from "redux";

import { addToContacts, removeFromContacts, setFilter } from "./actions";

const initialStore = {
  contacts: {
    items: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  },
};
export const reducerContacts = createReducer(initialStore.contacts.items, {
  [addToContacts]: (store, { payload }) => {
    const newContact = { ...payload, id: nanoid() };
    return [...store, newContact];
  },
  [removeFromContacts]: (store, { payload }) => {
    const updateContacts = store.filter((item) => item.id !== payload);
    return updateContacts;
  },
});
export const reducerFilter = createReducer(initialStore.contacts.filter, {
  [setFilter]: (store, { payload }) => {
    return payload;
  },
});
// const rootReducer = combineReducers({
//   items: reducerContacts,
//   filter: reducerFilter,
// });
