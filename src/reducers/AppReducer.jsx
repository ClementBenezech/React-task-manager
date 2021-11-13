import produce from 'immer';
import { initialState } from '../constants/constants';


   // Use the initialState as a default value
   export default function AppReducer(state = initialState, action) {
     // The reducer normally looks at the action type field to decide what happens  
     switch (action.type) {  
        //Normal Update
        case 'Something/doSomething' : {
           return {
                ...state,
                    property: action.payload
            }
        }

        //Update with immer
        case 'something/doSomething' : {
            return produce(state, draft => {
                draft.property = action.payload
            })   
        }

       default:      
       // If this reducer doesn't recognize the action type, or doesn't      
       // care about this specific action, return the existing state unchanged 
       return state 
   }}