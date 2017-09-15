import { combineReducers } from 'redux';
import SourcesReducer from './index_reducer';
import NewsReducer from './news_reducer';
import HeadReducer from './head_reducer';
const rootReducer = combineReducers({
  newsfeed: NewsReducer,
  sources: SourcesReducer,
  articles: HeadReducer
});

export default rootReducer;
