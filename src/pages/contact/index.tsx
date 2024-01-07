import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
// import useDebouncedResize from "../../hooks/useDebounceResize";

const ContactPage: React.FC<PageProps> = () => {

  return (
    <>
      <Navbar />
      <Header title="Contact" />
    </>
  );
};

export default ContactPage;

export const Head: HeadFC = () => (
  <>
    <meta name="description" content="Reach out to our expert HVAC team for top-notch heating, cooling, and ventilation solutions. Contact us today for reliable service and professional advice" />
    <title>Contact Us - Professional HVAC Services & Support</title>;
  </>
);
