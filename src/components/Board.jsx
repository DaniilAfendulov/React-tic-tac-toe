import { useState } from 'react';
import CellRow from './Cellrow';
import styles from '../styles/board.module.css';

const buildTable = (len) => {
    const row = Array(len).fill(' ');
    return Array(len).fill(row);
}
let table;

const Board = ({tableLen, winLen}) => {
  var lastStep = 'o';
  table = buildTable(tableLen);
  console.log('board');


  const makeStep = () => {
    lastStep = lastStep === 'o' ? 'x' : 'o';
  }
  const checkWinner = (table, winLen, rowNumber, columnNumber) => {
      const row = table[rowNumber];
      const column = [];
      for (let i = 0; i < table.length; i++) {
        column.push(table[i][columnNumber]);          
      }
      console.log({row, column});
      return checkLine(row, columnNumber, winLen) || checkLine(column, rowNumber, winLen);
  }

  const checkLine = (line, position, winLen) => {
      let pointer1 = position;
      while (pointer1 >= 0 && line[pointer1-1] === lastStep) {
          pointer1 -= 1;
      }
      let pointer2 = position;
      while (pointer2 < line.length && line[pointer2+1] === lastStep) {
          pointer2 += 1;
      }
      return pointer2 - pointer1 + 1 === winLen;
  }

  const changeTable = (rown, columnn, setCellValue) => {
      if (table[rown][columnn] === ' ') {
        makeStep();
        setCellValue(lastStep);
        const r = [...table[rown]];
        r[columnn] = lastStep;
        table[rown] = r;
        if (checkWinner(table, winLen, rown, columnn)) {
            alert(lastStep + ' победил');
        };
      };
  };


  return (
    <div className={styles.board}>
        <table>
          <tbody>
              {table.map((row, index) => <CellRow key={index} inputs={row} rown={index} changeTable={changeTable} />)}
          </tbody>
        </table>
    </div>
  );
}
export default Board;
