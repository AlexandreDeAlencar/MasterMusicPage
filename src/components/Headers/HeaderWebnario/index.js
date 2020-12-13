import React from 'react';
import { useMediaQuery, useTheme } from '@material-ui/core';

import HeaderDesktop from './content/desktop';
import HeaderMobile from './content/mobile';

function HeaderLanding() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('xs'));
  return matches ? <HeaderMobile /> : <HeaderDesktop />;
}

export default HeaderLanding;
