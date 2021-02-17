import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete1}) => {


    return (
        <div className='task'>
           <h3>{task.taskName}{' '} 
           <FaTimes 
           style={{color: 'red', 
           cursor: 'pointer'}} 
           onClick={() => onDelete1(task.id)} 
           />
           </h3>
           <p>{task.dueDate} </p>
        </div>
    )
}

export default Task
