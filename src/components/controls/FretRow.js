import React, { useState } from 'react';
import { unit } from '../../constants';
import { useDispatch, useSelector } from 'react-redux';

const FretRow = ({ numOfFrets, setValues, values }) => {
  const { display } = useSelector((state) => state.ui);

  const render = () => {
    const frts = [];

    for (let i = 0; i <= numOfFrets; i++) {
      frts.push(
        <div
          key={i}
          onClick={() => {
            if (values[display][values.selectedString] !== null) {
              setValues({
                ...values,
                [display]: {
                  ...values[display],
                },
              });
            }
            setValues({
              ...values,
              selectedFret: { [display]: i },
              [display]: {
                ...values[display],
                [values.selectedString[display]]: i,
              },
            });
          }}
          style={
            values[display][values.selectedString[display]] === i
              ? styles.selectedFret
              : styles.frtBtn
          }
        >
          {i}
        </div>
      );
    }
    return frts;
  };
  return (
    <div style={styles.frtContainer}>
      <div
        onClick={() => {
          if (values[display][values.selectedString] !== null) {
            setValues({
              ...values,
              [display]: {
                ...values[display],
              },
            });
          }
        }}
        style={styles.frtBtn}
      >
        x
      </div>
      {render()}
    </div>
  );
};

export default FretRow;

const styles = {
  frtBtn: {
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
  selectedFret: {
    height: 3 * unit,
    minWidth: 3 * unit,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    margin: '1px',
    fontSize: '50px',
    backgroundColor: 'lightblue',
    borderRadius: '5px',
  },

  frtContainer: {
    display: 'flex',

    border: '1px solid black',
    overflowX: 'scroll',
  },
};
