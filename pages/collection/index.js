import React from "react";
import Link from "next/link";
import ComponentList from "../../components/component/ComponentList";
import Banner from "../../components/common/Banner";

import { COLLECTION_LIST } from "../../const/components";

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
      <ComponentList data={COLLECTION_LIST} category={"collection"} />
    </div>
  );
}

export default CollectionPage;
