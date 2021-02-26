import React from 'react';
import TextArea from './components/TextArea';
import Operators from './components/Operators';
import Numbers from './components/Numbers';
import { useState } from 'react';

const Calculator = () => {
    const [areaValue, setAreaValue] = useState('');
    const onAreaChange = (e) => {
        setAreaValue(e);
        console.log(e);
    }
    const calculate = (elementClicked) => {
        console.log("Calculate");
        console.log("Value: ", elementClicked.target.innerText);
        const valueClicked = elementClicked.target.innerText;
        const currentShownValue = areaValue;
        const latestValue = currentShownValue.concat(valueClicked);
        console.log("areaC: ", currentShownValue);
        console.log("Latest: ", latestValue);
        setAreaValue(latestValue);
    }
    return (
        <div className='calculator'>
            <TextArea toShow={areaValue} onChange={e => {
                onAreaChange(e);
            }}/>
            <Operators onClick={(value) => {
                console.log("OPERATORS: ");
                calculate(value);
            }}/>
            <Numbers onClick={(value) => {
                console.log("FOW")
                calculate(value);
            }}/>
        </div>
    );
}

export default Calculator;