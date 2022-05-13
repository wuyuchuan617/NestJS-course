import React from "react";
import Link from "next/link";

import classes from "./ComponentItem.module.css";

function ComponentItem(props) {
  const { icon, title, category, url } = props;
  return (
    <Link href={`/${category}/${url}`}>
      <div className={classes.container}>
        <div>{icon}</div>
        <div>{title}</div>
      </div>
    </Link>
  );
}

export default ComponentItem;
