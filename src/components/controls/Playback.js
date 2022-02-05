import React from 'react';
import { IconPlayArrow } from '@aws-amplify/ui-react';

const Playback = () => {
  return (
    <div style={styles.buttonContainer}>
      <div style={styles.button}>play</div>
      <div style={styles.button}>stop</div>
      <div style={styles.button}>mix</div>
    </div>
  );
};

export default Playback;

const styles = {
  buttonContainer: {
    display: 'flex',
  },
  button: {
    border: '1px solid black',
    height: '200px',
    flex: 1,
  },
};
