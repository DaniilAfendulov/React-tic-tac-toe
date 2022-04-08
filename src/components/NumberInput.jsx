import React, { useState } from 'react';

const NumberInput = ({label, initValue, callback, min, max}) => {
    const [value, setValue] = useState(initValue);
    const getValue = () => {
        return value;
    }
    callback(getValue);

    const ChangHandler = (v) => {
        if (v >= min && v <= max) {
            setValue(v);
        }
    }

    return(
        <div>
            <p>{label}</p>
            <input 
            type="number"
            min={min}
            max={max}
            value={value}  
            onChange={(e) => ChangHandler(parseInt(e.target.value))}>
            </input>
        </div>

    );
};

export default NumberInput;