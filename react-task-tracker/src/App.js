import Header from './components/Header';
import './index.css';
import Button from './components/Button';
import Tasks from './components/Tasks';
import {useState} from 'react';

function App() {
  var [tasks, setTasks] = useState([
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

const deleteTask = (id, task) => {
  var holder = [];
  setTimeout(() => {
    var removeIcons = document.querySelectorAll('.goog');

    removeIcons.forEach((element) => {
      element.addEventListener('click', function(){
        var taskDiv = element.closest('div');
        var taskText = element.closest('h3');
        function into(){
          
        }
        for(var loop = tasks.length - 1; loop > -1; loop--){
          console.log("HOW: ", tasks[loop]);
          console.log("TASKS: ", tasks);
          if (tasks[loop].text == taskText.outerText){
            var indexed = tasks.indexOf(tasks[loop]);
            tasks.splice(indexed, 1);
            taskDiv.remove();
            setTasks(tasks);
            console.log("DOWN: ", tasks);
            break;
          }else{
            console.log("In Else: ");
            continue;
          }
        }
      
      }, false);
    });

}, 200);
}

  return (
    <div className="container">
      <Header />
      <Tasks tasks={tasks} ondelete={deleteTask()}/>
    </div>
  );
}

export default App;
