// Import our actions from our actions file
import {
  SET_USER
} from './actions';

export default function reducer(state, action) {
  switch (action.type) {
    case SET_USER: {

      return {
        ...state,
        userData: {
          ...action.payload
        },
        isAuthenticated: true
      };
    }

    default:
      return state;
  }
}
