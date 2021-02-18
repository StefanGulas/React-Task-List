import {useState} from 'react'

const AddTask = ({onAdd1, showAdd}) => {
    const [taskName, setTaskName] = useState('')
    const [taskCategory, setTaskCategory] = useState('') 
    const [dueDate, setDueDate] = useState('')
    const [reminder, setReminder] = useState(false)
    const [taskRepetition, setTaskRepetition] = useState('')
    const [isImportant, setIsImportant] = useState(false)
    const [isComplete, setIsComplete] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()

        if(!taskName) {
            alert('Please add a task')
            return
        }
        onAdd1({taskName, taskCategory, dueDate,
        reminder, taskRepetition, isImportant, isComplete })

        setDueDate('')
        setIsComplete(false)
        setIsImportant(false)
        setReminder('')
        setTaskCategory('')
        setTaskRepetition('')
        setTaskName('')

    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>ToDo</label>
                <input type='text' 
                placeholder='Todo eingeben' 
                value={taskName} onChange={(e) => 
                setTaskName(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Kategorie</label>
                <input type='text'
                placeholder='Kategorie angeben'
                value={taskCategory} onChange={(e) => 
                setTaskCategory(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Fällig</label>
                <input type='text' 
                placeholder='Datum angeben'
                value={dueDate} onChange={(e) => 
                setDueDate(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Erinnerung</label>
                <input type='text' 
                placeholder='Erinnerung einrichten'
                value={reminder} onChange={(e) => 
                setReminder(e.target.value)}
                />
            </div>
            <div className='form-control'>
                <label>Wiederholen</label>
                <input 
                type='text' 
                checked={taskRepetition}
                placeholder='Wiederholung einstellen'
                value={taskRepetition} onChange={(e) => 
                setTaskRepetition(e.target.value)}
                />
            </div>
            <div className='form-control form-control-check'>
                <label>Wichtig</label>
                <input type='checkbox'
                checked={isImportant}
                value={isImportant} onChange={(e) => 
                setIsImportant(e.currentTarget.checked)}
                />
            </div>
            <div color='white'>
            <input type='submit' value='Save ToDo' 
            className='btn btn-block' 
            showAdd={onclick}
            />
            </div>

        </form>
    )
}

export default AddTask
