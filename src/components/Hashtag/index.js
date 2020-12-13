import React from 'react';
import { Typography, useTheme } from '@material-ui/core';

function Hashtag() {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: theme.palette.primary.main,
        borderRadius: 4,
        width: 'min-content',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(3),
        paddingLeft: 12,
        paddingRight: 12,
      }}
    >
      <Typography
        align="center"
        variant="subtitle1"
        style={{
          color: theme.palette.primary.contrastText,
          fontWeight: 800,
        }}
      >
        #metodovicentini
      </Typography>
    </div>
  );
}

export default Hashtag;
