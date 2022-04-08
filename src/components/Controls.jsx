import React, { useState } from 'react';
import NumberInput from './NumberInput.jsx';
import styles from '../styles/app.module.css';

var getTableLen,getWinLen;
const Controls = (props) => {
    const refresh = () => {
        props.setTableLen(getTableLen());
        props.setWinLen(getWinLen());
      }

    return(
        <div className={styles.center}>
            <NumberInput label="размерность" initValue={3} callback={(c)=>{getTableLen = c;}} min={2} max={99}/>
            <NumberInput label="длиня ряда для победы" initValue={3} callback={(c)=>{getWinLen = c;}} min={1} max={99}/>
            <button onClick={refresh} width='100%'> restart </button>
        </div>
    );
};

export default Controls;