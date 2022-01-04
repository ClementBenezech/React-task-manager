import { useSelector } from "react-redux"
import '../styles/todo.scss'
import { useDispatch } from "react-redux"
import DatePicker from '@mui/lab/DatePicker';
import { TextField } from "@mui/material";
import { useState } from "react";
import { useRef, useEffect } from "react";
import {format} from 'date-fns'
import { getTaskStyle } from "../utils/getTaskStyle";

/*** This component takes no props and returns a Task card JSX element.
 * It uses the state to identify and render the selected Task details.
 * @return { JSX.Element }
 */


const TodoTaskDetails = () => {

    // Declaring a useDispatch hook to interact with the reducer.
    const dispatch = useDispatch();
    
    /* Declaring localStates: 
    - a flag to indicate the description was just saved
    - a "number of times content was saved" int value. Thiw will be used to generate a unique key for the description input*/
    const [descriptionHasBeenSaved, setDescriptionHasBeenSaved] = useState(false)
    const [numberOfSaves, setNumberOfSaves] = useState(0)
    // Setting up useSelector hooks to subscribe to store updates
    const currentTask = useSelector(state => state.selectedTask)
    const todoTasksList = useSelector(state => state.todoTasksList)
    const currentTaskContent = useSelector(state => state.todoTasksList.filter(task => task.id === parseInt(currentTask))[0])
   
    // Declaring a Ref to be able to access the task description field in the dom and handle side effects
    const inputRef = useRef()
    // Declaring a local state to control the description text field.
    const [descriptionInputValue, setDescriptionInputValue] = useState(todoTasksList.filter(currentTaskContent !== undefined ? () => {return currentTaskContent.description} : () => {return ''}))
    
    // SIDE_EFFECT: Whenever the currentTaskContent changes, we update the description displayed by the dedicated input textarea.
    useEffect(()=> {
            if (currentTaskContent) {
            setDescriptionInputValue(currentTaskContent.description)
            }
    }, [currentTaskContent])

    //SIDE_EFFECT: Whenever a new description has been saved, provide the user with some feedback from the UI.
    //The Textarea will 'bump' to indicate the content has been saved.
    useEffect(() => {
        if (descriptionHasBeenSaved === true) {
            inputRef.current.classList.remove('todo__task-details__description--saved')
            inputRef.current.classList.add('todo__task-details__description--saved')
            setDescriptionHasBeenSaved(false)
        }
    },[descriptionHasBeenSaved])

    //Only if there is there is a selected task with valid content in the state do we render content
    if (currentTaskContent !== undefined) {
        return <div className = "todo__task-details">
                <div className = "todo__task-details__title">{currentTaskContent.title}</div>
                
                <div className = "todo__task-details__information-container">
                <div className = "todo__task-details__labels">Deadline</div>
                <DatePicker className = "todo__task-details__deadline"
                label=""
                value={currentTaskContent.deadline}
                onChange={(newValue) => {
                    dispatch({type: 'todo/setTaskDeadLine', payload: {'id': currentTaskContent.id, 'date': format(newValue, 'MM/dd/yyyy') }})
                }}
                renderInput={(params) => <TextField variant="standard" sx={{ input: { color: '#18003f', fontWeight:"bold", textAlign: 'center'}}} {...params} />}
                />
                    
                </div>

                <div className = "todo__task-details__information-container">
                    <div className = "todo__task-details__labels">Status</div>
                    <i className = {"todo__task-details__status "+ getTaskStyle(currentTaskContent).icon} style = {{'color': getTaskStyle(currentTaskContent).color}}></i>
                    
                </div>

                <textarea key = {currentTaskContent.id+numberOfSaves} ref ={inputRef} value = {descriptionInputValue} type = "text" className = "todo__task-details__description" onChange = {(e) => {
                    setDescriptionInputValue(e.target.value)
                }}></textarea>

                <button className = 'todo__task-details__submit-description' onClick = {()=> {
                     dispatch({type: 'todo/setTaskDescription', payload: {'id': currentTaskContent.id, 'description': descriptionInputValue }})
                     setNumberOfSaves(numberOfSaves + 1)
                     setDescriptionHasBeenSaved(true)
                }}><i class="far fa-save"></i></button>

                <button className = 'todo__task-details__deselect-task' onClick = {(e)=> {
                    dispatch({type: 'todo/selectTask', payload: null})
                }}><i class="far fa-times-circle"></i></button>
            </div>
    } else {
        //Meaning, no selected task content was found
        return null
    }

    
}
export default TodoTaskDetails