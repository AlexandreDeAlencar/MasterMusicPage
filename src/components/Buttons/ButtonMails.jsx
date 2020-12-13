import React from 'react';
import { Box, Grid, Typography, Link } from '@material-ui/core';

import Gmail from '../../assets/img/gmail.png';
import Yahoo from '../../assets/img/yahoo.png';
import Outlook from '../../assets/img/outlook.png';

export default function ButtonMails({ ...rest }) {
  const iconStyle = {
    width: '2.65rem', height: '2.65rem',
  };
  return (
    <Box pt={3} pb={1.5} {...rest}>
      <Grid container direction="row" justify="space-between" align="center" spacing={2}>
        <Grid item xs={5}>
          <Typography
            variant="body2"
            align="right"
            style={{
              fontWeight: 700,
              fontSize: '1.1rem',
              lineHeight: 1.2,
              color: '#a3a3a3',
            }}
          >
            ACESSE
            {' '}
            <br />
            {' '}
            SEU E-MAIL
          </Typography>
        </Grid>
        <Grid item xs>
          <Grid container direction="row" spacing={2}>
            <Grid item component={Link} href="https://mail.google.com/mail/#search/master-music">
              <img src={Gmail} alt="Acesse o Gmail" style={iconStyle} />
            </Grid>
            <Grid item component={Link} href="https://mail.yahoo.com/">
              <img src={Yahoo} alt="Acesse o Yahoo" style={iconStyle} />
            </Grid>
            <Grid item component={Link} href="https://home.live.com/">
              <img src={Outlook} alt="Acesse o Outlook" style={iconStyle} />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}
