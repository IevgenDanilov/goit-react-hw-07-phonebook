import { configureStore } from "@reduxjs/toolkit";

import { reducerContacts, reducerFilter } from "./reducer";

const store = configureStore({
  reducer: {
    items: reducerContacts,
    filter: reducerFilter,
  },
});

export default store;
