import produce from 'immer';
import { initialState } from '../constants/constants';
import format from 'date-fns/format'


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

        //Adding new task
        case 'todo/addTask' : {
            
            const highestIdInArray = () => {

                let highest = 0;
                state.todoTasksList.forEach(task => {
                    console.log(task.id);
                    console.log(highest);
                    if (parseInt(task.id) > highest) {
                        highest = task.id
                        console.log("greaterId is "+highest)
                    }
                })
                return highest
            }

            return produce(state, draft => {
                
                draft.todoTasksList.push({'id': highestIdInArray()+1, 'title': action.payload, 'description': "You can add a description here, or set a Deadline for your task!", 'status': 'open', deadline: format(Date.now(), 'MM/dd/yyyy') })
            })   
        }

        //Changing task status
        case 'todo/toggleTaskStatus' : {
            return produce(state, draft => {
                if (state.todoTasksList[action.payload].status === 'open') {
                    draft.todoTasksList[action.payload].status = 'close'
                } else {
                    draft.todoTasksList[action.payload].status = 'open'
                }
                
            })   
        }

        //Delete task
        case 'todo/deleteTask' : {
            return produce(state, draft => {
                console.log("DELETETASK:"+action.payload)
                console.log(state.todoTasksList.findIndex(task => task.id === parseInt(action.payload)))
                draft.todoTasksList.splice(state.todoTasksList.findIndex(task => task.id === parseInt(action.payload)), 1)
            })   
        }

        //Select the current selected task
        case 'todo/selectTask' : {
            return produce(state, draft => {
                draft.selectedTask = action.payload;
            })   
        }

        //Select the current selected task
        case 'todo/setTaskDeadLine' : {
            return produce(state, draft => {              
                draft.todoTasksList[state.todoTasksList.findIndex(task => task.id === parseInt(action.payload.id))].deadline = action.payload.date
            })   
        }

        //Select the current selected task
        case 'todo/setTaskDescription' : {
            return produce(state, draft => {              
                draft.todoTasksList[state.todoTasksList.findIndex(task => task.id === parseInt(action.payload.id))].description = action.payload.description
            })   
        }

        
        

       default:      
       // If this reducer doesn't recognize the action type, or doesn't      
       // care about this specific action, return the existing state unchanged 
       return state 
   }}