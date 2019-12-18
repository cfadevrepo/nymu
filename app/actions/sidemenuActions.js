import {
  OPEN_SIDE_MENU,
  CLOSE_SIDE_MENU,
  OPEN_SUB_MENU,
  CLOSE_SUB_MENU,
} from './actionTypes';

/**
 * Dispatched when a user opens the side menu
 *
 * @return {{type: string}} - Action
 */
export const openSideMenu = () => ({
  type: OPEN_SIDE_MENU,
});

/**
 * Dispatched when a user closes the side menu
 *
 * @return {{type: string}} - Action
 */
export const closeSideMenu = () => ({
  type: CLOSE_SIDE_MENU,
});

/**
 * Dispatched when a user closes the side menu
 *
 * @param {string} value
 * @return {{type: string, value: *}} Action
 */
export const openSubMenu = value => ({
  type: OPEN_SUB_MENU,
  value,
});

/**
 * Dispatched when a user closes s submenu
 *
 * @return {{type: string, value: *}} Action
 */
export const closeSubMenu = () => ({
  type: CLOSE_SUB_MENU,
});
