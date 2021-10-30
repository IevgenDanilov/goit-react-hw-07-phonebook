// import { nanoid } from "nanoid";
import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";

import actions from "./contacts-actions";

const initialStore = {
  contacts: {
    items: [
      // { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      // { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      // { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      // { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  },
};

// const itemsReducer = createReducer([], {
//   [actions.getBooksSuccess]: (_, { payload }) => payload,
//   [actions.addBookSuccess]: (store, { payload }) => {
//     store.push(payload);
//   },
//   [actions.removeBookSuccess]: (store, { payload }) => {
//     const idx = store.findIndex(({ id }) => id === payload);
//     store.splice(idx, 1);
//   },
// });

export const reducerContacts = createReducer(initialStore.contacts.items, {
  [actions.getContactsSuccess]: (_, { payload }) => payload,
  [actions.addContactSuccess]: (store, { payload }) => {
    const newContact = { ...payload };
    return [...store, newContact];
  },
  [actions.removeContactSuccess]: (store, { payload }) => {
    const updateContacts = store.filter((item) => item.id !== payload);
    return updateContacts;
  },
});

const loadingReducer = createReducer(false, {
  [actions.getContactsRequest]: () => true,
  [actions.getContactsSuccess]: () => false,
  [actions.getContactsError]: () => false,
});

const errorReducer = createReducer(null, {
  [actions.getContactsSuccess]: () => null,
  [actions.getContactsError]: (_, payload) => payload,
});

export const reducerFilter = createReducer(initialStore.contacts.filter, {
  [actions.setFilter]: (store, { payload }) => {
    return payload;
  },
});

export const rootReducer = combineReducers({
  items: reducerContacts,
  filter: reducerFilter,
  loading: loadingReducer,
  error: errorReducer,
});
