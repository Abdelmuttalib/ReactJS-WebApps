import {FaTimes} from 'react-icons/fa';

const Task = ({tasksl, onDelete, onToggle}) => {

    return (
        <div className={`task ${tasksl.reminder ? `reminder`: ''}`} onDoubleClick={() => onToggle(tasksl.id)}>
            <h3>{tasksl.text}{' '}
            <FaTimes className='remIcons' 
                    onClick={() => onDelete(tasksl.id)}
                    style={{color: 'red'}}/>
            </h3>
            <p>{tasksl.day}</p>
        </div>
    )
}

export default Task
