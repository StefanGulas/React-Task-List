import { useState } from 'react'
import { FaBorderNone } from 'react-icons/fa'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

function App() {
  const [showAddTask, setShowAddTask] = useState(false)

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
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    const newTask = {id, ...task}
    setTasks([...tasks, newTask])
    
  }  

  const deleteTask= (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }  

  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id ===
    id ? {...task, reminder: !task.reminder} : task))
  }


  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} 
      title="ToDo List"
      onAdd={() => setShowAddTask(!showAddTask)}
      showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd1={addTask}
      />}
      { tasks.length > 0 ? 
      <Tasks tasks={tasks} 
      onDelete1={deleteTask} 
      onToggle1={toggleReminder}/> : 
      ('No Tasks to show')}
    </div>
  );
}

export default App;
