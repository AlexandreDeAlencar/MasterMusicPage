import React from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';

import HeaderDesktop from './content/desktop';
import HeaderMobile from './content/mobile';

function HeaderHome() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));
  return matches ? <HeaderMobile /> : <HeaderDesktop />;
}

export default HeaderHome;
