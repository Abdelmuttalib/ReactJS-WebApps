import Header from './components/Header';
import './index.css';
import Tasks from './components/Tasks';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import {useState, useEffect} from 'react';
/** import {useState, useEffect} from 'react'; */

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([])


useEffect(() => {
  const getTasks = async () => {
    const tasksFromServer = await fetchTasks();

    setTasks(tasksFromServer);
  }

  getTasks();
}, [])


// Fetch Tasks(data)
const fetchTasks = async () => {
  const res = await fetch('http://localhost:5000/tasks');
  const data = await res.json();

  return data;
}

// Fetch Task
const fetchTask = async (id) => {
  const res = await fetch(`http://localhost:5000/tasks/${id}`);
  const data = await res.json();

  return data;
}

// Add Task
const addTask = async (createdTask) => {

  const res = await fetch('http://localhost:5000/tasks',
  {method: 'POST',
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(createdTask)});
  const data = await res.json();
  setTasks([...tasks, data]);
  /*const id = tasks.length + 1;
  const newTask = {id, ...createdTask}
  fetch('http://localhost:5000/tasks',
  {method: 'PUT',
  headers: {'Content-Type': 'application/json'},
   body: JSON.stringify({
     "id": `${id}`,
     'text': `"${createdTask.text}"`,
     'day': `"${createdTask.day}"`,
     'reminder': `${createdTask.reminder}`
  })})
  setTasks([...tasks, newTask]);
  */
  /*const addTo = {
    id: tasks.length + 1,
    text: one,
    day: two,
    reminder: three
  }
  setTasks(tasks.concat(addTo));*/
}



// Delete Task
const deleteTask = async (id) => {

  await fetch(`http://localhost:5000/tasks/${id}`, {method: 'DELETE'});

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
const toggleReminder = async (id) => {

  const taskToToggle = await fetchTask(id);
  // console.log("B4 taskToToggle: ", taskToToggle);
  const updTask = await {...taskToToggle, reminder: !taskToToggle.reminder}
  // console.log("AF taskToToggle: ", updTask)

  const res = await fetch(`http://localhost:5000/tasks/${id}`, {
  method: 'PUT',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(updTask)})

  const data = await res.json();
  // console.log("DATA: ",data);
  // could also use: updTask as the updated object
  setTasks(tasks.map(task => task.id === id ? {...task, reminder: data.reminder} : task))
}

// Handle Submit Of Add Task Form
/*const handleSubmit = () => {
  console.log("SUBMITTED: ");
}*/


  return (
    <Router>
    <div className="container">
      <Header onAddClicked={() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      
        <Route path='/' exact render={(props) => (
          <>
          {showAddTask ? <AddTask onAdd={addTask}/> : ''}
          {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'Nothing To Show'}
          <Footer />
          </>
          )}/>
        <Route path='/about' component={About}/>
        
    </div>
    </Router>
  );
}

export default App;
