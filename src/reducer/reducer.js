import {
  refresh,
  addFreeOfficeToForm,
  getId,
} from "../components/action/Actions";

let initialState = {
  officeitems: [],
  officeitemsNew: [],
  officeLogin: [],
  auth: true,
};

function reducer(state = initialState, action) {
  if (action.type === refresh) {
    let newState = {
      ...state,
      officeitems: action.payload,
    };
    return newState;
  }
  if (action.type === addFreeOfficeToForm) {
    console.log(action.payload);
    let item = state.officeitems.find((item) => item.ID === action.payload);
    console.log(item);
    console.log(state.officeitemsNew);
    // state.officeitemsNew.push(item);
    if (!state.officeitemsNew) {
      state.officeitemsNew = [];
    }
    let updatedItem = [...state.officeitemsNew, item];
    console.log(updatedItem);
    let updatedState = { ...state };
    updatedState.officeitemsNew = updatedItem;

    return updatedState;
  }
  if (action.type === getId) {

    let newArray = action.payload;

    let newState = {
      officeLogin: newArray,
      auth: action.auth
    };
    console.log(newState);
    return newState;
  }
  return state;
}

export default reducer;
