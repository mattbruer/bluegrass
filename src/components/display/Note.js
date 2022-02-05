import React from 'react';
import { unit } from '../../constants';

const Note = ({ n }) => {
  return (
    <div
      style={{
        height: unit,
        width: unit,
        fontSize: 18,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      }}
    >
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1">
        <line x1="0px" x2={unit} y1="50%" y2="50%" stroke="black" />
      </svg>
      <div
        style={{
          display: 'flex',
          height: unit,
          width: unit,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'absolute',
        }}
      >
        <p>{n}</p>
      </div>
    </div>
  );
};

export default Note;
