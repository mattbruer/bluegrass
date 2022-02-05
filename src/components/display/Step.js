import React from 'react';
import Note from './Note';

const Step = ({ step }) => {
  const render = () => {
    return step.map((n, i) => {
      return <Note key={i} n={n} />;
    });
  };
  return <div>{render()}</div>;
};

export default Step;
