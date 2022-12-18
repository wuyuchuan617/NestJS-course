import React from "react";
// import Script from "next/script";
// import Map from "../../../components/portfolio/map";
import dynamic from "next/dynamic";

const Map = dynamic(() => import("../../../components/portfolio/map"), {
  ssr: false,
});

const Maps = () => {
  return (
    <>
      <Map />
    </>
  );
};

export default Maps;
