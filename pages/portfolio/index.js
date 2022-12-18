import React from "react";
import Link from "next/link";
import Banner from "../../components/common/Banner";

function PortfolioPage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Banner
        backgroundColor={"#5C6166"}
        titleColor={"rgb(249, 247, 246)"}
        bannerTitle={"Portfolio"}
        bannerSubtitlr={"Checklists"}
        description={`Elements are the fundamental building blocks of an interface. 
        Understand and cover your components well, and you'll be preparing 
        a consistent infrastructure that enriches the user's experience.`}
      />
      <div style={{ height: "30rem" }}>
        <Link href="/portfolio/maps">map</Link>
      </div>
    </div>
  );
}

export default PortfolioPage;
