import React, { useMemo } from "react";
// import Script from "next/script";
// import Map from "../../../components/portfolio/map";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const Map = dynamic(() => import("../../../components/portfolio/map"), {
  ssr: false,
});
const ReactFlow = dynamic(
  () => import("../../../components/portfolio/react-flow"),
  {
    ssr: false,
  }
);

const PortfolioPage = () => {
  const router = useRouter();
  const page = router.query.portfolioName;

  const pageComponent = useMemo(() => {
    switch (page) {
      case "react-flow":
        return <ReactFlow />;
        break;
      case "maps":
        return <Map />;
        break;

      default:
        return <ReactFlow />;
        break;
    }
  }, [page]);

  return (
    <div style={{ minHeight: "50vh", height: "80vh" }}>{pageComponent}</div>
  );
};

export default PortfolioPage;
