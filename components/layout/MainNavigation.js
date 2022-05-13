import Link from "next/link";

import classes from "./MainNavigation.module.css";

function MainNavigation(props) {
  const { seShowSidemenu, showSidemenu } = props;
  return (
    <>
      <header className={classes.header}>
        <div
          className={`${classes.menu} ${showSidemenu && classes.opened}`}
          onClick={() => seShowSidemenu(!showSidemenu)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <Link href="/">
          <div className={classes.logo}>🚀 YU SPACE</div>
        </Link>
        <nav>
          <ul>
            {/* <li>
              <Link href="/about">🐰 ABOUT</Link>
            </li> */}
            {/* <li>
              <Link href="/component">🥑 COMPONENT</Link>
            </li> */}
            {/* <li>
              <Link href="/note">🛸 NOTE</Link>
            </li>
            <li>
              <Link href="/portfolio">🍄 PORTFOLIO</Link>
            </li> */}
            {/* <li>
              <Link href="/new-meetup">🐚 ADD</Link>
            </li> */}
            {/* <li>
              <Link href="/new-meetup">👀 COLLECTION</Link>
            </li> */}
          </ul>
        </nav>
      </header>
    </>
  );
}

export default MainNavigation;
