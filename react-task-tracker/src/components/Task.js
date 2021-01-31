import {FaTimes} from 'react-icons/fa';

const Task = ({tasksl, ondel}) => {
    const taskId = tasksl.id;
    const taskText = tasksl.text;
    return (
        <div className='task'>
            <h3>{tasksl.text}<FaTimes className='goog' ondo={ondel} style={{color: 'red'}}/></h3>
            <p>{tasksl.day}</p>
        </div>
    )
}

export default Task
