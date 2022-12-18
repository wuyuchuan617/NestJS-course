import React from "react";
import Link from "next/link";
import Image from "next/image";
import buyCoffeeImg from "../../assets/images/buy-me-a-coffe.svg";
import classes from "./Footer.module.css";
function Footer() {
  return (
    <div className={classes.container}>
      {" "}
      <div className={classes.hiddenMenu}>
        <div className={classes.twoFooter}>
          <div className={classes.footer}>
            <div>
              <ul>
                <li>
                  <Link href="/about">🐰 ABOUT</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <Link href="/component">🥑 COMPONENT</Link>
                </li>
                <li>
                  <Link href="/portfolio">🍄 PORTFOLIO</Link>
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li>
                  <Link href="/note">🛸 NOTE</Link>
                </li>

                <li>
                  <Link href="/collection">👀 COLLECTION</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className={classes.buyCoffee}>
            <Link href={"https://www.buymeacoffee.com/jenniferwuj"}>
              <a target="_blank">
                {" "}
                <Image
                  alt={"yu"}
                  layout="intrinsic"
                  src={buyCoffeeImg}
                  width={50}
                />
              </a>
            </Link>
          </div>
        </div>
        <div>
          <Link href="/">
            <div className={classes.logo}>🚀 YU SPACE</div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
