import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Header from "../components/Header/Header";
import PictureText from "../components/PictureText";

const ContactPage: React.FC<PageProps> = () => {
  return (
    <>
      <Header title="Test" />
      <div className="mb-16" />
      <div className="mx-auto max-w-7xl">
        <PictureText
          heading="Filler"
          body="mollit cupidatat excepteuullamcAd aliqua aliquip labore velit dolore exercitation. Enim reprehenderit culpa qui amet cillum minim voluptate consequat in. Culpa mollit ea commodo do id labore laborum quis elit elit dolore anim. Ad tempor consequat velit ullamco pariatur reprehenderit sit voluptate dolor do. Nulla excepteur officia exercitation minim eiusmod ad ipsum sint quis nisi. Cupidatat dolor sunt amet enim adipisicing eiusmod nostrud reprehenderit enim aliquip dolor voluptate deserunt proident.o tempor proident. Minim cillum ad id sunt dolore voluptate consequat ullamco incididunt ut minim voluptate excepteur. Veniam enim elit voluptate Lorem dolor sint ex id do anim.equat culpa consectetur fugiat aliqua sunt. Est officia eu velit qui aliquip eu aute cillum adipisicing magna nostrud. Nostrud aliqua duis laboris do et sunt officia magna et aliquip ea. Fugiat quis duis dolor irure cillum enim in amet pariatur officia. Incididunt in laborum ipsum ut."
          fileName=""
          alt=""
          // imgVariant="icon-rounded"
          variant="icon"
          imgVariant="rounded"
        />
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
