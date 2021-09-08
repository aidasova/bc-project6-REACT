import {refresh, addFreeOffice, addFreeOfficeToForm} from '../components/action/Actions';

let initialState = { 
    officeitems: [],   
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
        let maxId = 0;
        state.officeitems.forEach((value) => {
            if(value.id > maxId){
                maxId = value.id
            }
        })
        action.payload.id = +maxId + 1;
        state.officeitems.push(action.payload)
        return {
            ...state, officeitems: state.officeitems
        }
    }   
    if(action.type === addFreeOffice) {
          let res = state.officeitems.map((item) => {
            if(item.id === action.payload.id) {
               return item = {...item, ...action.payload}
            }
            return item; 
           })
           return {
            ...state, officeitems: res
        }
        
    }
    
      return state;
}

export default reducer;