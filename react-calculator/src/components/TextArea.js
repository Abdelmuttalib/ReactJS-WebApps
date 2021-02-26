import React from 'react';

const TextArea = ({ onChange, toShow }) => {
    return (
        <textarea 
        value={toShow}
        className='textArea' 
        onChange={e => {
            onChange(e.target.value);
        }}>

        </textarea>
    )
}

export default TextArea
