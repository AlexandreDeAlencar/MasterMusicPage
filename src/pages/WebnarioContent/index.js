import React, { useState, useEffect } from 'react';
import ReactPixel from 'react-facebook-pixel';
import {
  useTheme,
  Grid,
  useMediaQuery,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../../components/Footer';
import VideoSelector from '../../components/Inputs/VideoSelector';
import Title from '../../assets/img/title.png';
import TitleLogo from '../../assets/img/title-logo.png';
import VideoReproducer from '../../components/Inputs/VideoReproducer';

const screenWidth = window.innerWidth;

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100vw',
    // height: screenWidth >= 960 ? '100vh' : 'auto',
    backgroundColor: theme.palette.background.light,
    minHeight: '100vh',
  },
  content: {
    width: '100%',
    // height: '100%',
  },
  logoContainer: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(0.5),
  },
  logoContainerSmall: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(0.5),
  },
  logo: {
    height: '5vh',
    marginLeft: theme.spacing(2),
  },
  title: {
    height: '11vh',
  },
  titleSmall: {
    height: '9vh',
  },
  input: {
    flexGrow: 'inherit',
    marginBottom: theme.spacing(1),
  },
  videoContainer: {
    display: 'flex',
    flexGrow: 3,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: theme.spacing(0.5),
    height: screenWidth >= 960 ? '72vh' : '50.625vw',
    width: screenWidth >= 960 ? '128vh' : '90vw',
    minHeight: screenWidth >= 960 ? '72vh' : '50.625vw',
    minWidth: screenWidth >= 960 ? '128vh' : '90vw',
  },
}));

function WebnarioContent() {
  const classes = useStyles();
  const theme = useTheme();
  const downXs = useMediaQuery(theme.breakpoints.down('sm'));
  const [video, setVideo] = useState(0);

  const webnaryLink = () => {
    switch (true) {
      case video === 1 || video === '1':
        return 'https://www.youtube.com/embed/E6YZH5UtmP0';
      case video === 2 || video === '2':
        return 'https://www.youtube.com/embed/9ZFDNB9gKYo';
      case video === 3 || video === '3':
        return '';
      default:
        return 'https://www.youtube.com/embed/U4TIfznnD9c';
    }
  };

  const timeReference = () => {
    switch (true) {
      case video === 0 || video === '0':
        return 1602630000000;
      case video === 1 || video === '1':
        return 1602716400000;
      default:
        return 1602802800000;
    }
  };

  useEffect(() => {
    const options = {
      autoConfig: true, // set pixel's autoConfig
      debug: false, // enable logs
    };
    ReactPixel.init('3566405916743028', {
    }, options);
    ReactPixel.pageView();
    ReactPixel.fbq('track', 'AulasWebnario');
  }, []);

  return (
    <div className={classes.container}>
      <Grid
        container
        alignItems="center"
        justify="center"
        direction="column"
        className={classes.content}
      >
        <Grid
          item
          xs
          className={downXs ? classes.input : {
          }}
        >
          <Grid container justify="space-around" alignItems="center" className={downXs ? classes.logoContainerSmall : classes.logoContainer}>
            <Grid item>
              <img src={downXs ? Title : TitleLogo} className={downXs ? classes.titleSmall : classes.title} />
            </Grid>
          </Grid>
          <VideoSelector video={video} handleVideo={setVideo} />
        </Grid>
        <Grid
          item
          xs
          className={classes.videoContainer}
        >
          <VideoReproducer link={webnaryLink()} videoID={video} timeReference={timeReference()} />
        </Grid>
        <Grid item xs><Footer discord /></Grid>
      </Grid>
    </div>
  );
}

export default WebnarioContent;
