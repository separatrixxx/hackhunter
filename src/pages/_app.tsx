import '../styles/globals.css';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';
import { setLocale } from '../../helpers/locale.helper';
import { wrapper } from '../../features/store/store';
import { Provider } from 'react-redux';
import { TelegramProvider } from '../../layout/TelegramProvider';


export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const { store } = wrapper.useWrappedStore(pageProps);

  return (
    <Provider store={store}>
      <TelegramProvider>
        <Head>
          <title>{setLocale(router.locale).hackhunter}</title>
          <meta name='description' content={setLocale(router.locale).hackhunter} />
          <meta property='og:title' content={setLocale(router.locale).hackhunter} />
          <meta property='og:description' content={setLocale(router.locale).hackhunter} />
          <meta charSet="utf-8" />
          <link rel="icon" href="/logo.svg" type="image/svg+xml" />
          <script async src="https://telegram.org/js/telegram-web-app.js"></script>
          <script
            async
            src="https://telegram.org/js/telegram-widget.js?22"
            data-telegram-login="hack_hunter_bot"
            data-size="large"
            data-radius="16"
            data-auth-url="https://t.me/hack_hunter_bot/hackhunter_app"
            data-request-access="write"></script>
        </Head>
        <Component {...pageProps} />
      </TelegramProvider>
    </Provider>
  );
}
