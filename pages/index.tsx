import type { NextPage } from "next";
import Image from "next/image";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Hexagon from "../components/Hexagon";
import Slider from "../components/Slider";
const Home: NextPage = () => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="This is Farhad Mohseni's Personal Website."
        />
        <meta name="theme-color" content="#ffdf64" />
        <meta name="og:type" content="article" />
        <meta name="og:title" content="Farhad Mohseni" />

        <meta name="og:url" content="https://farhadmohseni.me" />
        <meta
          name="og:description"
          content="This is Farhad Mohseni's Personal Website."
        />
        <title>Farhad Mohseni</title>
      </Head>
      <Hexagon />
      <div className={styles.main}>
        <Slider />
        <div className={styles.image}>
          <img alt="farhadmohseni" src="My project.png" />
          <div className={styles.im}>
            <p className={styles.im_text}>I&apos;m</p>
          </div>
          <div className={styles.name}>
            <p className={styles.name_text}>Farhad Mohseni</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
