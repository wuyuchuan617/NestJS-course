import React from "react";
import Link from "next/link";

import Banner from "../../components/common/Banner";

function CollectionPage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Banner
        backgroundColor={"#f9f7f6"}
        titleColor={"#C0BDB1"}
        bannerTitle={"Collection"}
        bannerSubtitlr={"Checklists"}
        description={`Elements are the fundamental building blocks of an interface. 
        Understand and cover your components well, and you'll be preparing 
        a consistent infrastructure that enriches the user's experience.`}
      />
      <Link href="/collection/books">
        <div style={{ height: "30rem" }}>
          <div
            style={{
              height: "100px",
              width: "100px",
              backgroundColor: "#3D3C37",
              color: "rgb(249, 247, 246)",
            }}
          >
            BOOKS
          </div>
        </div>
      </Link>
    </div>
  );
}

export default CollectionPage;
