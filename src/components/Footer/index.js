import React from 'react';
import {
  Container,
  useTheme,
  Grid,
  Typography,
  IconButton, useMediaQuery,
  Hidden,
} from '@material-ui/core';

import { Facebook, Instagram, YouTube } from '@material-ui/icons';
import ButtonDiscord from '../Buttons/ButtonDiscord';
import Logo from '../../assets/img/logo.png';

const Footer = ({ discord }) => {
  const theme = useTheme();
  const downXs = useMediaQuery(theme.breakpoints.down('sm'));
  const fontStyle = {
    color: theme.palette.darkColors.input,
  };

  return (
    <div
      style={{
        backgroundColor: theme.palette.background,
        paddingBottom: discord ? theme.spacing(4) : theme.spacing(6),
        paddingTop: discord ? theme.spacing(2) : theme.spacing(6),
      }}
    >
      <Container>
        <Grid
          container
          spacing={2}
        >
          {discord ? (
            <>
              <Grid item xs={12} align="center">
                <ButtonDiscord mb={downXs ? 8 : 1} link="https://discord.gg/j8hzdyg" />
              </Grid>
              <Hidden mdUp>
                <Grid item xs={12} align="center">
                  <img
                    src={Logo}
                    style={{
                      height: '4vh',
                      width: 'auto',
                    }}
                  />
                </Grid>
              </Hidden>
            </>
          ) : (
            <Grid item xs={12}>
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
                spacing={1}
              >
                <Grid item>
                  <IconButton color="primary" href="https://www.facebook.com/mastermusicbrasil/" aria-label="Facebook da Mastermusic">
                    <Facebook />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton color="primary" href="https://www.instagram.com/mastermusicbrasil/" aria-label="Instagram da Mastermusic">
                    <Instagram />
                  </IconButton>
                </Grid>
                <Grid item>
                  <IconButton color="primary" href="https://www.youtube.com/channel/UCGJ87RAeeqO-M2oTha4xxVA/" aria-label="YouTube da Mastermusic">
                    <YouTube />
                  </IconButton>
                </Grid>
              </Grid>
            </Grid>
          )}

          <Grid item xs={12}>
            <Typography align="center" variant={discord ? 'body2' : 'body1'} style={fontStyle}>© Master Music Brasil 2020</Typography>
            <Typography align="center" variant={discord ? 'body2' : 'body1'} style={fontStyle}>Todos os direitos reservados</Typography>
            <Typography align="center" variant={discord ? 'body2' : 'body1'} style={fontStyle}>CNPJ: 35.062.952/0001-14</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
