import { createAction } from "@reduxjs/toolkit";
import types from "./types";

export const addToContacts = createAction(types.ADD_TO_CONTACTS);
export const removeFromContacts = createAction(types.REMOVE_FROM_CONTACTS);
export const setFilter = createAction(types.SET_FILTER);
