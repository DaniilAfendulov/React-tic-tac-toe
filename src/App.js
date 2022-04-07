import { useState } from 'react';
import Board from './components/Board';
import Controls from './components/Controls';
import styles from './styles/app.module.css';


function App() {
  const [tableLen, setTableLen] = useState(3);
  const [winLen, setWinLen] = useState(3);


  console.log('1');


  return (
    <>
      <div className={styles.screenhalf}>
        <Board tableLen={tableLen} winLen={winLen}/>
      </div>
      <div className={styles.screenhalf}>
        <Controls className={styles.center} setTableLen={setTableLen} setWinLen={setWinLen}/>
      </div>
      
    </>

  );
}

export default App;
