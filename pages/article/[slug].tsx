import type { NextPage } from "next";
import Image from "next/image";
import Header from "../../components/Header";
import styles from "../../styles/Article.module.css";
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from "next";
import { PrismicDocument } from "@prismicio/types";
// Update the path for your API client file.
import { Client } from "../../utils/prismicHelpers";
import * as prismic from "@prismicio/client";
import { RichText } from "prismic-reactjs";
import Head from "next/head";
const Article = ({ post }: any) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="description" content={RichText.asText(post.data.summary)} />
        <meta name="theme-color" content="#ffdf64" />
        <meta name="og:type" content="article" />
        <meta name="og:title" content={RichText.asText(post.data.title)} />

        <meta
          name="og:url"
          content={"https://farhadmohseni.me/article/" + post.data.uid}
        />
        <meta
          name="og:description"
          content={RichText.asText(post.data.summary)}
        />
        <meta name="og:image" content={post.data.article_image.url} />
        <title>{RichText.asText(post.data.title)}</title>
      </Head>
      <div className={styles.main}>
        <Header back="/blog" text={RichText.asText(post.data.title)} />
        <div className={styles.articles}>
          <div className={styles.article_item}>
            <div className={styles.article_image}>
              <img src={post.data.article_image.url} alt="" />
            </div>
            <div className={styles.article_details}>
              <h1 className={styles.article_title}>
                {RichText.asText(post.data.title)}
              </h1>
              <p className={styles.article_sub_title}>
                Farhad Mohseni |{" "}
                <span className={styles.article_date}>
                  {post.data.article_date}
                </span>
              </p>
              <p className={styles.article_summary}>
                {RichText.asText(post.data.article_content)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
// @ts-ignore
export const getStaticProps: GetStaticProps = async ({ params }) => {
  if (!params || !params.slug) return;
  let post = await Client().getByUID("article", params.slug?.toString(), {});
  return {
    props: {
      post,
    },
  };
};

export async function getStaticPaths() {
  const docs = await Client().getAllByType("article");
  return {
    paths: docs.map((doc: PrismicDocument) => {
      return { params: { slug: doc.uid } };
    }),
    fallback: false,
  };
}

export default Article;
