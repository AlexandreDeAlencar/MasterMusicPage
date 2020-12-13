import React, { useRef } from 'react';
import { Box, Typography, useTheme, useMediaQuery, IconButton, Grid } from '@material-ui/core';

import Slider from 'react-slick';
import { KeyboardArrowLeft, KeyboardArrowRight } from '@material-ui/icons';

const ratio = 0.56246385;
const screenWidth = window.innerWidth;
const videoWidth = screenWidth * 2 / 3;
const videoHeight = videoWidth * ratio;

const Depoiment = ({ url, description }) => {
  const theme = useTheme();
  const downXs = useMediaQuery(theme.breakpoints.down('xs'));
  const upXs = useMediaQuery(theme.breakpoints.up('xl'));
  const videoId = url.replace('https://youtu.be/', '');
  const urlModified = `https://www.youtube.com/embed/${videoId}?controls=0`;
  return (
    <Box
      justify={downXs ? 'flex-start' : 'center'}
      alignItems="center"
      style={{
        width: downXs ? screenWidth - theme.spacing(6) : (upXs ? 410.66666 : (screenWidth - theme.spacing(8)) * 0.3333333),
        height: downXs ? screenWidth - theme.spacing(14) : 'auto',
        minHeight: downXs ? 0 : 380,
        maxWidth: 410.666666,
        marginLeft: downXs ? 'auto' : 0,
        marginRight: downXs ? 'auto' : 0,
      }}
    >
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item align="center" xs={9} sm={12}>
          <iframe
            controls
            src={urlModified}
            height={downXs ? videoHeight : 'auto'}
            style={{
              width: '100%',
              borderRadius: downXs ? 0 : 6,
              borderWidth: 0,
              marginLeft: 'auto',
              marginRight: 'auto',
              marginBottom: downXs ? theme.spacing(2) : theme.spacing(4),
            }}
          />
        </Grid>
        <Grid
          item
          align="center"
          xs={downXs ? 11 : 8}
        >
          <Typography
            variant={downXs ? 'caption1' : 'h6'}
            gutterBottom
            align="center"
            color="primary"
            style={{
              fontWeight: 400,
              lineHeight: 1,
            }}
          >
            {`"${description}"`}
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

const NextArrow = (props) => {
  const theme = useTheme();
  const downXs = useMediaQuery(theme.breakpoints.down('xs'));
  const { currentSlide, slideCount, className, onClick, onPress } = props;
  return (
    <IconButton
      onClick={onPress}
      style={{
        fontSize: 0,
        lineHeight: 0,
        position: 'absolute',
        top: downXs ? `${(videoHeight / 2 - 17.5)}px` : '35%',
        display: 'block',
        padding: 0,
        right: 0,
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        zIndex: 999999,
      }}
    >
      <KeyboardArrowRight fontSize="large" />
    </IconButton>
  );
};

const PrevArrow = (props) => {
  const theme = useTheme();
  const downXs = useMediaQuery(theme.breakpoints.down('xs'));
  const { currentSlide, slideCount, className, onClick, onPress } = props;
  return (
    <IconButton
      onClick={onPress}
      style={{
        fontSize: 0,
        lineHeight: 0,
        position: 'absolute',
        top: downXs ? `${(videoHeight / 2 - 17.5)}px` : '35%',
        left: 0,
        display: 'block',
        padding: 0,
        cursor: 'pointer',
        border: 'none',
        outline: 'none',
        zIndex: 999999,
      }}
    >
      <KeyboardArrowLeft fontSize="large" />
    </IconButton>
  );
};

const Depoiments = ({ depoiments }) => {
  const theme = useTheme();
  const downXs = useMediaQuery(theme.breakpoints.down('xs'));
  const slider = useRef(null);
  console.log(window.innerWidth);

  const nextSlide = () => slider.current.slickNext();
  const prevSlide = () => slider.current.slickPrev();

  const settings = {
    arrows: true,
    slidesToScroll: 1,
    slidesToShow: downXs ? 1 : 3,
    pauseOnHover: true,
    draggable: true,
    adaptiveHeight: true,
    rows: 1,
    infinite: false,
    variableWidth: true,
    nextArrow: <NextArrow onPress={nextSlide} />,
    prevArrow: <PrevArrow onPress={prevSlide} />,
    initialSlide: 0,
  };

  return (
    <>
      <Box pl={1} pb={2}>
        <Typography
          variant={downXs ? 'h5' : 'h4'}
          gutterBottom
          color="primary"
          style={{
            fontWeight: 700,
            marginBottom: downXs ? 'none' : theme.spacing(4),
          }}
        >
          Depoimentos
        </Typography>
      </Box>

      <Box pb={3}>
        <Slider
          {...settings}
          ref={slider}
          style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}
        >
          {depoiments.map((dep) => (
            <Depoiment key={dep.index} url={dep.url} description={dep.description} />
          ))}
        </Slider>
      </Box>
    </>
  );
};

export default Depoiments;
