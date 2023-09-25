import React from 'react';
import 'react-toastify/dist/ReactToastify.css';
import './notification.css';
import 'animate.css/animate.min.css';
import './loadingStyles.scss';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/config/theme';
import { appWithTranslation } from 'next-i18next';
import { ToastContainer } from 'react-toastify';

const App = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        icon={false}
      />
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default appWithTranslation(App);
