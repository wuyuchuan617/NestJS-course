import React from "react";
import ComponentItem from "../../components/component/ComponentItem";
import { COMPONENT_LIST } from "../../const/components";
import classes from "./ComponentList.module.css";

function ComponentList(props) {
  const { data, category } = props;
  return (
    <div className={classes.container}>
      {data.map((item, index) => {
        return (
          <ComponentItem
            key={index}
            icon={item.icon}
            title={item.title}
            url={item.url}
            category={category}
          />
        );
      })}
    </div>
  );
}

export default ComponentList;
