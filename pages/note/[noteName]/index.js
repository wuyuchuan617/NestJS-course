import React from "react";
import { useRouter } from "next/router";

import Banner from "../../../components/common/Banner";

function NoteDetailPage() {
  const router = useRouter();
  console.log("", router.query.noteName);

  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Banner
        backgroundColor={"#f9f7f6"}
        titleColor={"#C0BDB1"}
        bannerTitle={"Note"}
        bannerSubtitlr={router.query.noteName?.toUpperCase() || ""}
        description={`Elements are the fundamental building blocks of an interface. 
        Understand and cover your components well, and you'll be preparing 
        a consistent infrastructure that enriches the user's experience.`}
      />
      <div style={{ height: "800px" }}></div>
    </div>
  );
}

export default NoteDetailPage;
