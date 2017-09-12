import { combineReducers } from 'redux';
import NewsReducer from './news_reducer';
const rootReducer = combineReducers({
  newsfeed: NewsReducer
});

export default rootReducer;
