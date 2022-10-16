import { SingleUser } from "./types";

type GetUsers = {
  type: ActionNames.GET_USER_LIST;
  payload: SingleUser[];
};
type AddNewUser = {
  type: ActionNames.ADD_NEW_USER;
  payload: SingleUser[];
};
type SelectUser = {
  type: ActionNames.SET_SELECTED_USER;
  payload: SingleUser;
};
type OpenAddModal = {
  type: ActionNames.OPEN_ADD_MODAL;
};
type CloseModals = {
  type: ActionNames.CLOSE_MODALS;
};
type SetError = {
  type: ActionNames.SET_ERROR;
  payload: string;
};

export type Actions = AddNewUser | GetUsers | SelectUser | CloseModals | OpenAddModal | SetError;

export enum ActionNames {
  GET_USER_LIST = "GET_USER_LIST",
  ADD_NEW_USER = "ADD_NEW_USER",
  SET_SELECTED_USER = "SET_SELECTED_USER",
  OPEN_ADD_MODAL = "OPEN_ADD_MODAL",
  CLOSE_MODALS = "CLOSE_MODALS",
  SET_ERROR = "SET_ERROR",
}

export interface InitialState {
  reducer: {
    userList: SingleUser[];
    selectedUser: SingleUser;
    isAddNewUserModalOpen: boolean;
    isUserDetailModalOpen: boolean;
    error: string;
  };
}
