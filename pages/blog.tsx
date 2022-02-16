import type { NextPage } from "next";
import Header from "../components/Header";
import styles from "../styles/Blog.module.css";
const Blog: NextPage = () => {
  return (
    <div className={styles.main}>
      <Header text="Blog" />
      <div className={styles.articles}>
        <div className={styles.article_item}>
          <div className={styles.article_image}>
            <img src="image.jpg" alt="" />
          </div>
          <div className={styles.article_details}>
            <h1 className={styles.article_title}>Article</h1>
            <p className={styles.article_summary}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              eligendi officia sed quis quod asperiores fuga vitae ea. Vitae
              perspiciatis nobis sint at dolore nam praesentium. At ea odio
            </p>
          </div>
          <a href="#" className={styles.article_readmore}>
            Read More
          </a>
        </div>
        <div className={styles.article_item}>
          <div className={styles.article_image}>
            <img src="image.jpg" alt="" />
          </div>
          <div className={styles.article_details}>
            <h1 className={styles.article_title}>Article</h1>
            <p className={styles.article_summary}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              eligendi officia sed quis quod asperiores fuga vitae ea. Vitae
              perspiciatis nobis sint at dolore nam praesentium. At ea odio
            </p>
          </div>
          <a href="#" className={styles.article_readmore}>
            Read More
          </a>
        </div>
        <div className={styles.article_item}>
          <div className={styles.article_image}>
            <img src="image.jpg" alt="" />
          </div>
          <div className={styles.article_details}>
            <h1 className={styles.article_title}>Article</h1>
            <p className={styles.article_summary}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              eligendi officia sed quis quod asperiores fuga vitae ea. Vitae
              perspiciatis nobis sint at dolore nam praesentium. At ea odio
            </p>
          </div>
          <a href="#" className={styles.article_readmore}>
            Read More
          </a>
        </div>
        <div className={styles.article_item}>
          <div className={styles.article_image}>
            <img src="image.jpg" alt="" />
          </div>
          <div className={styles.article_details}>
            <h1 className={styles.article_title}>Article</h1>
            <p className={styles.article_summary}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              eligendi officia sed quis quod asperiores fuga vitae ea. Vitae
              perspiciatis nobis sint at dolore nam praesentium. At ea odio
            </p>
          </div>
          <a href="#" className={styles.article_readmore}>
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Blog;
