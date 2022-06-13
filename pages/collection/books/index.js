import React from "react";
import BookList from "../../../components/collection/BookList";
import Banner from "../../../components/common/Banner";

function BookCollectionPage() {
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <Banner
        backgroundColor={"#f9f7f6"}
        titleColor={"#C0BDB1"}
        bannerTitle={"Collection"}
        bannerSubtitlr={"Book"}
        description={`Elements are the fundamental building blocks of an interface. 
        Understlmland and cover your components well, and you'll be preparing 
        a consistent infrastructure that enriches the user's experience.`}
      />
      <BookList />
    </div>
  );
}

export default BookCollectionPage;
