import React from "react";
import Image from "next/image";
import myPic from "../../assets/images/25D268C4-CC3D-4EEE-B3D9-85B357198EDA.jpg";
import classes from "./About.module.css";

function About() {
  return (
    <div className={classes.container}>
      {/* <div>About</div> */}
      <div className={classes.photo}>
        <Image alt={"yu"} layout="intrinsic" src={myPic} />
      </div>
      <div className={classes.context}>
  
        <div>YU CHUAN</div>
        <div>FRONTEND ENGINEER</div>
        <p>REACT | TYPESCRIPT | NEXTJS</p>
        <p>Based in Taipei Taiwan 🇹🇼 </p>
      </div>
    </div>
  );
}

export default About;
