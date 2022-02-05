import React, { useState } from 'react';
import { unit } from '../../constants';
import StrRow from './StrRow';
import FretRow from './FretRow';
import ValueRow from './ValueRow';

const instruments = {
  Guitar: {
    numOfFrets: 24,
    strings: ['E', 'A', 'D', 'G', 'B', 'e'],
  },
  Mando: {
    numOfFrets: 20,
    strings: ['G', 'D', 'A', 'E'],
  },
  Banjo: {
    numOfFrets: 22,
    strings: ['g', 'D', 'G', 'B', 'd'],
  },
};

const Control = ({ instrument }) => {
  const [values, setValues] = useState({
    selectedString: { Banjo: 0, Guitar: 0, Mando: 0 },
    selectedFret: { Banjo: null, Guitar: null, Mando: null },
    Banjo: { 0: null, 1: null, 2: null, 3: null, 4: null },
    Mando: { 0: null, 1: null, 2: null, 3: null },
    Guitar: { 0: null, 1: null, 2: null, 3: null, 4: null, 5: null },
  });

  return (
    <div style={styles.container}>
      <ValueRow setValues={setValues} values={values} />
      <StrRow
        strings={instruments[instrument].strings}
        setValues={setValues}
        values={values}
      />
      <FretRow
        numOfFrets={instruments[instrument].numOfFrets}
        setValues={setValues}
        values={values}
      />
      <div
        style={{ display: 'flex', height: '60px', border: '1px solid black' }}
      >
        <div style={styles.prevNextDone}>Prev</div>
        <div style={styles.prevNextDone}>Prev</div>
        <div style={styles.prevNextDone}>Done</div>
      </div>
    </div>
  );
};

export default Control;

const styles = {
  container: {
    position: 'fixed',
    bottom: '0px',
    width: '100%',
    height: 12 * unit + 20,
    border: '1px solid black',
    backgroundColor: '#123',
  },
  prevNextDone: {
    width: '33%',
    border: '1px solid black',
    backgroundColor: 'lightgrey',
  },
};
