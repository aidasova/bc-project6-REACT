import {addFreeOffice} from '../components/action/Actions';

let initialState = { 
    officeitems: [],   
    }

function reducer(state = initialState, action) {
    if(action.type === addFreeOffice) {
        let newState = {
            ...state,
            officeitems: action.payload
        }
        return (newState)
    }
   

    
      return state;
}

export default reducer;