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
      <section className=" px-4 container xl:max-w-6xl mx-auto">
        <p className="text-md lg:text-lg">
          Welcome to our HVAC service center, where your comfort is our top priority! We specialize in expert installation, meticulous repair, and regular maintenance of all your heating, ventilation,
          and air conditioning needs. Our team is dedicated to ensuring your environment is perfect, whether it's the peak of summer heat or the chill of winter. Have questions or need assistance?
          We're just a message or phone call away. Reach out to us today for friendly, professional service tailored to your unique HVAC needs!
        </p>
      </section>
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
