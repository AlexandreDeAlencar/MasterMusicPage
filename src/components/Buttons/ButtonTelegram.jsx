import React from 'react';
import { Button, Link, Typography, useMediaQuery } from '@material-ui/core';
// import SendIcon from '@material-ui/icons/Send';
import SvgIcon from '@material-ui/core/SvgIcon';
import { useTheme } from '@material-ui/styles';
import Session from '../Session';
import { ReactComponent as TelegramIcon } from '../../assets/svg/telegram.svg';

const ButtonTelegram = ({ ...rest }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <>
      <Session pb={1.5} pl={2} pr={2} {...rest}>
        <Typography
          variant={matches ? 'h5' : 'h4'}
          align="center"
          gutterBottom
          style={{
            lineHeight: matches ? 1.2 : 1.334,
            color: '#59CDFF',
            marginBottom: theme.spacing(2),
            fontWeight: 800,
          }}
        >
          Faça parte do grupo exclusivo do Telegram
        </Typography>
        <Typography
          variant={matches ? 'body1' : 'h6'}
          align="center"
          gutterBottom
          style={{
            color: '#fff',
            fontWeight: 300,
          }}
        >
          Clique e cadastre-se para
          {' '}
          <br />
          {' '}
          <b>receber exclusivamente conteúdos diários de Produção Musical!</b>
        </Typography>
        <Typography
          variant={matches ? 'h6' : 'h5'}
          align="center"
          gutterBottom
          style={{
            color: '#59CDFF',
            fontWeight: 400,
          }}
        >
          100% gratuito!
        </Typography>
      </Session>
      <Session justifyContent="center" alignItems="center" align="center">
        <Button
          component={Link}
          href="https://t.me/joinchat/AAAAAFKrFlbtZbyPRszyFg"
          disableElevation
          fullWidth
          color="secondary"
          size="large"
          variant="contained"
          startIcon={(
            <SvgIcon style={{
              marginRight: 8,
            }}
            >
              <TelegramIcon />
            </SvgIcon>
)}
          style={{
            fontSize: 18,
            backgroundColor: '#2CA4D7',
            color: '#fff',
            fontWeight: 600,
            maxWidth: 420,
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          QUERO PARTICIPAR!
        </Button>
      </Session>
    </>
  );
};

export default ButtonTelegram;
