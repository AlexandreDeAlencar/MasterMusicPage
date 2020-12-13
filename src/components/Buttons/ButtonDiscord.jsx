import React from 'react';
import { ButtonBase, makeStyles, Link, Box, Typography, Grid, useMediaQuery } from '@material-ui/core';

import { useTheme } from '@material-ui/styles';
import DiscordLogo from '../../assets/img/discord.png';

const useStyles = makeStyles((theme) => ({
  buttonCourse: {
    padding: 8,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 8,
    backgroundColor: theme.palette.secondary.main,
    color: theme.palette.secondary.contrastText,
    fontWeight: 600,
  },
  button: {
    padding: 8,
    paddingLeft: 32,
    paddingRight: 32,
    borderRadius: 8,
    backgroundColor: theme.palette.background.dark,
  },
  logo: {
    height: 22,
  },
  label: {
    textTransform: 'uppercase',
    width: '100%',
    textAlign: 'center',
    color: theme.palette.darkColors.label,
    fontWeight: 600,
    marginBottom: theme.spacing(1),
  },
}));

export default function ButtonDiscord({ mt, mb, link, rest }) {
  const classes = useStyles();
  const theme = useTheme();
  const downXs = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box mt={mt} mb={mb}>
      <Typography variant="body2" className={classes.label}>TIRA DÚVIDAS AO VIVO</Typography>

      <Grid container direction="column" justify="center" alignItems="center" spacing={2}>
        <Grid item>
          <ButtonBase
            className={classes.button}
            component={Link}
            target="_blank"
            href={link}
            disableElevation
            size="large"
            {...rest}
          >
            <img src={DiscordLogo} className={classes.logo} />
          </ButtonBase>
        </Grid>
        <Grid item>
          <ButtonBase
            className={classes.buttonCourse}
            component={Link}
            target="_blank"
            href="www.mastermusicbrasil.com"
            disableElevation
            color="secondary"
            size="large"
            variant="contained"
            {...rest}
          >
            CURSO DE PRODUÇÃO MUSICAL
          </ButtonBase>
        </Grid>
      </Grid>
    </Box>
  );
}
