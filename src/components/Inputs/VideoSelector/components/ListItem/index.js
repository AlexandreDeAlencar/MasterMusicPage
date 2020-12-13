import React from 'react';
import { Grid, makeStyles, Typography } from '@material-ui/core';
import PlayIcon from '@material-ui/icons/PlayArrow';
import LockIcon from '@material-ui/icons/Lock';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import { useTheme } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  playIcon: {
    display: 'flex',
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
    height: 22,
    width: 22,
    marginRight: 12,
  },
  icon: {
    margin: 'auto',
    color: theme.palette.background.dark,
  },
  playIconOnly: {
    display: 'flex',
    borderRadius: 120,
    alignItems: 'center',
    justifyContent: 'center',
    height: 22,
    width: 22,
    marginRight: 12,
  },
  iconOnly: {
    margin: 'auto',
    color: theme.palette.primary.main,
  },
  day: {
    display: 'flex',
    alignItems: 'center',
    marginRight: 12,
  },
  dayText: {
    fontWeight: 600,
    color: theme.palette.primary.main,
  },
  dateText: {
    fontWeight: 600,
    color: theme.palette.darkColors.label,
  },
}));

export default function ListItem({ day, date, selected, opened }) {
  const classes = useStyles();
  const theme = useTheme();
  return (
    <Grid container>
      <Grid
        item
        className={classes.playIcon}
        style={selected ? {
          backgroundColor: theme.palette.secondary.main,
        } : {
        }}
      >
        <PlayIcon className={classes.icon} fontSize="small" />
      </Grid>
      <Grid item className={classes.playIconOnly}>
        {opened
          ? <LockOpenIcon className={classes.iconOnly} fontSize="small" />
          : <LockIcon className={classes.iconOnly} fontSize="small" />}
      </Grid>
      <Grid item className={classes.day}>
        <Typography variant="body1" className={classes.dayText} selected={selected}>{day}</Typography>
      </Grid>
      <Grid item className={classes.day}>
        <Typography variant="body1" className={classes.dateText}>{date}</Typography>
      </Grid>
    </Grid>
  );
}
