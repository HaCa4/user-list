import axios from "axios";
import { Dispatch } from "redux";

import { SingleUser } from "../../types/types";
import { ActionNames } from "../../types/typesForRedux";

export const getUsers = () => async (dispatch: Dispatch) => {
  try {
    const res = await axios.get("https://dummyjson.com/users");
    const data: SingleUser[] = res.data.users;
    dispatch({ type: ActionNames.GET_USER_LIST, payload: data });
  } catch (error) {
    const errorMessage = "Faced with an error while fetching users: " + error;
    dispatch({ type: ActionNames.SET_ERROR, payload: errorMessage });
  }
};

export const addNewUser = (user: SingleUser) => async (dispatch: Dispatch) => {
  try {
    dispatch({ type: ActionNames.ADD_NEW_USER, payload: user });
  } catch (error) {
    const errorMessage = "Faced with an error while adding new user: " + error;
    dispatch({ type: ActionNames.SET_ERROR, payload: errorMessage });
  }
};

export const selectUser = (user: SingleUser) => (dispatch: Dispatch) => {
  dispatch({ type: ActionNames.SET_SELECTED_USER, payload: user });
};

export const openAddModal = () => {
  return { type: ActionNames.OPEN_ADD_MODAL };
};

export const closeModals = () => {
  return { type: ActionNames.CLOSE_MODALS };
};
