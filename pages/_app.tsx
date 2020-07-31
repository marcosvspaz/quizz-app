/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { QuizContextProvider } from '../contexts/quiz';
import '../styles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <QuizContextProvider initialStaticState={pageProps.initialStaticState}>
      <Head>
        <title key="title">10Q</title>
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
