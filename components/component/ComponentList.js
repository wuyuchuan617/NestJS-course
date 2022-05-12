import React from "react";
import ComponentItem from "../../components/component/ComponentItem";
import { COMPONENT_LIST } from "../../const/components";
import classes from "./ComponentList.module.css";

function ComponentList() {
  return (
    <div className={classes.container}>
      {COMPONENT_LIST.map((item, index) => {
        return (
          <ComponentItem key={index} icon={item.icon} title={item.title} />
        );
      })}
    </div>
  );
}

export default ComponentList;
