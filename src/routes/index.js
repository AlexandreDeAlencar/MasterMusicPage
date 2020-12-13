import React from 'react';
import { ConnectedRouter } from 'connected-react-router';
import { Switch, Route } from 'react-router-dom';

import history from './history';

import Private from './private';
import Guest from './guest';

import Webnario from '../pages/Webnario';
import WebnarioRegisterVerify from '../pages/WebnarioRegisterVerify';
import WebnarioRegisterComplete from '../pages/WebnarioRegisterComplete';
import TelegramPage from '../pages/TelegramPage';
import WebnarioContent from '../pages/WebnarioContent';

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Guest path="/intensivao-da-producao-musical-2020" exact component={WebnarioContent} />
      <Guest path="/webnario" exact component={Webnario} />
      <Guest path="/webnario/register-verify" exact component={WebnarioRegisterVerify} />
      <Guest path="/webnario/register-complete" exact component={WebnarioRegisterComplete} />
      <Guest path="/telegram" exact component={TelegramPage} />
      <Private path="/dashboard" exact component={() => {}} />
      <Route
        path="*"
        component={() => {
          window.location.href = 'https://www.mastermusicbrasil.com';
          return null;
        }}
      />
    </Switch>
  </ConnectedRouter>
);

export default Routes;
