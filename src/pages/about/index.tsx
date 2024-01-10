import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import PictureText from "../../components/PictureText";

const ContactPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <Header title="About us" />
      <div className="container xl:max-w-7xl mx-auto">
        <PictureText
          variant="50-50"
          imgVariant="rounded"
          heading="About"
          fileName=""
          alt=""
          body="Velit consequat ipsum cillum irure sint dolore veniam reprehenderit eu laborum labore sit irure. Quis id duis consectetur sunt velit nisi ullamco culpa. Non incididunt consectetur sint esse cupidatat fugiat Lorem nostrud adipisicing pariatur occaecat reprehenderit do dolor. Aliquip Lorem minim fugiat est nostrud. Ea minim est ullamco voluptate consequat elit quis id Lorem aliquip ullamco elit. Sunt voluptate ipsum fugiat ipsum."
        />
        <p>
          Eiusmod elit enim nostrud consectetur Lorem ex in laboris. Occaecat id velit occaecat in sit magna nostrud. Ad nisi labore nulla aliquip culpa sit velit incididunt Lorem dolore qui ullamco
          dolore. Fugiat do non fugiat fugiat ullamco laboris laboris dolor adipisicing incididunt.Incididunt pariatur veniam nisi culpa id incididunt sit duis ad fugiat ad eiusmod exercitation
          veniam. Quis enim proident deserunt cupidatat. Fugiat magna et fugiat ut dolore est enim sit laboris magna ex. Aliquip ullamco commodo velit sit voluptate tempor sunt fugiat sint consectetur
          voluptate proident. Nulla ea cupidatat ad elit magna sint nostrud veniam ullamco mollit aliquip mollit. Incididunt qui deserunt elit ut excepteur fugiat excepteur nulla cillum excepteur.
          Reprehenderit anim nostrud ad deserunt magna mollit eu exercitation tempor tempor elit aliqua.
        </p>
      </div>
      <PictureText
        variant="50-50"
        heading="About"
        background="var(--lambblue)"
        fileName=""
        alt=""
        color="white"
        reverse
        body="Velit consequat ipsum cillum irure sint dolore veniam reprehenderit eu laborum labore sit irure. Quis id duis consectetur sunt velit nisi ullamco culpa. Non incididunt consectetur sint esse cupidatat fugiat Lorem nostrud adipisicing pariatur occaecat reprehenderit do dolor. Aliquip Lorem minim fugiat est nostrud. Ea minim est ullamco voluptate consequat elit quis id Lorem aliquip ullamco elit. Sunt voluptate ipsum fugiat ipsum."
      />
      <section>
        <h1>Something with information thats bullets our values</h1>
        <p>Bulleted Info</p>
      </section>

      <section>
        <h2>Brands</h2>
      </section>
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
