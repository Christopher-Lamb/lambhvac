import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header/Header";
import PictureText from "../components/PictureText";
import Bullets from "../components/Bullets/Bullets";
import { GiPhone } from "react-icons/gi";
import Button from "../components/Button";

const ContactPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header title="Test" />
      <div className="mb-16" />
      <div className="mx-auto flex items-center justify-center max-w-7xl">
        <Button varient="secondary-rounded">Test Btn</Button>
      </div>
    </>
  );
};

export default ContactPage;

export const Head: HeadFC = () => (
  <>
    <meta
      name="description"
      content="Discover LambHVAC - Your trusted HVAC experts providing top-quality heating and cooling solutions. With years of experience, we ensure your comfort year-round."
    />
    <title>About Us | LambHVAC - Heating & Cooling Specialists</title>;
  </>
);
