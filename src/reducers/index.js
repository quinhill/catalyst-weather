import { combineReducers } from 'redux';
import isLoading from './isLoadingReducer';
import hasErrored from './hasErroredReducer'
import weather from './weatherReducer';

const rootReducer = combineReducers({
  isLoading,
  hasErrored,
  weather
});

export default rootReducer;