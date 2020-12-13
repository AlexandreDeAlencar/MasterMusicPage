import React from 'react';
import { Typography, useTheme } from '@material-ui/core';

function BlankTag({ children, bgcolor, fontcolor, mt, mb }) {
  const theme = useTheme();
  return (
    <div
      style={{
        backgroundColor: bgcolor || theme.palette.primary.main,
        borderRadius: 4,
        width: 'fit-content',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: theme.spacing(mb || 1.5),
        marginTop: theme.spacing(mt || 1.5),
        padding: 3,
        paddingBottom: 2,
        paddingLeft: 12,
        paddingRight: 12,
      }}
    >
      <Typography
        align="center"
        variant="h6"
        style={{
          color: fontcolor || theme.palette.primary.contrastText,
          fontWeight: 800,
        }}
      >
        {children}
      </Typography>
    </div>
  );
}

export default BlankTag;
