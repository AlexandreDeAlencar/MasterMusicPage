import React from 'react';
import {
  Grid,
  Typography,
  FormControl,
  Select, MenuItem, InputBase,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { withStyles } from '@material-ui/styles';
import ListItem from './components/ListItem';

const CustomInput = withStyles((theme) => ({
  root: {
    width: '100%',
    'label + &': {
      marginTop: theme.spacing(2),
    },
  },
  input: {
    width: '100%',
    borderRadius: 8,
    position: 'relative',
    backgroundColor: theme.palette.background.dark,
    fontSize: '1.2rem',
    padding: '10px 24px 10px 16px',
    // Use the system font instead of the default Roboto font.
    '&:focus': {
      borderRadius: 8,
      // borderColor: '#000',
      // boxShadow: '0 0 0 0.2rem rgba(0,0,0,.25)',
      backgroundColor: theme.palette.background.dark,
    },
  },
}))(InputBase);

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    maxWidth: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
    zIndex: 9999,
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%',
  },
  label: {
    textTransform: 'uppercase',
    width: '100%',
    textAlign: 'center',
    color: theme.palette.darkColors.label,
    fontWeight: 600,
  },
  xs100: {
    width: '100%',
  },
}));

function VideoSelector({ video, handleVideo }) {
  const classes = useStyles();
  const datetime = Date.now();

  const handleChange = (value) => {
    handleVideo(value.target.value);
  };

  return (
    <div className={classes.container}>
      <Grid
        container
        alignItems="center"
        align="center"
        justify="space-between"
        direction="column"
      >
        <Grid item xs className={classes.xs100}>
          <Typography variant="body2" className={classes.label}>Escolha  a  aula</Typography>
          <FormControl className={classes.formControl}>
            <Select
              labelId="customized-select-video"
              id="customized-select-video"
              value={video}
              onChange={handleChange}
              input={<CustomInput />}
            >
              <MenuItem value={0}>
                <ListItem selected={video === 0} date="13/10" day="DIA 1" opened={datetime >= 1602630000000} />
              </MenuItem>
              <MenuItem value={1} disabled={datetime < 1602712800000}>
                <ListItem selected={video === 1} date="14/10" day="DIA 2" opened={datetime >= 1602716400000} />
              </MenuItem>
              <MenuItem value={2} disabled={datetime < 1602799200000}>
                <ListItem selected={video === 2} date="15/10" day="DIA 3" opened={datetime >= 1602802800000} />
              </MenuItem>
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </div>
  );
}

export default VideoSelector;
