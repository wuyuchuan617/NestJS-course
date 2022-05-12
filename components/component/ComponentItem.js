import React from "react";
import classes from "./ComponentItem.module.css";

function ComponentItem(props) {
  const { icon, title } = props;
  return (
    <div className={classes.container}>
      <div>{icon}</div>
      <div>{title}</div>
    </div>
  );
}

export default ComponentItem;
