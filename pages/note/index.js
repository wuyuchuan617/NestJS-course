import React from "react";
import Banner from "../../components/common/Banner";
import ComponentList from "../../components/component/ComponentList";

import { NOTE_LIST } from "../../const/components";
function NotePage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Banner
        backgroundColor={"#f9f7f6"}
        titleColor={"#C0BDB1"}
        bannerTitle={"Note"}
        bannerSubtitlr={"Checklists"}
        description={`Elements are the fundamental building blocks of an interface. 
        Understand and cover your components well, and you'll be preparing 
        a consistent infrastructure that enriches the user's experience.`}
      />
      <ComponentList data={NOTE_LIST} category={"note"} />
    </div>
  );
}

export default NotePage;
