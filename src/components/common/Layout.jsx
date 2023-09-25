import { layoutStyles } from './styles';
import { Box } from '@mui/material';
import React from 'react';

const Layout = ({ children, href }) => {
  const classes = layoutStyles();
  return (
    <Box sx={classes.wrapper} id={href}>
      {children}
    </Box>
  );
};

export default Layout;
