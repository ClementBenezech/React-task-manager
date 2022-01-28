import { getNumberOfTasksForStatus } from "../utils/getNumberOfTasksForStatus"

/**
 * @return {JSX.Element}
 */

const TodoStatusCounter = (props) => {
    return (
                    <div className="todo__count-by-status">
                        <i className={props.icon+" todo__count-by-status__icon"} style ={{"color": props.color}}></i>
                        <div ref = {props.domRef} key = {props.status+getNumberOfTasksForStatus(props.status, props.taskList)} className="todo__count-by-status__count">{getNumberOfTasksForStatus(props.status, props.taskList)}</div>
                    </div>
    )

}

export default TodoStatusCounter