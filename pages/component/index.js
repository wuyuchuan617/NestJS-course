import React from "react";
import Banner from "../../components/common/Banner";
import ComponentList from "../../components/component/ComponentList";
function ComponentPage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Banner
        backgroundColor={"rgb(214, 215, 209)"}
        titleColor={"#1f7b8f"}
        bannerTitle={"Components"}
        bannerSubtitlr={"Checklists"}
        description={`Elements are the fundamental building blocks of an interface. 
        Understand and cover your components well, and you'll be preparing 
        a consistent infrastructure that enriches the user's experience.`}
      />
      <ComponentList />
    </div>
  );
}

export default ComponentPage;
