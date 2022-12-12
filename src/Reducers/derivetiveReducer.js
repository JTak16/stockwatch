import { GET_DERIVETIVES_DATA } from "../Actions";

const INITIAL_STATE = {
  derivetiveData: [],
};

function derivetiveReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_DERIVETIVES_DATA:
      return {
        ...state,
        derivetiveData: action.payload,
      };
    default:
      return state;
  }
}

export default derivetiveReducer;
