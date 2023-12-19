import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "../components/Navbar/Navbar";

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <Navbar />
    </main>
  );
};

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <meta name="description" content="South Jersey trusts LambHVAC for superior HVAC services - from precise installation to thorough repairs and maintenance." />
    <title>LambHVAC - Reliable Heating & Cooling in South Jersey</title>;
  </>
);
