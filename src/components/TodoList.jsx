import { useSelector, useDispatch } from "react-redux"
import { useState, useRef } from "react"
import React from "react"
import '../styles/todo.scss'
import { useEffect } from "react"
import TodoTask from "./TodoTask"
import { getNumberOfTasksForStatus } from "../utils/getNumberOfTasksForStatus"
import TodoStatusCounter from "./TodoStatusCounter"
import TodoAddForm from "./TodoAddForm"

const TodoList = () => {


    const dispatch = useDispatch()
    const taskList = useSelector(state => state.todoTasksList)
    const [hasBeenAdded, setHasBeenAdded] = useState(false)

    const openCountRef = useRef()
    const closeCountRef = useRef()
    const lateCountRef = useRef()

    const tasksReactElement = taskList.map(task => {
        return( 
            <TodoTask key = {task.id} task = {task.id}/>
        )
    })

    //This is used to select the last task whenever a new task has been added. 
    useEffect(()=>  {
        if (hasBeenAdded === true) {
                dispatch({type: 'todo/selectTask', payload: taskList[taskList.length-1].id})
                setHasBeenAdded(false);
        }
    }, [hasBeenAdded])

    useEffect(() => {
        openCountRef.current.className = "todo__count-by-status__count";
        lateCountRef.current.className = "todo__count-by-status__count";
        closeCountRef.current.className = "todo__count-by-status__count";
    } )

    return (
        <div className = "todo">
                
                <TodoAddForm setHasBeenAdded = {setHasBeenAdded}/>

                <div className = "todo__tasks">
                        {tasksReactElement}
                </div>

                <div className="todo__count-by-status__container">
                    <TodoStatusCounter status = 'open' taskList = {taskList} domRef = {openCountRef} getNumberOfTasksForStatus = {getNumberOfTasksForStatus} color= 'violet' icon = 'far fa-clock'/>
                    <TodoStatusCounter status = 'late' taskList = {taskList} domRef = {lateCountRef} getNumberOfTasksForStatus = {getNumberOfTasksForStatus} color= 'red' icon = "fas fa-fire"/>
                    <TodoStatusCounter status = 'close' taskList = {taskList} domRef = {closeCountRef} getNumberOfTasksForStatus = {getNumberOfTasksForStatus} color= 'limegreen' icon = 'fas fa-check-circle'/>
                </div>               
                
        </div>
    )
}
export default TodoList