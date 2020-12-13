/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import store from '../store';

const GuestRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      !store.getState().auth.signedIn ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: '/dashboard',
            state: {
              from: props.location,
            },
          }}
        />
      )
    }
  />
);
GuestRoute.defaultProps = {
  component: {},
};

export default GuestRoute;
