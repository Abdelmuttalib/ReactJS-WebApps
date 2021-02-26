import React from 'react'
import Button from './Button';

const Numbers = ({ onClick }) => {
    const renderButton = () => {
        const buttonValues = '7894561230.=';
        var numbers = [];
        for(const i of buttonValues){
            switch(i){
                case '0':
                    numbers.push(<Button key={numbers.length} id='zero' value={i} onClick={(value) => onClick(value)}/>);
                    break;
                default:
                    numbers.push(<Button key={numbers.length} value={i} onClick={(value) => onClick(value)}/>);
            }
        }
        return numbers;
    }
    
    return (
        <div className='numbers'>
            {renderButton()}
        </div>
    )
}

export default Numbers
