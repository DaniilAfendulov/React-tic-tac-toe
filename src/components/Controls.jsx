import React, { useState } from 'react';
import IntInput from './IntInput.jsx';
import styles from '../styles/app.module.css';

var getTableLen,getWinLen;
const Controls = (props) => {
    const refresh = () => {
        props.setTableLen(getTableLen());
        props.setWinLen(getWinLen());
      }

    return(
        <div className={styles.center}>
            <IntInput label="размерность" initValue={3} callback={(c)=>{getTableLen = c;}}/>
            <IntInput label="длиня ряда для победы" initValue={3} callback={(c)=>{getWinLen = c;}}/>
            <button onClick={refresh} width='100%'> restart </button>
        </div>
    );
};

export default Controls;