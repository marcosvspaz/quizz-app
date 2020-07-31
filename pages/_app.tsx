/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import '../styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title key="title">10Q | ¿Do you accept the challenge?</title>
        <meta
          name="description"
          content="Play with your friends 10Q (ten questions) and have fun"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
