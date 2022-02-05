import React, { useState } from 'react';
import { SwitchField } from '@aws-amplify/ui-react';

const Note = () => {
  return <div style={{ width: '6.25%', border: '1px solid black' }}>10</div>;
};

const String = () => {
  return (
    <div style={styles.stringContainer}>
      <div style={styles.string}>
        <Note />
        <Note />
      </div>
    </div>
  );
};
const Measure = () => {
  return (
    <div style={styles.measure}>
      <String />
    </div>
  );
};

const Song = () => {
  const [playerRoll, setPlayerRoll] = useState(false);
  const handleChange = (e) => {
    e.preventDefault();
    setPlayerRoll(!playerRoll);
  };

  const song = [
    ['G', 'C'],
    ['D', 'G'],
    ['G', 'C'],
    ['G', 'C'],
  ];
  return (
    <div>
      <div style={styles.title}>title</div>
      <SwitchField onChange={handleChange} label={'Player Roll'} />

      <div style={styles.body}>
        <Measure />
      </div>
    </div>
  );
};

export default Song;

const styles = {
  title: {
    textAlign: 'center',
    marginBottom: '20px',
  },
  body: {
    minHeight: '100vh',
    width: '100%',

    display: 'flex',
    flexWrap: 'wrap',
    margin: '10px',
  },
  measure: {
    height: '100px',
    borderLeft: '1px solid black',
    borderRight: '1px solid black',

    width: '80%',
  },
  string: {
    height: '50%',
    borderBottom: '1px solid black',
    display: 'flex',
  },
  stringContainer: {
    height: '20%',
  },
};
