import React from 'react';
import { Box, Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core';
import DownloadIcon from '../../assets/img/download.png';

export default function Info() {
  const theme = useTheme();
  const downXs = useMediaQuery(theme.breakpoints.down('xs'));
  const screenWidth = window.innerWidth;
  const styleIcon = {
    width: downXs ? '2.5rem' : '4rem',
    height: downXs ? '2.5rem' : '4rem',
    paddingBottom: '0.5rem',
    zIndex: 99,
  };
  const styleFont = {
    color: theme.palette.primary.contrastText,
    fontWeight: 800,
    textAlign: 'center',
  };

  return (
    <Grid
      container
      direction="column"
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justify="center"
      >
        <Grid item>
          <Box
            width="min-content"
            bgcolor="primary.main"
            p={2.4}
            mb={downXs ? -6 : -7}
            borderRadius={downXs ? '2.5rem' : '4.5rem'}
            style={{
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <img src={DownloadIcon} alt="Dúvidas ao vivo" style={styleIcon} />
          </Box>
          <Box flex bgcolor="primary.main" p={downXs ? 2 : 4} pt={downXs ? 3 : 5} width={screenWidth}>
            <Typography variant={downXs ? 'body1' : 'h5'} style={styleFont}>INCLUI O DOWNLOAD DO PROJETO!</Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
}
