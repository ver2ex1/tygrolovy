import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9ECDBB',
      dark: '#34422f',
      light: '#fff',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 660,
      md: 900,
      lg: 1025,
      xl: 1536,
    },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          scrollBehavior: 'smooth',
        },
      },
    },
  },
  typography: {
    fontFamily: ['Amazing Grotesk', 'Helvetica', 'Arial', 'sans-serif'].join(
      ','
    ),
  },
});

export default theme;
