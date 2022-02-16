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
        <title>Farhad Mohseni</title>
      </Head>
      <Hexagon />
      <div className={styles.main}>
        <Slider />
        <div className={styles.image}>
          <img src="My project.png" alt="" />
          <div className={styles.im}>
            <p className={styles.im_text}>I'm</p>
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
