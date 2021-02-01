import Task from './Task';
const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        <>
        {tasks.map((task) => (
          <Task key={task.id} tasksl={task} onDelete={onDelete} onToggle={onToggle}/>
    ))}
        </>
    )
}

export default Tasks
