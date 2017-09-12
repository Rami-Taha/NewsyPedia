import { FETCH_NEWS } from '../actions';
export default function(state = [], action) {
  switch (action.payload) {
    case FETCH_NEWS:
      return [action.payload.data, ...state];
    default:
  }
  return state;
}
