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
    minHeight: '64px',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'fixed',
    color: '#fff',
    backgroundColor: theme.palette.background.default,
    boxShadow: trigger ? 'rgba(0, 0, 0, 0.18) 0px 1px 2px' : 'none',
  };


  return (
    <AppBar elevation={0} style={style}>
      <Container maxWidth="lg">
        <Grid container alignItems="center">
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
