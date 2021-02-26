import React from 'react'
import Button from './Button';

const Operators = ({ onClick }) => {

  const renderOperators = () => {
  const operations = '+-*/';
  const operators = []
  for(var i of operations){
    operators.push(<Button key={operators.length} value={i} onClick={(value) => onClick(value)}/>);
  }
  return operators;
}
    return (
        <div className='operators'>
          {renderOperators()} 
        </div>
    )
}

export default Operators
