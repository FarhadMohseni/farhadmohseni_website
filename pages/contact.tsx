import type { NextPage } from "next";
import Header from "../components/Header";
import styles from "../styles/Contact.module.css";
import Link from "next/link";
import Head from "next/head";
import { FaStackOverflow, FaLinkedin, FaTelegram } from "react-icons/fa";
import { ImSoundcloud2 } from "react-icons/im";
const Contact: NextPage<{ posts: any }> = ({ posts }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta
          name="description"
          content="Farhad Mohseni's contact information."
        />
        <meta name="theme-color" content="#ffdf64" />
        <meta name="og:type" content="article" />
        <meta name="og:title" content="Contact Information | Farhad Mohseni" />

        <meta name="og:url" content="https://farhadmohseni.me/contact/" />
        <meta
          name="og:description"
          content="Farhad Mohseni's contact information."
        />
        <title>Contact Information | Farhad Mohseni</title>
      </Head>
      <div className={styles.main}>
        <Header dark={true} text="Contact Information" />
        <div className={styles.contact}>
          <div className={styles.contact_item}>
            <div className={styles.contact_details}>
              <p className={styles.contact_email}>
                Email: realfarhadmohseni@gmail.com
              </p>
              <div className={styles.contact_icons}>
                <Link href="https://linkedin.com/in/FarhadMohseni">
                  <FaLinkedin className={styles.contact_icon} />
                </Link>

                <Link href="https://stackoverflow.com/users/6899111/farhadmohseni">
                  <FaStackOverflow className={styles.contact_icon} />
                </Link>

                <Link href="https://soundcloud.com/mirextunes">
                  <ImSoundcloud2 className={styles.contact_icon} />
                </Link>
                <Link href="https://t.me/mrmirex">
                  <FaTelegram className={styles.contact_icon} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
