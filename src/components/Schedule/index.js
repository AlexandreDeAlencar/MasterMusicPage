import React from 'react';
import { Box, Typography, useTheme, useMediaQuery } from '@material-ui/core';
import Step from './Step';

function Schedule({ schedule }) {
  const theme = useTheme();
  const downXs = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <>
      <Box>
        <Typography
          variant={downXs ? 'h5' : 'h4'}
          gutterBottom
          color="primary"
          style={{
            fontWeight: 700,
            marginBottom: downXs ? 'none' : theme.spacing(4),
          }}
        >
          Cronograma de aulas
        </Typography>
      </Box>

      <Box p={2} pt={1.5} pb={0}>
        {!!schedule && schedule.map((step, index) => (
          <Step key={step.label} label={step.label} date={step.date} content={step.content} lastItem={index + 1 === schedule.length} />
        ))}
      </Box>
    </>
  );
}

export default Schedule;
