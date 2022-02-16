import type { NextPage } from "next";
import Image from "next/image";
import Header from "../../components/Header";
import styles from "../../styles/Article.module.css";
const Blog: NextPage = () => {
  return (
    <div className={styles.main}>
      <Header text="Blog" />
      <div className={styles.articles}>
        <div className={styles.article_item}>
          <div className={styles.article_image}>
            <img src="/image.jpg" alt="" />
          </div>
          <div className={styles.article_details}>
            <h1 className={styles.article_title}>Summary</h1>
            <p className={styles.article_sub_title}>
              Farhad Mohseni |{" "}
              <span className={styles.article_date}>2020/8/2</span>
            </p>
            <p className={styles.article_summary}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              eligendi officia sed quis quod asperiores fuga vitae ea. Vitae
              perspiciatis nobis sint at dolore nam praesentium. At ea odio
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
