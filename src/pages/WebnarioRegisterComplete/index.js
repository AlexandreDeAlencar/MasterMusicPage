import React, { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';

import {
  useTheme,
  Grid,
  Typography,
  useMediaQuery,
  Box,
} from '@material-ui/core';
import CheckIcon from '@material-ui/icons/CheckCircleOutlineRounded';

import HeaderApp from '../../components/Headers/HeaderWebnario';
import Footer from '../../components/Footer';
import Session from '../../components/Session';

import TitleUp from '../../assets/img/title.png';
import Hashtag from '../../components/Hashtag';
import ButtonTelegram from '../../components/Buttons/ButtonTelegram';

const WebnarioRegisterComplete = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  useEffect(() => {
    const options = {
      autoConfig: true, // set pixel's autoConfig
      debug: false, // enable logs
    };
    ReactPixel.init('3566405916743028', {
    }, options);
    ReactPixel.pageView();
    ReactPixel.fbq('track', 'RegisterComplete');
  }, []);

  return (
    <>
      <HeaderApp />

      <Session pt={7}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
        >
          <Grid item xs={12} sm={9} md={6}>
            <img
              src={TitleUp}
              alt="Título da página"
              style={{
                width: '100%', marginBottom: theme.spacing(0.75),
              }}
            />

            <Hashtag />

            <Box p={1} pb={0.5} pl={2} mt={2} mb={2}>
              <Grid container alignItems="center" direction="column" justify="space-between" spacing={1}>
                <Grid item xs>
                  <Typography
                    variant={matches ? 'h5' : 'h4'}
                    align="center"
                    gutterBottom
                    color="secondary"
                    style={{
                      lineHeight: matches ? 1.2 : 1.334,
                    }}
                  >
                    Sua participação está confirmada!
                  </Typography>
                </Grid>
                <Grid item>
                  <CheckIcon
                    color="secondary"
                    style={{
                      fontSize: 56,
                    }}
                  />
                </Grid>
                <Grid item xs>
                  <Typography
                    variant={matches ? 'h5' : 'h4'}
                    align="center"
                    gutterBottom
                    style={{
                      lineHeight: matches ? 1.2 : 1.334,
                    }}
                  >
                    Agora é só aguardar os próximos avisos…
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Session>

      <ButtonTelegram />

      <Footer />
    </>
  );
};

export default WebnarioRegisterComplete;
