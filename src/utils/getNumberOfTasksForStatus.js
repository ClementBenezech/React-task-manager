import compareAsc from 'date-fns/compareAsc'
import format from 'date-fns/format'

export const getNumberOfTasksForStatus = (status, taskList) => {
    if (status === 'open') {
        return taskList.filter(task => task.status === 'open' && compareAsc(new Date((format(Date.now(), 'MM/dd/yyyy'))), new Date(task.deadline)) !== 1).length
    } else if (status === 'close') {
        return taskList.filter(task => task.status === 'close').length
    } else if (status === 'late') {
        return taskList.filter(task => task.status === 'open' && compareAsc(new Date((format(Date.now(), 'MM/dd/yyyy'))), new Date(task.deadline)) === 1).length
    }
}