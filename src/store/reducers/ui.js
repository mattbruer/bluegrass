import { PLAY, SELECTED_DISPLAY } from '../actions/ui';
let initialState = {
  play: false,
  display: 'Guitar',
  selectedString: { Banjo: 0, Guitar: 0, Mando: 0 },
  selectedFret: { Banjo: null, Guitar: null, Mando: null },
  step: {
    Banjo: { 0: null, 1: null, 2: null, 3: null, 4: null },
    Mando: { 0: null, 1: null, 2: null, 3: null },
    Guitar: { 0: null, 1: null, 2: null, 3: null, 4: null, 5: null },
  },
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY:
      return { ...state, play: !state.play };
    case SELECTED_DISPLAY:
      return { ...state, display: action.payload };
    // case LOGGED_IN_USER:
    //   return {
    //     ...state,
    //     songs: action.payload.songs,
    //   };

    default:
      return state;
  }
};

export default uiReducer;
