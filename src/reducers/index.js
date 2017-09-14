import { combineReducers } from 'redux';
import SourcesReducer from './index_reducer';
import NewsReducer from './news_reducer';
import HeadReducer from './head_reducer';
const rootReducer = combineReducers({
  newsfeed: NewsReducer,
  sources: SourcesReducer,
  heads: HeadReducer
});

export default rootReducer;
