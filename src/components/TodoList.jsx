import { useSelector, useDispatch } from "react-redux"
import { useState, useRef } from "react"
import React from "react"
import '../styles/todo.scss'
import { useEffect } from "react"
import format from "date-fns/format"
import { compareAsc } from "date-fns"

const TodoList = () => {

    const inputRef = useRef()
    const dispatch = useDispatch()
    const [taskInputValue, setTaskInputValue] = useState('')
    const taskList = useSelector(state => state.todoTasksList)
    const [hasBeenAdded, setHasBeenAdded] = useState(false)

    const getTaskStyle = (task) => {

        const statusIcons = [{status: "open", icon: "far fa-clock", color: '#9000fc'}, {status: "close", icon: "far fa-check-circle", color: 'green'}  ]

        const deadlineIsExpired = compareAsc(new Date((format(Date.now(), 'MM/dd/yyyy'))), new Date(task.deadline))
        
        if (deadlineIsExpired === 1 && task.status === 'close') {
            return statusIcons.filter(icon => icon.status === task.status)[0]
        } else if (deadlineIsExpired === 1 && task.status === 'open')  {
            return {icon: "fas fa-fire", color: "red"}
        } else {
            return statusIcons.filter(icon => icon.status === task.status)[0]
        }
    }

    const tasksReactElement = taskList.map(task => {
        return( 
        <div className = {'todo__task todo__task--'+task.status} key = {task.id} id = {task.id} onClick={(e) => {
                        dispatch({type: 'todo/selectTask', payload: e.target.id})}} >
                        <i title = {task.id} className="fas fa-minus-circle todo__task__delete-icon" onClick = {(e) => {
                            e.stopPropagation();
                            dispatch({type: 'todo/deleteTask', payload: e.target.title})

                        }}></i>
                        <div id = {task.id+"_title"} className = "todo__task__title"  >{task.title}</div>
                        <div id = {task.id+"_status"} className = {'todo__task__status todo__task__status--'+task.status} style = {{'background-color': getTaskStyle(task).color}} onClick = {(e)=> {
                        dispatch({type: 'todo/toggleTaskStatus', payload: taskList.findIndex(task => task.id === parseInt(e.target.id))})
                        }}>
                            <i id = {task.id} className={getTaskStyle(task).icon} ></i>
                        </div>
        </div>
        )
    })

    const handleSubmit = () => {
        if (taskInputValue !== '') {
            inputRef.current.value = ''
            setTaskInputValue('')
            dispatch({type: 'todo/addTask', payload: taskInputValue})
            setHasBeenAdded(true);
            }
    }

    //This is used to select the last task whenever a new task has been added. 
    useEffect(()=>  {
        if (hasBeenAdded === true) {
                dispatch({type: 'todo/selectTask', payload: taskList[taskList.length-1].id})
                setHasBeenAdded(false);
        }
    }, [hasBeenAdded])

    return (
        <div className = "todo">
            <i className="fas fa-clipboard-list todo__icon"></i>
            <i className="fas fa-arrow-right todo__icon"></i>
            <i className="far fa-save todo__icon"></i>
                <input className = "todo__title-input" ref = {inputRef} onChange = {(e) => {
                    setTaskInputValue(e.target.value)
                }} 

                onKeyDown= {(e)=> {
                    if (e.key === 'Enter') {
                        handleSubmit()
                    }
                }}
                placeholder="Enter task name here"></input>

                <button className = "todo__add-button" onClick = {(e)=> {
                    handleSubmit()
                }}> Create Task</button>
                <div className = "todo__tasks">
                    {tasksReactElement}
                </div>
                
                
        </div>
    )
}
export default TodoList