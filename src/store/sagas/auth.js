/* eslint-disable camelcase */
import { call, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { actions as toastrActions } from 'react-redux-toastr';
import api from '../../services/api';

import AuthActions from '../ducks/auth';

export function* signIn({ email, password }) {
  try {
    const response = yield call(api.post, 'sessions', {
      email,
      password,
    });

    if (response.data.token) {
      yield localStorage.setItem('@Estagiei:token', response.data.token);
      yield localStorage.setItem('@Estagiei:email', email);
      yield put(AuthActions.signInSuccess(response.data.token));

      try {
        const user = yield call(api.get, 'company');

        if (user.data) {
          yield put(push('/dashboard'));
          yield put(
            toastrActions.add({
              type: 'success',
              title: 'Bem-vindo!',
              message: 'Bem vindo a Estagiei!',
              options: {
                timeOut: 3000,
                progressBar: true,
                closeOnToastrClick: true,
                showCloseButton: true,
              },
            }),
          );
        }
      } catch (error) {
        yield put(AuthActions.signOut());
        yield put(
          toastrActions.add({
            type: 'error',
            title: 'Falha no login',
            message: 'Conta não existente!',
            options: {
              timeOut: 3000,
              progressBar: true,
              closeOnToastrClick: true,
              showCloseButton: true,
            },
          }),
        );
      }
    }
  } catch (err) {
    yield put(
      toastrActions.add({
        type: 'error',
        title: 'Falha no login',
        message: 'Verifique se seu e-mail e senha estão corretos.',
        options: {
          timeOut: 3000,
          progressBar: true,
          closeOnToastrClick: true,
          showCloseButton: true,
        },
      }),
    );
  }
}

export function* signOut() {
  localStorage.removeItem('@Estagiei:token');
  localStorage.removeItem('@Estagiei:email');

  yield put(push('/'));
}
