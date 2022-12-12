import { GET_UNDERLYINGS_DATA, SAVE_CURRENT_UNDERLYING } from "../Actions";

const INITIAL_STATE = {
  underlayingData: [],
  currentUnderlayingData: {},
};

function underlayingReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_UNDERLYINGS_DATA:
      return {
        ...state,
        underlayingData: action.payload,
      };
    case SAVE_CURRENT_UNDERLYING:
      return {
        ...state,
        currentUnderlayingData: action.payload,
      };
    default:
      return state;
  }
}

export default underlayingReducer;
