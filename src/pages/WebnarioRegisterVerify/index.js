import React, { useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';
import {
  useTheme,
  Grid,
  Typography,
  useMediaQuery,
  Box,
} from '@material-ui/core';

import HeaderApp from '../../components/Headers/HeaderWebnario';
import Footer from '../../components/Footer';
import Session from '../../components/Session';

import TitleUp from '../../assets/img/title.png';
import Hashtag from '../../components/Hashtag';
import BlankTag from '../../components/Tags/BlankTag';
import ButtonTelegram from '../../components/Buttons/ButtonTelegram';
import ButtonMails from '../../components/Buttons/ButtonMails';

const WebnarioRegisterVerify = () => {
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
    ReactPixel.fbq('track', 'RegisterVerify');
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

            <Box p={1} pl={2} mt={2} mb={2}>
              <Typography
                variant={matches ? 'h5' : 'h4'}
                align="center"
                gutterBottom
                style={{
                  lineHeight: matches ? 1.2 : 1.334,
                  fontWeight: 600,
                }}
              >
                Sua participação está quase confirmada!
              </Typography>
            </Box>

            <BlankTag mt={3} mb={3}>PASSO 1</BlankTag>

            <Typography
              variant={matches ? 'h5' : 'h4'}
              align="center"
              gutterBottom
              color="primary"
              style={{
                lineHeight: matches ? 1.2 : 1.334,
                marginBottom: theme.spacing(2),
                fontWeight: 800,
              }}
            >
              Confirme seu e-mail
            </Typography>

            <Typography
              variant={matches ? 'body1' : 'h6'}
              align="center"
              gutterBottom
              style={{
                // lineHeight: matches ? 1.2 : 1.334,
                color: '#fff',
                fontWeight: 300,
              }}
            >
              Você acabou de receber um e-mail nosso.
              {' '}
              <b>Esse é um passo importante para garantir sua vaga.</b>
            </Typography>

            <Typography
              variant={matches ? 'body1' : 'h6'}
              align="center"
              gutterBottom
              style={{
                // lineHeight: matches ? 1.2 : 1.334,
                color: '#fff',
                fontWeight: 300,
              }}
            >
              Confirme sua particiapação no e-mail para receber o
              {' '}
              <b>link do evento.</b>
            </Typography>

            <ButtonMails />
          </Grid>
        </Grid>
      </Session>

      <Session pl={3} pr={3} alignItems="center" align="center" justifyContent="center">
        <BlankTag bgcolor="#2CA4D7" fontcolor="#fff" mt={3} mb={3}>PASSO 2</BlankTag>
      </Session>

      <ButtonTelegram />

      <Footer />
    </>
  );
};

export default WebnarioRegisterVerify;
