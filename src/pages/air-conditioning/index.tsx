import React from "react";
import type { HeadFC, PageProps } from "gatsby";

const ContactPage: React.FC<PageProps> = () => {
  return <>This is the Air Conditioning Page</>;
};

export default ContactPage;

export const Head: HeadFC = () => (
  <>
    <meta name="description" content="South Jersey trusts LambHVAC for superior HVAC services - from precise installation to thorough repairs and maintenance." />
    <title>LambHVAC - Reliable Heating & Cooling in South Jersey</title>;
  </>
);
