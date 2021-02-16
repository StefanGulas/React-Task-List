import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Arztbesuch',
        day: '20.02.21 um 14:30 Uhr',
        reminder: true,
    },
    {
        id: 2,
        text: 'Elternsprechtag',
        day: '21.02.21 um 16:30 Uhr',
        reminder: true,
    }, 
    {
        id: 3,
        text: 'Essen kaufen',
        day: '22.02.21 um 10:30 Uhr',
        reminder: false,
    },
])
  const onDelete1= (id) => {
    console.log('delete', id)
  }  


  return (
    <div className="container">
      <Header title="Task List"/>
      <Tasks tasks={tasks} onDelete1={onDelete1} />
    </div>
  );
}

export default App;
