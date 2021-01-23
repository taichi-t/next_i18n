import * as React from 'react';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import messages from '../dictionary.json';
import '../styles/font.css';

export default function App({ Component, pageProps }) {
  const { locale, defaultLocale } = useRouter();
  return (
    <>
      <IntlProvider
        locale={locale}
        messages={messages[locale]}
        defaultLocale={defaultLocale}
      >
        <Component {...pageProps} />
      </IntlProvider>
    </>
  );
}
