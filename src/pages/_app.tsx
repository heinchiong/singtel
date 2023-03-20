/**
 * import react packages
 */
import * as React from 'react';

/**
 * import next packages
 */
import type { AppProps } from 'next/app';

/**
 * import packages
 */
import { CacheProvider } from '@emotion/react';
import { ThemeProvider, CssBaseline, createTheme } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import { NextIntlProvider } from 'next-intl';

/**
 * import project files
 */
import type { PageProps } from '@components/layouts/types';
import '@/styles/globals.css'
import lightThemeOptions from '@styles/theme/lightThemeOptions';
import createEmotionCache from '@utils/createEmotionCache';

type Props = AppProps & {
  Component: PageProps,
}

const cache = createEmotionCache();
const lightTheme = createTheme(lightThemeOptions);

const MyApp = ({ Component, pageProps }: Props) => {
  const getLayout = Component.getLayout ?? (page => page);
  const Layout = Component.layout ?? React.Fragment;

  return (
    <CacheProvider value={cache}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={lightTheme}>
          <NextIntlProvider messages={pageProps.messages}>
            <CssBaseline />
            <Layout>
              {getLayout(<Component {...pageProps} />)}
            </Layout>
          </NextIntlProvider>
        </ThemeProvider>
      </StyledEngineProvider>
    </CacheProvider>
  );
};

export default MyApp;