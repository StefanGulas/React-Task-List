import Task from './Task'

const Tasks = ({ tasks, onDelete1}) => {
    // const onDelete1 = (id) => {
    //     console.log('delete1', id)
    // }
    
    return (
        <>
            {tasks.map((task) => (
            <Task key={task.id} task={task} 
            onDelete1={onDelete1}/>
            ))}
        </>
    )
}

export default Tasks
