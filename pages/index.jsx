import Heading from '../components/Heading';
import styles from '../styles/Home.module.scss';
import Head from 'next/head';

const Home = () => (
  <>
    <Head>
      <title>Home</title>
    </Head>

    <div className={styles.wrapper}>
      <Heading text="Next.js Application" />
    </div>
  </>

);

export default Home;