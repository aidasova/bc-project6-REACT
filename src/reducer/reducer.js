import {
  refresh,
  addFreeOfficeToForm,
  getId,
} from "../components/action/Actions";

let initialState = {
  officeitems: [],
  officeitemsNew: [],
  officeLogin: [],
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
    state.officeitemsNew.push(item);
    console.log(state.officeitemsNew);
  }
  if (action.type === getId) {
    console.log(action.payload);
    console.log(state);
    let newState = {
      ...state,
      officeLogin: action.payload,
    };
    console.log(newState);
    return newState;
  }
  return state;
}

export default reducer;
