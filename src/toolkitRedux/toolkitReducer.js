import { createReducer } from "@reduxjs/toolkit";
import { actionLoadData, findContact } from "./actions";
const initialState = {
  contacts: {
    items: [],
    filter: "",
  },
};
export default createReducer(initialState, {
  [actionLoadData]: function (state, action) {
    state.contacts.items = action.payload.data.data;
  },

  [findContact]: function (state, action) {
    state.contacts.filter = action.payload.find;
  },
});
