import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { unit } from '../../constants';

const StrRow = ({ strings, values, setValues }) => {
  const { display } = useSelector((state) => state.ui);
  return (
    <div style={styles.strContainer}>
      {strings.map((s, i) => (
        <div
          onClick={() => {
            setValues({
              ...values,
              selectedString: { [display]: i },
            });
          }}
          key={i}
          style={
            values[display][i] !== null && values.selectedString[display] !== i
              ? styles.hasBeenSet
              : values.selectedString[display] === i
              ? styles.selectedString
              : styles.strBtn
          }
        >
          {s}
        </div>
      ))}
    </div>
  );
};

export default StrRow;

const styles = {
  strContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    overflowX: 'scroll',
  },
  strBtn: {
    height: 3 * unit - 5,
    minWidth: 3 * unit - 5,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    margin: '1px',
    fontSize: '50px',
    backgroundColor: 'lightgrey',
    borderRadius: '5px',
  },
  selectedString: {
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
  hasBeenSet: {
    height: 3 * unit - 3,
    minWidth: 3 * unit - 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    border: '1px solid black',
    margin: '1px',
    fontSize: '50px',
    backgroundColor: 'pink',
    borderRadius: '5px',
  },
};
