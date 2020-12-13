import React from 'react';
import { Box, Container } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';

function Session({ bgcolor, children, pt, pb, pl, pr, containerStyle, ...rest }) {
  const theme = useTheme();
  return (
    <Box display="flex" pt={pt || 0} pb={pb || 0} pl={pl || 2} pr={pr || 2} bgcolor={bgcolor || theme.palette.background} {...rest}>
      <Container style={containerStyle}>
        {children}
      </Container>
    </Box>
  );
}

export default Session;
