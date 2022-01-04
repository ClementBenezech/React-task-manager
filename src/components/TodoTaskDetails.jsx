import { useSelector } from "react-redux"
import '../styles/todo.scss'
import { useDispatch } from "react-redux"
import DatePicker from '@mui/lab/DatePicker';
import { TextField } from "@mui/material";
import { useState } from "react";
import { useRef, useEffect } from "react";
import {format} from 'date-fns'
import { getTaskStyle } from "../utils/getTaskStyle";
import { withTheme } from "@emotion/react";


const TodoTaskDetails = () => {

    const dispatch = useDispatch();
    const inputRef = useRef()
    const [descriptionHasBeenSaved, setDescriptionHasBeenSaved] = useState(false)
    const [numberOfSaves, setNumberOfSaves] = useState(0)
    const statusIcons = [{status: "open", icon: "far fa-clock"}, {status: "close", icon: "far fa-check-circle"}  ]
    const currentTask = useSelector(state => state.selectedTask)
    const todoTasksList = useSelector(state => state.todoTasksList)
    const currentTaskContent = useSelector(state => state.todoTasksList.filter(task => task.id === parseInt(currentTask))[0])
    /*const currentTaskContent = todoTasksList.filter(task => task.id === parseInt(currentTask))[0]*/
    const [descriptionInputValue, setDescriptionInputValue] = useState(todoTasksList.filter(currentTaskContent !== undefined ? () => {return currentTaskContent.description} : () => {return ''}))
    
    
    useEffect(()=> {
            if (currentTaskContent) {
            setDescriptionInputValue(currentTaskContent.description)
            }
    }, [currentTaskContent])

    useEffect(() => {
        if (descriptionHasBeenSaved === true) {
            inputRef.current.classList.remove('todo__task-details__description--saved')
            inputRef.current.classList.add('todo__task-details__description--saved')
            setDescriptionHasBeenSaved(false)
        }
    },[descriptionHasBeenSaved])

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

                {/*<div className = "todo__completion-message">{todoTasksList.filter(element => element.status === "close").length + " Tasks completed out of " + todoTasksList.length}</div>*/}
                <button className = 'todo__task-details__deselect-task' onClick = {(e)=> {
                    dispatch({type: 'todo/selectTask', payload: null})
                }}><i class="far fa-times-circle"></i></button>
            </div>
    } else {
        return null
    }

    
}
export default TodoTaskDetails