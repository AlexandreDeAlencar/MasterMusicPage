/* eslint-disable function-paren-newline */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import {
  useScrollTrigger,
  useTheme,
} from '@material-ui/core';

import Logo from '../../../../assets/img/logo.png';

export default function HeaderLanding(props) {
  const { window } = props;
  const theme = useTheme();

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  const style = {
    minHeight: '48px',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#fff',
    backgroundColor: theme.palette.background.default,
  };

  return (
    <AppBar
      elevation={0}
      style={{
        ...style,
        position: 'fixed',
        boxShadow: trigger ? '0 3px 6px rgba(0,0,0,0.58)' : 'none',
      }}
    >
      <Container
        maxWidth="lg"
      >
        <Grid container alignItems="center" justify="center">
          <Grid item>
            <img
              style={{
                height: 0.6 * 48,
              }}
              src={Logo}
              alt="Logo Mastermusic"
            />
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
}
