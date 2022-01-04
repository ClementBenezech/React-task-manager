import { useDispatch } from "react-redux";
import { getTaskStyle } from "../utils/getTaskStyle";
import { useSelector } from "react-redux";

const TodoTask = (props) => {
                
                const dispatch = useDispatch()
                const task = props.task

                const taskList = useSelector(state => state.todoTasksList)

                return (
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
}

export default TodoTask