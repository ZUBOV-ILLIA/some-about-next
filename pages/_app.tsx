import Layout from '../components/Layout';
import Image from 'next/image';
import youtubeImg from '../public/youtube.png';
import '../styles/globals.scss';
import Head from 'next/head';
import { FC } from 'react';
import { AppProps } from 'next/app';

const MyApp: FC = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300&display=swap" rel="stylesheet" />
    </Head>

    <main>
      <Component {...pageProps} />
    </main>

    {/* <Image
      src={youtubeImg}
      width={600}
      alt="preview"
      placeholder="blur"
    /> */}
  </Layout>
)

export default MyApp
