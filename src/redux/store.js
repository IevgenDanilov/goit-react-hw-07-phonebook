import { configureStore } from "@reduxjs/toolkit";

import {
  rootReducer,
  reducerContacts,
  reducerFilter,
} from "./contacts/contacts-reducer";

const store = configureStore({
  reducer: {
    contacts: rootReducer,
  },
});

export default store;
