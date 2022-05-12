import React from "react";
import classes from "./Banner.module.css";
function Banner(props) {
  const {
    backgroundColor,
    bannerTitle,
    bannerSubtitlr,
    description,
    titleColor,
  } = props;
  return (
    <div
      className={classes.container}
      style={{ backgroundColor: backgroundColor }}
    >
      <div className={classes.title} style={{ color: titleColor }}>
        {bannerTitle}
      </div>
      <div className={classes.subtitle}>{bannerSubtitlr}</div>
      <p>{description}</p>
    </div>
  );
}

export default Banner;
