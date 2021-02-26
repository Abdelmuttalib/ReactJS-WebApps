import React from 'react';

const TextArea = ({ toShow }) => {
    return (
        <textarea readOnly
        value={toShow}
        className='textArea' 
        >
            {toShow}
        </textarea>
    )
}

export default TextArea
