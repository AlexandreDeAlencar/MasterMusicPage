import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  toggleOpenMenuInternshipCreate: ['open'],
});

export const MenuTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({
  open_menu_internship_create: false,
});

/* Reducers */

export const toggleMenuInternshipCreate = (state, { open }) => state.merge({
  open_menu_internship_create: open,
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOGGLE_OPEN_MENU_INTERNSHIP_CREATE]: toggleMenuInternshipCreate,
});
