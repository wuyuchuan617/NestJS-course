import React from "react";
import Link from "next/link";
import classes from "./index.module.css";

function SideMenu(props) {
  const { seShowSidemenu } = props;
  return (
    <>
      <div
        className={classes.backdrop}
        onClick={() => seShowSidemenu(false)}
      ></div>
      <div className={classes.hiddenMenu}>
        <div style={{ height: "100px" }}></div>
        <Link href="/">
          <div className={classes.logo}>🚀 YU SPACE</div>
        </Link>
        <ul>
          <li onClick={() => seShowSidemenu(false)}>
            <Link href="/about">🐰 ABOUT</Link>
          </li>
          <li onClick={() => seShowSidemenu(false)}>
            <Link href="/component">🥑 COMPONENT</Link>
          </li>
          <li onClick={() => seShowSidemenu(false)}>
            <Link href="/portfolio">🍄 PORTFOLIO</Link>
          </li>
          <li onClick={() => seShowSidemenu(false)}>
            <Link href="/note">🛸 NOTE</Link>
            {/* <div className={classes.subSection}>
              <Link href="/note/react"> - React</Link>
              <Link href="/note/js"> - Javascript</Link>
              <Link href="/note/ts"> - Typescript</Link>
              <Link href="/note/nextjs"> - Next</Link>
            </div> */}
          </li>

          <li onClick={() => seShowSidemenu(false)}>
            <Link  href="/new-meetup">
              🐚 ADD
            </Link>
          </li>
          <li onClick={() => seShowSidemenu(false)}>
            <Link href="/collection">👀 COLLECTION</Link>

            <div className={classes.subSection}>
              <Link href="/collection/books"> - BOOKS</Link>
              {/* <Link href="/collection/cafes"> - CAFE</Link>
              <Link href="/collection/locations"> - LOCATION</Link>
              <Link href="/collection/websites"> - WEBSITE</Link> */}
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default SideMenu;
