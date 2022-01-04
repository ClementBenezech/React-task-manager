import { useDispatch } from "react-redux"
import { useRef } from "react"
import { useState } from "react"
import '../styles/todo.scss'

const TodoAddForm = (props) => {

    const [taskInputValue, setTaskInputValue] = useState('')
    const inputRef = useRef()
    const dispatch = useDispatch()

    const handleSubmit = () => {
        if (taskInputValue !== '') {
            console.log("the value of taskinputValue before creating = "+ taskInputValue)
            inputRef.current.value = ''
            setTaskInputValue('')
            dispatch({type: 'todo/addTask', payload: taskInputValue})
            props.setHasBeenAdded(true);
            }
    }

    return (
                <div className = "todo__add-form">
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
                                
                </div>
    )
}

export default TodoAddForm