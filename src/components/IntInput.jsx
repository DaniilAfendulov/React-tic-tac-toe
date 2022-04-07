import React, { useState } from 'react';

const IntInput = ({label, initValue, callback}) => {
    const [value, setValue] = useState(initValue);
    const getValue = () => {
        return value;
    }
    callback(getValue);

    return(
        <div>
            <p>{label}</p>
            <input type="text" value={value} onChange={(e) => setValue(parseInt(e.target.value))}></input>
        </div>
    );
};

export default IntInput;