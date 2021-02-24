import React from 'react'
import Button from './Button';

const Other = ({ onClick }) => {
    return (
        <div>
            <Button value='0' onClick={(value) => onClick(value)}/>
            <Button value='.' onClick={(value) => onClick(value)}/>
            <Button value='=' onClick={(value) => onClick(value)} />
        </div>
    )
}

export default Other
