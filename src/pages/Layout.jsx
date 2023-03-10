import { layoutStyles } from '../components/styles';
import { Box } from '@mui/material';

const Layout = ({ children, href }) => {
  const classes = layoutStyles();
  return (
    <Box sx={classes.wrapper} id={href}>
      {children}
    </Box>
  );
};

export default Layout;
