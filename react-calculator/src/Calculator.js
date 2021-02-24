import React from 'react';
import TextArea from './components/TextArea';
import Operators from './components/Operators';
import Numbers from './components/Numbers';
import Other from './components/Other';
import { useState } from 'react';

const Calculator = () => {
    const [areaValue, setAreaValue] = useState('');
    const onAreaChange = (e) => {
        setAreaValue(e);
    }
    const calculate = (kk) => {
        console.log("Calculate");
        console.log("Value: ", kk.target.innerHTML);
    }
    return (
        <div className='calculator'>
            <TextArea onChange={e => {
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
            <Other onClick={(value) => {
                console.log("OTHER: ");
                calculate(value);
            }}/>
        </div>
    );
}

export default Calculator;