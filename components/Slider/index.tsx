import React from "react";
import Link from "next/Link";
import styles from "./Slider.module.css";
import { useState, useEffect } from "react";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { setTimeout } from "timers";
function index() {
  var [activeIndex, setActiveIndex] = useState(0);
  var data = [
    {
      text: "I Make Music",
      buttonText: "Listen to my tracks",
      buttonLink: "https://google.com",
    },
    {
      text: "I Develop Software",
      buttonText: "See My Career Profile",
      buttonLink: "https://google.com",
    },
    {
      text: "I Love coffee",
      buttonText: "Find out!",
      buttonLink: "https://google.com",
    },
    {
      text: "I write about these!",
      buttonText: "See My Blog!",
      buttonLink: "/blog",
    },
  ];

  const nextSlide = () => {
    if (activeIndex == data.length - 1) {
      setActiveIndex(0);
    } else
      setActiveIndex((prev) => {
        return prev + 1;
      });
  };
  const previousSlide = () => {
    if (activeIndex == 0) {
      return;
    } else
      setActiveIndex((prev) => {
        return prev - 1;
      });
  };

  useEffect(() => {
    var timeOut = setInterval(nextSlide, 4000);
    return () => clearInterval(timeOut);
  });
  var current = data[activeIndex];
  return (
    <div className={styles.slider}>
      <div className={styles.slider_nav}>
        <VscTriangleLeft className={styles.icon} onClick={previousSlide} />
        <VscTriangleRight className={styles.icon} onClick={nextSlide} />
      </div>

      <p className={styles.slider_text}>{current.text}</p>
      <Link href={current.buttonLink}>
        <a className={styles.slider_button}>
          <p className={styles.slider_button_text}>{current.buttonText}</p>
          <img src="arrow.svg" className={styles.slider_button_icon} />
        </a>
      </Link>
      <div className={styles.slider_arrow}></div>
    </div>
  );
}

export default index;
