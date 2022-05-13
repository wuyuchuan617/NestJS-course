// import module
import React, { useState } from "react";

// import components
import MainNavigation from "./MainNavigation";
import Footer from "./Footer";
import SideMenu from "./SideMenu";

// import styles
import classes from "./Layout.module.css";

function Layout(props) {
  // handlle sidemenu
  const [showSidemenu, seShowSidemenu] = useState(false);

  return (
    <div>
      {showSidemenu && <SideMenu seShowSidemenu={seShowSidemenu} />}
      <MainNavigation showSidemenu={showSidemenu} seShowSidemenu={seShowSidemenu}/>
      <main className={classes.main}>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
