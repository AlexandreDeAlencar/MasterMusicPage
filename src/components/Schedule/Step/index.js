import React from 'react';
import { Box, Grid, Typography, useMediaQuery } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

function Step({ label, date, content, lastItem }) {
  const theme = useTheme();
  const downXs = useMediaQuery(theme.breakpoints.down('xs'));
  return (
    <Box
      pb={1.5}
      style={{
        marginLeft: -theme.spacing(1.5),
      }}
    >
      <Grid container direction="column">
        <Grid container alignItems="center" spacing={2}>
          <Grid item>
            <Box bgcolor="primary.main" pr={1} pl={1} pt={0.375} pb={0.375} borderRadius={4}>
              <Typography
                variant="h6"
                style={{
                  color: theme.palette.primary.contrastText,
                  fontWeight: 700,
                  lineHeight: 1.24,
                }}
              >
                {label}
              </Typography>
            </Box>
          </Grid>
          <Grid item>
            <Typography
              variant="h6"
              color="primary"
              style={{
                fontWeight: 600,
              }}
            >
              {date}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          style={{
            marginTop: theme.spacing(1.5),
          }}
        >
          <Grid item>
            <div style={{
              backgroundColor: theme.palette.primary.main, width: 2, height: '100%', marginLeft: theme.spacing(5), marginRight: theme.spacing(2.5),
            }}
            />
            {lastItem && (
            <div style={{
              backgroundColor: theme.palette.primary.main, width: 16, height: 2, marginLeft: theme.spacing(2.5) + 13, marginRight: 'auto',
            }}
            />
            )}
          </Grid>
          <Grid item xs>
            <Typography
              variant={downXs ? 'body1' : 'h6'}
              style={{
                fontWeight: 300,
                lineHeight: downXs ? 1.11 : 1.3,
              }}
              gutterBottom
              dangerouslySetInnerHTML={{
                __html: content,
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Step;
