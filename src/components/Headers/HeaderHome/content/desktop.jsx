/* eslint-disable function-paren-newline */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import Container from '@material-ui/core/Container';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import Logo from '../../../../assets/svg/Group 1017.svg';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import Button from '@material-ui/core/Button';


import 'fontsource-roboto';

import {
  useScrollTrigger,
  useTheme,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  buttons: {
    // fontSize: 15,
    // fontFamily: 'Roboto',
    // fontStyle: 'normal',
    // fontWeight: 'bold',
    font: 'normal normal bold 15px/20px Roboto',
    height: '20px',
    color: "#FFD59B",
    whiteSpace:"pre-line",
    opacity: "1",
    letterSpacing:"0.93px",
    marginLeft:'32px'

  },
  menuButton: {
    width:'18px',
    height: '32px',
    marginLeft:'32px',
    padding: '0px',
    textAlign: "center" ,
    // background:'#FFFFFF 0% 0% no-repeat padding-box'
  },
  logo: {
    height: '22.51px',
    marginLeft:'218px',
  },
  menu: {
    background: '#212121 0% 0% no-repeat padding-box',
  },
  container:{
    display:'flex',
    alignItems:'center',
    justifyContent:'space-between',
    padding: '0px'
  },
})
)

export default function HeaderLanding(props) {
  const { window } = props;
  const theme = useTheme();
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  


  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window ? window() : undefined,
  });

  const style = {
    minHeight: '48px',
    justifyContent: 'center',
    alignItems: 'center',
    // color: '#fff',
    // backgroundColor: theme.palette.background.default,
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };



  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      // anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <AppBar
      elevation={0}
      style={{
        ...style,
        position: 'fixed',
        background: '#212121 0% 0% no-repeat padding-box',
        // boxShadow: trigger ? '0 3px 6px rgba(0,0,0,0.58)' : 'none',
        padding: '0px',
        boxShadow:'0px 3px 6px #00000029'
      }}
    >
      <Container
        maxWidth="lg"
        className={classes.container}
      >
          <img
            className={classes.logo}
            src={Logo}
            alt="Logo Mastermusic"
          />
          <Grid 
            direction="row"
            justify="center"
            alignItems="center"
            >
              <Button className={classes.buttons} onClick={handleClose}>CURSO DE PRODUÇÃO MUSICAL</Button>
              <Button className={classes.buttons} onClick={handleClose}>SOBRE</Button>
              <Button className={classes.buttons} onClick={handleClose}>DEPOIMENTOS</Button>
              <Button className={classes.buttons} onClick={handleClose}>FAQ</Button>
          </Grid>
          <div/>
      </Container>
    </AppBar>
  );
}
