import axios from 'axios';

export const loadNote = async (context, dispatch, note) => {
  let buffer;
  const n = await axios.get(
    `https://mvbguitarsamples.s3.us-east-2.amazonaws.com/guitar/${note}.mp3`,
    { responseType: 'arraybuffer' }
  );
  context.decodeAudioData(n.data, (buff) => {
    dispatch();
  });
  return buffer;
};
