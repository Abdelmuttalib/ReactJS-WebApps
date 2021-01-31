import Task from './Task';
const Tasks = ({tasks, ondelete}) => {
    return (
        <>
        {tasks.map((task) => (
          <Task key={task.id} tasksl={task} ondel={ondelete}/>
    ))}
        </>
    )
}

export default Tasks
