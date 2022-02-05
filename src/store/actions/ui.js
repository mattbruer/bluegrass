export const PLAY = 'PLAY';
export const SELECTED_DISPLAY = 'SELECTED_DISPLAY ';
export const SELECT_STRING = 'SELECT_STRING';
export const SELECT_FRET = 'SELECT_FRET';

export function togglePlay() {
  return {
    type: PLAY,
  };
}

export function selectedDisplay(display) {
  return {
    type: SELECTED_DISPLAY,
    payload: display,
  };
}

export function selectString(instrument, string) {}
export function selectFret(instrument, fret) {}
