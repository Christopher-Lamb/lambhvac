import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../../components/Header/Header";
import Navbar from "../../components/Navbar/Navbar";

const InstallsPage: React.FC<PageProps> = () => {
  console.log(window.location.pathname);
  return (
    <>
      <Navbar />
      <Header title="Installs" />
      This is the Install Page
    </>
  );
};

export default InstallsPage;

export const Head: HeadFC = () => (
  <>
    <meta name="description" content="South Jersey trusts LambHVAC for superior HVAC services - from precise installation to thorough repairs and maintenance." />
    <title>LambHVAC - Reliable Heating & Cooling in South Jersey</title>;
  </>
);
