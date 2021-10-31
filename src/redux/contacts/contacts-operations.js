import axios from "axios";
import actions from "./contacts-actions";

axios.defaults.baseURL = "http://localhost:4000/contacts";

export const getContacts = () => async (dispatch) => {
  dispatch(actions.getContactsRequest());
  try {
    const { data } = await axios.get("/");
    dispatch(actions.getContactsSuccess(data));
  } catch (error) {
    dispatch(actions.getContactsError(error));
  }
};

// export const getContacts = () => {
//   const actionFunc = async (dispatch) => {
//     dispatch(actions.getContactsRequest());

//     try {
//       const { data } = await axios.get("/");
//       dispatch(actions.getContactsSuccess(data));
//     } catch (error) {
//       dispatch(actions.getContactsError(error));
//     }
//   };

//   return actionFunc;
// };

export const addToContacts = (contact) => {
  const actionFunc = async (dispatch, getStore) => {
    // const { contacts } = getStore();
    // const result = contacts.items.find((item) => item.title === data.title);
    // if (result) {
    // }

    dispatch(actions.addContactRequest());
    try {
      const { data } = await axios.post("/", contact);
      dispatch(actions.addContactSuccess(data));
    } catch (error) {
      dispatch(actions.addContactError(error));
    }
  };

  return actionFunc;
};

export const removeContact = (id) => {
  const actionFunc = async (dispatch) => {
    dispatch(actions.removeContactRequest());
    try {
      const removeContact = await axios.delete(`/${id}`);
      dispatch(actions.removeContactSuccess(id));
    } catch (error) {
      dispatch(actions.removeContactError(error));
    }
  };

  return actionFunc;
};

export default {
  getContacts,
  addToContacts,
  removeContact,
};
