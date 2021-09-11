import {refresh, addFreeOffice, addFreeOfficeToForm} from '../components/action/Actions';

let initialState = { 
    officeitems: [],  
    officeitemsNew: [] 
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
    if(action.type === addFreeOffice) {
        console.log(action.payload)
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