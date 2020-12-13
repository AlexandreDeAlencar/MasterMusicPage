import React from 'react';
import { Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import ChatIcon from '../../assets/img/chat.png';
import CalendarIcon from '../../assets/img/calendar.png';
import MoneyIcon from '../../assets/img/money.png';

export default function Info() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const styleIcon = {
    width: matches ? '1.65rem' : '2.2rem',
    height: matches ? '1.65rem' : '2.2rem',
    marginRight: theme.spacing(1),
  };
  const styleFont = {
    width: 'auto',
    color: theme.palette.primary.contrastText,
    fontWeight: 900,
    fontSize: window.innerWidth >= 350 ? (matches ? '1.15rem' : '1.3rem') : '1rem',
  };

  return (
    <Grid
      container
      direction={matches ? 'column' : 'row'}
      justify={matches ? 'center' : 'center'}
      align="center"
      alignItems="center"
      style={{
        width: matches ? 'fit-content' : '100%',
      }}
    >
      <Grid item xs align="center">
        <Grid
          container
          direction="row"
          spacing={1}
          justify="center"
          alignItems="center"
          align="center"
          style={{
            width: matches ? 'fit-content' : '100%',
          }}
        >
          <Grid item>
            <img src={CalendarIcon} alt="Dúvidas ao vivo" style={styleIcon} />
          </Grid>
          <Grid item>
            <Typography variant="h6" style={styleFont}>11, 13 e 15 DE JANEIRO</Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs align="center">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          align="center"
          spacing={1}
          style={{
            width: matches ? 'fit-content' : '100%',
          }}
        >
          <Grid item>
            <img src={MoneyIcon} alt="Dúvidas ao vivo" style={styleIcon} />
          </Grid>
          <Grid item>
            <Typography
              variant="body1"
              style={{
                lineHeight: 1, ...styleFont,
              }}
            >
              100% ONLINE E GRATUITO
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs align="center">
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          align="center"
          spacing={1}
          style={{
            width: matches ? 'fit-content' : '100%',
          }}
        >
          <Grid item>
            <img src={ChatIcon} alt="Dúvidas ao vivo" style={styleIcon} />
          </Grid>
          <Grid item>
            <Typography variant="h6" style={styleFont}>DÚVIDAS AO VIVO</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
