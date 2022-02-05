import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { togglePlay } from '../../store/actions/ui';
import { tempoChange } from '../../store/actions/audio';
import { useDispatch, useSelector } from 'react-redux';
import { loadNote } from '../../audioFunctions/loadNote';

import { SliderField } from '@aws-amplify/ui-react';
import abcjs from 'abcjs';
import 'abcjs/abcjs-audio.css';

const Mando = () => {
  const dispatch = useDispatch();
  const { context } = useSelector((state) => state.audio);
  const { play } = useSelector((state) => state.ui);
  const [buffer, setBuffer] = useState(null);

  useEffect(() => {}, []);

  const seq = [];
  const playStep = (step) => {};
  const playSequence = (sequence) => {};

  const handleClick = (e) => {
    abcjs.renderAbc('paper', 'X:1\nz8|');
    // loadNote(context, 'E3');
    // playSequence(seq);
    // let source = context.createBufferSource();
    // source.buffer = buffer;
    // let gainNode = context.createGain();

    // gainNode.gain.setValueAtTime(1, context.currentTime);

    // source.connect(gainNode);
    // gainNode.connect(context.destination);

    // source.start(context.currentTime + 0);
    // source.stop(context.currentTime + 4);
    dispatch(togglePlay());
  };

  return (
    <div style={styles.container}>
      <div id="paper"></div>
      <button onClick={handleClick} style={{ width: '200px' }}>
        Play
      </button>
      <SliderField
        label="Tempo"
        defaultValue={60}
        min={20}
        max={200}
        step={1}
        onChange={(val) => dispatch(tempoChange(val))}
      />
    </div>
  );
};

export default Mando;

const styles = {
  container: {
    height: '100px',

    display: 'flex',
    border: '1px solid black',
  },
};
