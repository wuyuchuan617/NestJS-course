import Link from "next/link";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
       <Link href="/"><div className={classes.logo}>🚀 YU SPACE</div></Link>
      <nav>
        <ul>
         
          <li>
            <Link href="/">🐰 ABOUT</Link>
          </li>
          <li>
            <Link href="/">🥑 LIST</Link>
          </li>
          <li>
            <Link href="/">🛸 NOTE</Link>
          </li>
          <li>
            <Link href="/new-meetup">🐚 Add</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
