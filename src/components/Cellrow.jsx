import React, { useState } from 'react';
import Cell from './Cell';
const CellRow = ({inputs, rown, changeTable}) => {
    console.log('cellrow ' + rown);
    const changeRow = (column, setCellValue) => {
        changeTable(rown, column, setCellValue);
    }
    return(
        <tr>
            { inputs.map((inp, index) => 
                    <td key={index}><Cell val={inp} row={rown} column={index}  changeRow={changeRow}/></td> 
                )
            }            
        </tr>
    );
};
export default CellRow;