import React from 'react';
import { Grid, useMediaQuery, useTheme } from '@material-ui/core';
import Vicentini from '../../assets/img/vicentini.jpg';
import LogoVicentini from '../../assets/img/vicentini-insta.png';

export default function Info() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  const styleProfile = {
    width: '7.5rem',
    height: '7.5rem',
    borderRadius: '7.5rem',
  };
  const styleLogo = {
    width: 'auto',
    height: matches ? 60 : 84,
    paddingTop: 8,
  };

  return (
    <Grid
      container
      direction="column"
      alignItems="center"
    >
      <Grid
        container
        direction="row"
        alignItems="center"
        justify={matches ? 'flex-start' : 'center'}
        spacing={2}
        style={{
          maxHeight: '4.5rem',
          alignContent: 'center',
        }}
      >
        <Grid
          item
          style={{
            borderRadius: '8.5rem',
            width: '8.5rem',
            height: '8.5rem',
            backgroundColor: theme.palette.primary.main,
            alignItems: 'center',
            justifyContent: 'center',
            // paddingTop: 12,
          }}
        >
          <img src={Vicentini} alt="Dúvidas ao vivo" style={styleProfile} />
        </Grid>
        <Grid item>
          <img src={LogoVicentini} alt="Dúvidas ao vivo" style={styleLogo} />
        </Grid>
      </Grid>
    </Grid>
  );
}
