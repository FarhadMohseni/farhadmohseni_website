import type { NextPage } from "next";
import Header from "../components/Header";
import styles from "../styles/Blog.module.css";
import { Client } from "../utils/prismicHelpers";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";
import { GetStaticProps } from "next";
import Head from "next/head";
const Blog: NextPage<{ posts: any }> = ({ posts }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="description" content="This is the Farhad Mohseni's blog." />
        <meta name="theme-color" content="#ffdf64" />
        <meta name="og:type" content="article" />
        <meta name="og:title" content="Blog | Farhad Mohseni" />

        <meta name="og:url" content="https://farhadmohseni.me/blog/" />
        <meta
          name="og:description"
          content="This is the Farhad Mohseni's blog."
        />

        <title>Blog | Farhad Mohseni</title>
      </Head>
      <div className={styles.main}>
        <Header text="Blog" />
        <div className={styles.articles}>
          {posts.map((post: any) => {
            return (
              <div key={post.data.uid} className={styles.article_item}>
                <div className={styles.article_image}>
                  <img
                    src={post.data.article_image.url}
                    alt={RichText.asText(post.data.title)}
                  />
                </div>
                <div className={styles.article_details}>
                  <h1 className={styles.article_title}>
                    {RichText.asText(post.data.title)}
                  </h1>
                  <p className={styles.article_summary}>{post.data.summary}</p>
                </div>
                <a
                  href={`/article/${post.uid}`}
                  className={styles.article_readmore}>
                  Read More
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
// @ts-ignore
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const posts = await Client().getAllByType("article");
  return {
    props: {
      posts,
    },
  };
};
export default Blog;
