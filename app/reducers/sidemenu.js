import {
  OPEN_SIDE_MENU,
  CLOSE_SIDE_MENU,
  OPEN_SUB_MENU,
  CLOSE_SUB_MENU,
} from '../actions/actionTypes';

export default function sidemenu(state = {}, action) {
  switch (action.type) {
    case OPEN_SIDE_MENU:
      return {
        ...state,
        isOpened: true,
      };
    case CLOSE_SIDE_MENU:
      return {
        ...state,
        isOpened: false,
      };
    case OPEN_SUB_MENU:
      return {
        ...state,
        openedSubMenu: action.value,
      };
    case CLOSE_SUB_MENU:
      return {
        ...state,
        openedSubMenu: null,
      };
    default:
      return state;
  }
}
