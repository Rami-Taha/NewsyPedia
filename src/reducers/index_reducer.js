import { FETCH_SOURCES } from '../actions';
import _ from 'lodash';
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SOURCES:
      return _.mapKeys(action.payload.data.sources, 'id');

    default:
      return state;
  }
}
