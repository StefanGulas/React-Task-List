import { useState } from 'react'
import { FaBorderNone } from 'react-icons/fa'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        taskName: 'Arztbesuch',
        dueDate: '20.02.21 um 14:30 Uhr',
        taskCategory: 1,
        isComplete: false,
        isImportant: true,
        taskRepetition: 0,
        reminder: true,
    },
    {
      id: 2,
      taskName: 'Teammeeting',
      dueDate: '22.02.21 um 10:00 Uhr',
      taskCategory: 2,
      isComplete: false,
      isImportant: true,
      taskRepetition: 0,
      reminder: true,
    }, 
    {
      id: 3,
      taskName: 'Einkaufen gehen',
      dueDate: '21.02.21 um 16:30 Uhr',
      taskCategory: 1,
      isComplete: false,
      isImportant: true,
      taskRepetition: 0,
      reminder: true,
    },
])
  const onDelete1= (id) => {
    console.log('delete: ', id)
  }  


  return (
    <div className="container">
      <Header title="Task List"/>
      <Tasks tasks={tasks} onDelete1={onDelete1} />
    </div>
  );
}

export default App;
