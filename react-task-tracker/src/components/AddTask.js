import {useState} from 'react';




const AddTask = ({onAdd}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);


    const submitHandler = (e) => {
        e.preventDefault();
        
        // alert if input form submitted empty
        if(!text){
            alert("Add a Task");
            return;
        }
        // call addTo() function with inputed values as parameters
        onAdd({text, day, reminder});

        // clear the form
        setText('');
        setDay('');
        setReminder(false);
    }



    return (
        <form onSubmit={submitHandler} className='add-form'>
            <div className='form-control'>
                <label>Task
                <input id='first' type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}/>
                </label>
            </div>
            <div className='form-control'>
                <label>Day & Time
                <input id='second' type='text' placeholder='Add Day&Time' value={day} onChange={(e) => setDay(e.target.value)}/>
                </label>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input id='third' type='checkbox' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input type='submit' value='Save Task' className='btn btn-block' />
        </form>
    )
}

export default AddTask
