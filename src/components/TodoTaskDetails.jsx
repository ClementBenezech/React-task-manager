import { useSelector } from "react-redux"
import '../styles/todo.scss'
import { useDispatch } from "react-redux"
import DatePicker from '@mui/lab/DatePicker';
import { TextField } from "@mui/material";
import { useState } from "react";
import { useRef, useEffect } from "react";
import {format} from 'date-fns'


const TodoTaskDetails = () => {

    const dispatch = useDispatch();

    const inputRef = useRef()

    const statusIcons = [{status: "open", icon: "far fa-clock"}, {status: "close", icon: "far fa-check-circle"}  ]

    const currentTask = useSelector(state => state.selectedTask)

    const todoTasksList = useSelector(state => state.todoTasksList)

    const currentTaskContent = todoTasksList.filter(task => task.id === parseInt(currentTask))[0]

    const [descriptionInputValue, setDescriptionInputValue] = useState(todoTasksList.filter(currentTaskContent !== undefined ? () => {return currentTaskContent.description} : () => {return ''}))

    const getStatusIcon = (status) => {
            return statusIcons.filter(icon => icon.status === status)[0].icon
    }

    useEffect(()=> {
            if (currentTaskContent) {
                console.log(currentTaskContent)
            setDescriptionInputValue(currentTaskContent.description)
            }
    }, [currentTaskContent])

    if (currentTaskContent !== undefined) {
        return <div className = "todo__task-details">
                <div className = "todo__task-details__title">{currentTaskContent.title}</div>
                
                <div className = "todo__task-details__information-container">
                <div className = "todo__task-details__labels">Deadline</div>
                <DatePicker className = "todo__task-details__deadline"
                label="Pick a date"
                value={currentTaskContent.deadline}
                onChange={(newValue) => {
                    dispatch({type: 'todo/setTaskDeadLine', payload: {'id': currentTaskContent.id, 'date': format(newValue, 'MM/dd/yyyy') }})
                }}
                renderInput={(params) => <TextField {...params} />}
                />
                    
                </div>

                <div className = "todo__task-details__information-container">
                    <div className = "todo__task-details__labels">Status</div>
                    <i className = {"todo__task-details__status "+ getStatusIcon(currentTaskContent.status)}></i>
                </div>

                <textarea ref ={inputRef} value = {descriptionInputValue} type = "text" className = "todo__task-details__description" onChange = {(e) => {
                    setDescriptionInputValue(e.target.value)
                }}></textarea>

                <button className = 'todo__task-details__submit-description' onClick = {()=> {
                     dispatch({type: 'todo/setTaskDescription', payload: {'id': currentTaskContent.id, 'description': descriptionInputValue }})
                }}><i class="far fa-save"></i></button>

                <div className = "todo__completion-message">{todoTasksList.filter(element => element.status === "close").length + " Tasks completed out of " + todoTasksList.length}</div>

            </div>
    } else {
        return <div className = "todo__task-details"></div>
    }

    
}
export default TodoTaskDetails