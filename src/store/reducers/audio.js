import { NEW_CONTEXT, TEMPO_CHANGE, EDIT_SEQUENCE } from '../actions/audio';
let initialState = {
  context: null,
  tempo: 120,
  sequence: [],
};

const audioReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEW_CONTEXT:
      return { ...state, context: action.payload };
    // case LOGGED_IN_USER:
    //   return {
    //     ...state,
    //     songs: action.payload.songs,
    //   };
    case EDIT_SEQUENCE:
      return {
        ...state,
      };
    case TEMPO_CHANGE:
      return {
        ...state,
        tempo: action.payload,
      };
    default:
      return state;
  }
};

export default audioReducer;
