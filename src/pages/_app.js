import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './notification.css';
import 'animate.css/animate.min.css';
import './loadingStyles.scss';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/config/theme';
import { appWithTranslation } from 'next-i18next';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default appWithTranslation(App);
