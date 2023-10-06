import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#C7D3C5',
      dark: '#495544',
      light: '#fff',
    },
    secondary: { main: '#2B3826' },
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
    fontFamily: ['NT Somic', 'Helvetica', 'Arial', 'sans-serif'].join(','),
  },
});

export default theme;
