import React from "react";
import Link from "next/link";
import classes from "./index.module.css";

const data = [
  {
    icon: "🗺",
    name: "React Leaflet",
    description: "The adaptability of a canvas - from mobile, to desktop, to super mega widescreen.",
    url: "maps",
  },
  {
    icon: "⛓",
    name: "React Flow",
    description: "The adaptability of a canvas - from mobile, to desktop, to super mega widescreen.",
    url: "react-flow",
  },
  {
    icon: "🔫",
    name: "Framer",
    description: "The adaptability of a canvas - from mobile, to desktop, to super mega widescreen.",
    url: "framer",
  },
];

const Portfolio = () => {
  return (
    <div className={classes.container}>
      {data.map((item, index) => {
        return (
          <Link href={`/portfolio/${item.url}`}>
            <div className={classes.container1}>
              <div>{item.icon}</div>
              <div>{item.name}</div>
              <div className={classes.description}>{item.description}</div>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Portfolio;
