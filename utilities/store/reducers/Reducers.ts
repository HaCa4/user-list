import { ActionNames, Actions } from "../../types/typesForRedux";

export const initialState = {
  reducer: {
    userList: [],
    selectedUser: {},
    isAddNewUserModalOpen: false,
    isUserDetailModalOpen: false,
    error: undefined,
  },
};

const Reducers = (state = initialState, action: Actions) => {
  switch (action.type) {
    case ActionNames.GET_USER_LIST:
      return {
        ...state,
        userList: action.payload,
        error: undefined,
      };
    case ActionNames.ADD_NEW_USER:
      const newList = state.reducer.userList;
      return {
        ...state,
        userList: [...state.reducer.userList, action.payload],
        error: undefined,
      };
    case ActionNames.SET_SELECTED_USER:
      return {
        ...state,
        selectedUser: action.payload,
        isUserDetailModalOpen: true,
      };
    case ActionNames.OPEN_ADD_MODAL:
      return {
        ...state,
        isAddNewUserModalOpen: true,
      };
    case ActionNames.CLOSE_MODALS:
      return {
        ...state,
        isAddNewUserModalOpen: false,
        isUserDetailModalOpen: false,
      };
    case ActionNames.SET_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default Reducers;
