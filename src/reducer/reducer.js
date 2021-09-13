import {refresh, addFreeOfficeToForm} from '../components/action/Actions';

let initialState = { 
    officeitems: [],  
    officeitemsNew: [],
    // officeForm: []
    }

function reducer(state = initialState, action) {
    if(action.type === refresh) {
        let newState = {
            ...state,
            officeitems: action.payload
        }
        return (newState)
    }
    if(action.type === addFreeOfficeToForm) { 
      console.log(action.payload)
      let item = state.officeitems.find(item => item.ID === action.payload);
        console.log(item) 
        state.officeitemsNew.push(item)
        console.log(state.officeitemsNew)
    }   

   
      return state;
}

export default reducer;