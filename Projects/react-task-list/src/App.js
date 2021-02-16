import { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Arztbesuch',
        day: 'Feb 5th at 2:30pm',
        reminder: true,
    },
    {
        id: 2,
        text: 'Elternsprechtag',
        day: 'Feb 6th at 1:30pm',
        reminder: true,
    }, 
    {
        id: 3,
        text: 'Essen kaufen',
        day: 'Feb 5th at 2:30pm',
        reminder: false,
    },
])
  
  return (
    <div className="container">
      <Header title="Task Tracker"/>
      <Tasks tasks={tasks} />
    </div>
  );
}

export default App;
