import Header from './components/Header';
import './index.css';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import {useState} from 'react';
/** import {useState, useEffect} from 'react'; */

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },{
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 1:30pm',
        reminder: true
    },{
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    }
])


// toggle addTask form




// Add Task
const addTask = (createdTask) => {
  const id = tasks.length + 1;
  const newTask = {id, ...createdTask}
  setTasks([...tasks, newTask]);
  /*const addTo = {
    id: tasks.length + 1,
    text: one,
    day: two,
    reminder: three
  }
  setTasks(tasks.concat(addTo));*/
}



// Delete Task
const deleteTask = (id) => {

  setTasks(tasks.filter(task => task.id !== id));

  // The Deleted Element
  // console.log("deleted: ", tasks.filter(task => task.id == id));
  /*
  setTimeout(() => {
    var removeIcons = document.querySelectorAll('.remIcons');

    removeIcons.forEach((element) => {
      element.addEventListener('click', function(){
        var taskDiv = element.closest('div');
        var taskText = element.closest('h3');
        for(var loop = tasks.length - 1; loop > -1; loop--){
          console.log("HOW: ", tasks[loop]);
          console.log("TASKS: ", tasks.length);
          if (tasks[loop].text == taskText.outerText){
            var indexed = tasks.indexOf(tasks[loop]);
            tasks.splice(indexed, 1);
            setTasks(tasks);
            taskDiv.remove();
            break;
          }else{
            console.log("In Else: ");
            continue;
          }
        }
      }, false);
    });

}, 200); */
}

// Toggle reminder
const toggleReminder = (id) => {
  console.log("HERE: ", tasks);
  setTasks(tasks.map(task => task.id === id ? { ...task, reminder: !task.reminder } : task))
}

// Handle Submit Of Add Task Form
/*const handleSubmit = () => {
  console.log("SUBMITTED: ");
}*/


  return (
    <div className="container">
      <Header onAddClicked={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask ? <AddTask onAdd={addTask}/> : ''}
        {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'Nothing To Show'}
    </div>
  );
}

export default App;
