import _ from 'lodash';
import { FETCH_SOURCES } from '../actions';
import { FETCH_HEAD } from '../actions';
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_SOURCES:
      return _.mapKeys(action.payload.data.sources, 'id');
    case FETCH_HEAD:
      return _.mapKeys(action.payload.data.articles, 'id');
    default:
  }
  return state;
}
