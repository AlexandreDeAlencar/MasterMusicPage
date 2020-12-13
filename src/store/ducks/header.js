import { createReducer, createActions } from 'reduxsauce';
import Immutable from 'seamless-immutable';

/* Types & Action Creators */

const { Types, Creators } = createActions({
  toggleSidebar: ['open_sidebar'],
  itemOpenedAdd: ['itemsId'],
  itemOpenedRemove: ['itemsId'],
});

export const HeaderTypes = Types;
export default Creators;

/* Initial State */

export const INITIAL_STATE = Immutable({ open_sidebar: false, items_opened_id: [] });

/* Reducers */

export const success = state => state.merge({ open_sidebar: !state.open_sidebar });

export const itemAddSuccess = (state, { itemsId }) => state.merge({
  items_opened_id: [...state.items_opened_id, itemsId],
});

export const itemRemoveSuccess = (state, { itemsId }) => state.merge({
  items_opened_id: [...state.items_opened_id].filter(i => i !== itemsId),
});

/* Reducers to types */

export const reducer = createReducer(INITIAL_STATE, {
  [Types.TOGGLE_SIDEBAR]: success,
  [Types.ITEM_OPENED_ADD]: itemAddSuccess,
  [Types.ITEM_OPENED_REMOVE]: itemRemoveSuccess,
});
