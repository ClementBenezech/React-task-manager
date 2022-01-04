import format from "date-fns/format"
import compareAsc from "date-fns/compareAsc"

export const getTaskStyle = (task) => {

    const statusIcons = [{status: "open", icon: "far fa-clock", color: '#9000fc'}, {status: "close", icon: "far fa-check-circle", color: 'limegreen'}  ]

    const deadlineIsExpired = compareAsc(new Date((format(Date.now(), 'MM/dd/yyyy'))), new Date(task.deadline))
    
    if (deadlineIsExpired === 1 && task.status === 'close') {
        return statusIcons.filter(icon => icon.status === task.status)[0]
    } else if (deadlineIsExpired === 1 && task.status === 'open')  {
        return {icon: "fas fa-fire", color: "rgb(255, 83, 78)"}
    } else {
        return statusIcons.filter(icon => icon.status === task.status)[0]
    }
}