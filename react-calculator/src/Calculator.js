import React from 'react';
import TextArea from './components/TextArea';
import Operators from './components/Operators';
import Numbers from './components/Numbers';
import { useState } from 'react';

const Calculator = () => {
    const [areaValue, setAreaValue] = useState('');

    const calculate = (elementClicked) => {
        const valueClicked = elementClicked.target.innerText;
        const currentShownValue = areaValue;
        if(valueClicked === '+' || valueClicked === '-' ||
        valueClicked === '*' || valueClicked === '/' || 
        valueClicked === '.'){
            if(currentShownValue.slice(-1) == '+' ||
               currentShownValue.slice(-1) == '-' || 
               currentShownValue.slice(-1) == '*' ||
               currentShownValue.slice(-1) == '/' ||
               currentShownValue.slice(-1) == '.'){
                return;
            }
            const latestValue = currentShownValue + valueClicked;
            setAreaValue(latestValue);
        }else if(valueClicked == '='){
            const evaluate = eval(currentShownValue);
            setAreaValue(evaluate.toString());
        }
        else{
            const latestValue = currentShownValue + valueClicked;
            console.log(typeof(valueClicked));
            setAreaValue(latestValue);
        }
    }
    return (
        <div className='calculator'>
            <TextArea toShow={areaValue}/>

            <Operators onClick={(value) => {
                calculate(value);
            }}/>
            
            <Numbers onClick={(value) => {
                calculate(value);
            }}/>

        </div>
    );
}

export default Calculator;