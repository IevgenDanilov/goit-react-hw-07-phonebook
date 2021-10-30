import { createAction } from "@reduxjs/toolkit";

const setFilter = createAction("contacts/filter");

const getContactsRequest = createAction("contacts/getRequest");
const getContactsSuccess = createAction("contacts/getSuccess");
const getContactsError = createAction("contacts/getError");

const addContactRequest = createAction("contacts/addRequest");
const addContactSuccess = createAction("contacts/addSuccess");
const addContactError = createAction("contacts/addError");

const removeContactRequest = createAction("contacts/removeRequest");
const removeContactSuccess = createAction("contacts/removeSuccess");
const removeContactError = createAction("contacts/removeError");

export default {
  setFilter,
  getContactsRequest,
  getContactsSuccess,
  getContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  removeContactRequest,
  removeContactSuccess,
  removeContactError,
};
