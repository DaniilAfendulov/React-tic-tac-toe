import React, { useState } from 'react';
import styles from '../styles/cell.module.css';

const Cell = ({val,  column, changeRow}) => {
    const [value, setCellValue] = useState(val);
    console.log('cell');
    console.log({column, val});
    return(
        <button className={styles.cell} onClick={() => changeRow(column, setCellValue)}>{value}</button>
    );
};

export default Cell;