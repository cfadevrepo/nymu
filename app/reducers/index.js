import { combineReducers } from 'redux';
import user from './user';
import sidemenu from './sidemenu';

export default combineReducers({
  user,
  sidemenu,
});
