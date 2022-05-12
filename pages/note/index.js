import React from "react";
import Banner from "../../components/common/Banner";

function NotePage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Banner
        backgroundColor={"rgb(255, 240, 237)"}
        titleColor={"#e9652e"}
        bannerTitle={"Note"}
        bannerSubtitlr={"Checklists"}
        description={`Elements are the fundamental building blocks of an interface. 
        Understand and cover your components well, and you'll be preparing 
        a consistent infrastructure that enriches the user's experience.`}
      />
      <div style={{ height: "30rem" }}></div>
    </div>
  );
}

export default NotePage;
