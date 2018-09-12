import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import historyDataReducer from './historyData';
import liveDataReducer from './liveData';
import searchReducer from './search';

const initialState = {
  HistoryData: historyDataReducer,
  Search: searchReducer,
  LiveData: liveDataReducer,
  routing: {}
}

const rootReducer = combineReducers({
  ...initialState,
  routing: routerReducer
});

export default rootReducer;
