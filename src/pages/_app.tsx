import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer, Flip } from 'react-toastify';

import { AppProps } from 'next/app';
import 'styles/nprogress.css';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';

import { ThemeProvider } from '@material-ui/core';
import { LoaderProvider } from 'contexts/LoaderContext';
import { RentalDateProvider } from 'contexts/RentalDateContext';
import { theme } from 'styles/theme';

import { AuthProvider } from '../contexts/AuthContext';
import { queryClient } from '../services/reactQuery/queryClient';
import { GlobalStyle, ModalStyleGlobal } from '../styles/global';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <RentalDateProvider>
            <GlobalStyle />
            <ModalStyleGlobal />
            <LoaderProvider>
              <Component {...pageProps} />
            </LoaderProvider>
            <ToastContainer
              newestOnTop
              transition={Flip}
              position="top-right"
              theme="dark"
              autoClose={2500}
            />
            <ReactQueryDevtools />
          </RentalDateProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
