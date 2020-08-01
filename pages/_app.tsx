/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { QuizContextProvider } from '../contexts/quiz';
import '../styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <QuizContextProvider initialStaticState={{}}>
      <Head>
        <title key="title">10Q</title>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#524de6" />
        <meta
          name="description"
          content="Play with your friends 10Q (ten questions) and have fun"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </QuizContextProvider>
  );
}

export default MyApp;
