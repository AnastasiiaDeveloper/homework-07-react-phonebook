import { createAction } from "@reduxjs/toolkit";
import { getApiPhone } from "./../reqToServer/serverApi";

export const actionLoadData = createAction(
  "ACTION_DATA",
  function prepare(data) {
    return {
      payload: {
        data,
      },
    };
  }
);

export const findContact = createAction("FILTER", function prepare(find) {
  return {
    payload: {
      find,
    },
  };
});
export const addContactThunk = (p1, p2) => {
  return async (dispatch) => {
    try {
      await new getApiPhone().addPost(p1, p2);
      const data = await new getApiPhone().getList();
      return dispatch(actionLoadData(data));
    } catch {
      console.log("error add cont");
    }
  };
};
export const deletContactThunk = (id) => {
  return async (dispatch) => {
    try {
      await new getApiPhone().deletCont(id);
      const data = await new getApiPhone().getList();
      return dispatch(actionLoadData(data));
    } catch {
      console.log("error delet cont");
    }
  };
};
export const loadDataStartApp = () => {
  return async (dispatch) => {
    try {
      const data = await new getApiPhone().getList();
      return dispatch(actionLoadData(data));
    } catch {
      console.log("error get list");
    }
  };
};
