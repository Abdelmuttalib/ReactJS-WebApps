import React from 'react'
import Button from './Button';

const Numbers = ({ onClick }) => {
    return (
        <div className='numbers'>
            <Button value='7' onClick={(value) => onClick(value)}/>
            <Button value='8' onClick={(value) => onClick(value)}/>
            <Button value='9' onClick={(value) => onClick(value)}/>
            <Button value='4' onClick={(value) => onClick(value)}/>
            <Button value='5' onClick={(value) => onClick(value)}/>
            <Button value='6' onClick={(value) => onClick(value)}/>
            <Button value='1' onClick={(value) => onClick(value)}/>
            <Button value='2' onClick={(value) => onClick(value)}/>
            <Button value='3' onClick={(value) => onClick(value)}/>
        </div>
    )
}

export default Numbers
