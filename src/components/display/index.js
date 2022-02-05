import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Step from './Step';
import { unit } from '../../constants';

const Display = () => {
  const dispatch = useDispatch();
  const { steps, title } = useSelector((state) => state.song);
  return (
    <div style={styles.container}>
      <div style={styles.divAbove}>
        <div>{title}</div>
      </div>
      <div style={styles.musicDiv}>
        {JSON.stringify(steps)}
        {/* where it goes */}
      </div>
      <div style={styles.divBelow}>
        <div></div>
      </div>
    </div>
  );
};

export default Display;

const height = `calc(100% - ${15 * unit + 22}px)`;
const styles = {
  container: {
    height: height,
    width: '100%',
    position: 'fixed',
    top: 3 * unit,
    backgroundColor: 'pink',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  divAbove: {
    backgroundColor: 'yellow',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  divBelow: {
    backgroundColor: 'yellow',
    height: '40px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  musicDiv: {
    height: '200px',
    width: '100%',
    border: '1px solid black',
    backgroundColor: 'white',
  },
};
