import React from 'react';
import { useSelector } from 'react-redux';
import Control from './Control';

const Controls = () => {
  const { display } = useSelector((state) => state.ui);

  return <>{display !== 'Home' && <Control instrument={display} />}</>;
};

export default Controls;
