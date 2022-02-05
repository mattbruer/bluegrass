import React from 'react';
import { unit } from '../../constants';

const ValueRow = () => {
  const values = [
    'w',
    'h',
    'q',
    'e',
    's',
    'wr',
    'hr',
    'qr',
    'er',
    'sr',
    'et',
    'qt',
    'tie',
  ];

  const render = () => {
    return values.map((v, i) => {
      return (
        <div key={i} style={styles.valBtn}>
          {v}
        </div>
      );
    });
  };
  return <div style={styles.valContainer}>{render()}</div>;
};

export default ValueRow;

const styles = {
  valBtn: {
    height: 3 * unit,

    minWidth: 3 * unit,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    margin: '1px',
    fontSize: '50px',
    backgroundColor: 'lightgrey',
    borderRadius: '5px',
  },
  valContainer: {
    display: 'flex',

    border: '1px solid black',
    overflowX: 'scroll',
    backgroundColor: '#123',
  },
};
