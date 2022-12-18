import React from "react";
// import Script from "next/script";
// import Map from "../../../components/portfolio/map";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const Map = dynamic(() => import("../../../components/portfolio/map"), {
  ssr: false,
});

const PortfolioPage = () => {
  const router = useRouter();
  const page = router.query.noteName?.toUpperCase();
  return (
    <div style={{ minHeight: "50vh" }}>
      <page />
    </div>
  );
};

export default PortfolioPage;
