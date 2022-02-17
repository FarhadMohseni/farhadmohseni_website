import React from "react";
import Link from "next/link";
import styles from "./Slider.module.css";
import { useState, useEffect } from "react";
import { VscTriangleLeft, VscTriangleRight } from "react-icons/vsc";
import { setTimeout } from "timers";
function Slider() {
  var [activeIndex, setActiveIndex] = useState(0);
  var data = [
    {
      text: "I Develop Software 💻",
      hasButton: true,
      buttonText: "My Career Profile",
      buttonLink: "/career",
    },
    {
      text: "I Make Music 🎵",
      hasButton: true,
      buttonText: "Listen to my tracks",
      buttonLink: "https://soundcloud.com/mirextunes",
    },
    {
      text: "I Love coffee ☕️",
      hasButton: false,
      buttonText: "",
      buttonLink: "",
    },
    {
      text: "I write about these!",
      hasButton: true,
      buttonText: "See My Blog!",
      buttonLink: "/blog",
    },

    {
      text: "Talk ? 💬",
      hasButton: true,
      buttonText: "My Contact Information",
      buttonLink: "/contact",
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
  var current = data[activeIndex];
  useEffect(() => {
    var timeOut = setInterval(nextSlide, 4000);
    return () => clearInterval(timeOut);
  });
  const button = current.hasButton ? (
    <Link href={current.buttonLink}>
      <a className={styles.slider_button}>
        <p className={styles.slider_button_text}>{current.buttonText}</p>
        <img src="arrow.svg" alt="" className={styles.slider_button_icon} />
      </a>
    </Link>
  ) : null;

  return (
    <div className={styles.slider}>
      <div className={styles.slider_nav}>
        <VscTriangleLeft className={styles.icon} onClick={previousSlide} />
        <VscTriangleRight className={styles.icon} onClick={nextSlide} />
      </div>

      <p
        className={
          current.hasButton ? styles.slider_text : styles.slider_text_center
        }>
        {current.text}
      </p>
      {button}
      <div className={styles.slider_arrow}></div>
    </div>
  );
}

export default Slider;
