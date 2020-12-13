import React, { useLayoutEffect, useState } from 'react';
import { makeStyles, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

const screenWidth = window.innerWidth;
const screenHeight = window.innerHeight;

const useStyles = makeStyles((theme) => ({
  videoBox: {
    height: '100%',
    width: '100%',
  },
  videoBoxSmall: {
    height: '100%',
    width: '100%',
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
  video: {
    borderRadius: 16,
  },
  videoSmall: {
    height: '100%',
    borderRadius: 16,
  },
  counterContainer: {
    position: 'absolute',
    zIndex: 998,
    top: screenHeight * 0.11 + theme.spacing(2) + 80,
    right: 0,
    left: 0,
    backgroundColor: '#000c',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    padding: theme.spacing(4),
  },
}));

export default function VideoReproducer({ videoID, timeReference, link }) {
  const classes = useStyles();
  const datetime = Date.now();
  const theme = useTheme();
  const downXs = useMediaQuery(theme.breakpoints.down('md'));
  const downHeight = window.innerHeight < 680;
  const [videoWidth, setVideoWidth] = useState(0);

  const x = datetime < timeReference ? setInterval(() => {
    // Get today's date and time
    const now = new Date().getTime();
    // Find the distance between now and the count down date
    const distance = timeReference - now;
    // Time calculations for days, hours, minutes and seconds
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    // Output the result in an element with id="demo"
    document.getElementById('counter').innerHTML = `${hours < 10 ? `0${hours}` : hours} : ${
      minutes < 10 ? `0${minutes}` : minutes} : ${seconds < 10 ? `0${seconds}` : seconds}`;
    // If the count down is over, write some text
    if (distance <= 0) {
      clearInterval(x);
      document.getElementById('counter').innerHTML = 'Atualize a página para ter acesso ao conteúdo.';
    }
  }, 1000) : 0;

  useLayoutEffect(() => {
    if (screenWidth >= 960) {
      const vElem = document.getElementById('video').offsetHeight;
      const wVideo = vElem * 1.78;
      console.log(vElem);
      setVideoWidth(wVideo);
    } else {
      setVideoWidth(screenWidth);
    }
  }, []);

  return (
    <div className={downXs ? classes.videoBoxSmall : classes.videoBox}>
      <iframe
        id="video"
        controls
        rel={false}
        allowFullScreen
        frameBorder={0}
        src={link}
        width="100%"
        height="100%"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        loading="lazy"
        className={downXs ? classes.videoSmall : classes.video}
        style={datetime < 1602630000000 ? {
          pointerEvents: 'none',
        } : {
        }}
      />
      {datetime < timeReference && (
        <div
          className={classes.counterContainer}
          style={{
            height: videoWidth * 0.57,
            width: '100%',
          }}
        >
          <Typography variant={datetime <= timeReference ? (screenWidth >= 960 ? 'h5' : 'h6') : 'h6'} align="center">FALTAM</Typography>
          <Typography id="counter" variant={datetime <= timeReference ? (screenWidth >= 960 ? 'h2' : 'h4') : 'h5'} color={datetime <= timeReference ? 'primary' : 'secondary'} align="center" />
        </div>
      )}
    </div>
  );
}
