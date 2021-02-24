import React from 'react';
import { useState } from 'react';

const TextArea = ({ onChange }) => {
    return (
        <textarea 
        className='textArea' 
        onChange={e => {
            onChange(e.target.value);
        }}>

        </textarea>
    )
}

export default TextArea
