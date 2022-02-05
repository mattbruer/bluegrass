export const NEW_CONTEXT = 'NEW_CONTEXT';
export const TEMPO_CHANGE = 'TEMPO_CHANGE';
export const EDIT_SEQUENCE = 'EDIT_SEQUENCE';

export function newContext(context) {
  console.log('New context created and in redux');
  return {
    type: NEW_CONTEXT,
    payload: context,
  };
}

export function editSequence(step, notesObj) {
  return {
    type: EDIT_SEQUENCE,
    payload: {},
  };
}

export function tempoChange(tempo) {
  return {
    type: TEMPO_CHANGE,
    payload: tempo,
  };
}
