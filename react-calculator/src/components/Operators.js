import React from 'react'
import Button from './Button';
const Operators = ({ onClick }) => {
    return (
        <div className='operators'>
          <Button value='+' onClick={(value) => onClick(value)} />
          <Button value='-' onClick={(value) => onClick(value)} />
          <Button value='*' onClick={(value) => onClick(value)} />
          <Button value='/' onClick={(value) => onClick(value)} />  
        </div>
    )
}

export default Operators
