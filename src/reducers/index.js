import { combineReducers } from 'redux';
import UpdateButtonInfo from './update_button_info.js';
const rootReducer = combineReducers({
  buttonInfo: UpdateButtonInfo
});

export default rootReducer;
