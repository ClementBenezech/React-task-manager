import { useSelector, useDispatch } from "react-redux"
import { useState, useRef } from "react"
import React from "react"
import '../styles/todo.scss'
import { useEffect } from "react"
import { getTaskStyle } from "../utils/getTaskStyle"
import TodoTask from "./TodoTask"
import { getNumberOfTasksForStatus } from "../utils/getNumberOfTasksForStatus"

const TodoList = () => {


    const inputRef = useRef()
    const dispatch = useDispatch()
    const [taskInputValue, setTaskInputValue] = useState('')
    const taskList = useSelector(state => state.todoTasksList)
    const [hasBeenAdded, setHasBeenAdded] = useState(false)

    const openCountRef = useRef()
    const closeCountRef = useRef()
    const lateCountRef = useRef()

    const tasksReactElement = taskList.map(task => {
        return( 
            <TodoTask key = {task.id} task = {task}/>
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

    useEffect(() => {
        openCountRef.current.className = "todo__count-by-status__count";
    }, )

    return (
        <div className = "todo">
            
                <input maxLength="32" className = "todo__title-input" ref = {inputRef} onChange = {(e) => {
                        setTaskInputValue(e.target.value)
                }} 

                onKeyDown= {(e)=> {
                    if (e.key === 'Enter') {
                        handleSubmit()
                    }
                }}

                placeholder="Enter task name here"></input>

                <i className="fas fa-clipboard-list todo__icon"></i>
                <i className="fas fa-arrow-right todo__icon"></i>
                <i className="far fa-save todo__icon"></i>

                <button className = "todo__add-button" onClick = {(e)=> {
                    handleSubmit()
                }}> Create Task</button>
                <div className = "todo__tasks">
                    {tasksReactElement}
                </div>
                
                <div className="todo__count-by-status__container">
                    <div className="todo__count-by-status">
                        <i className="far fa-clock todo__count-by-status__icon" style ={{"color": 'violet'}}></i>
                        <div ref = {openCountRef} key = {'open'+getNumberOfTasksForStatus('open', taskList)} className="todo__count-by-status__count">{getNumberOfTasksForStatus('open', taskList)}</div>
                    </div>

                    <div className="todo__count-by-status">
                        <i className="fas fa-fire todo__count-by-status__icon" style ={{"color": 'red'}}></i>
                        <div ref = {lateCountRef} key = {'open'+getNumberOfTasksForStatus('late', taskList)} className="todo__count-by-status__count">{getNumberOfTasksForStatus('late', taskList)}</div>
                    </div>

                    <div className="todo__count-by-status">
                        <i className="far fa-check-circle todo__count-by-status__icon" style ={{"color": 'limegreen'}}></i>
                        <div ref = {closeCountRef} key = {'open'+getNumberOfTasksForStatus('close', taskList)} className="todo__count-by-status__count">{getNumberOfTasksForStatus('close', taskList)}</div>
                    </div> 
                </div>               
                
        </div>
    )
}
export default TodoList