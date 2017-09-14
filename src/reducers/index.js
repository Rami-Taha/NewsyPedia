import { combineReducers } from 'redux';
import SourcesReducer from './index_reducer';
import NewsReducer from './news_reducer';
import HeadReducer from './index_reducer';
const rootReducer = combineReducers({
  newsfeed: NewsReducer,
  sources: SourcesReducer,
  heads: HeadReducer
});

export default rootReducer;
