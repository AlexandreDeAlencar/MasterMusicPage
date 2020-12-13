import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { reducer as toastr } from 'react-redux-toastr';
import { reducer as auth } from './auth';
import { reducer as menus } from './menus';
import { reducer as header } from './header';

export default (history) => combineReducers({
  auth,
  menus,
  header,
  toastr,
  router: connectRouter(history),
});
