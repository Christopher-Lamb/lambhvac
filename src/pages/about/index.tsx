import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import { PictureText, ContentSection, CallToAction } from "../../components/ComponentsTest/";
import { Footer } from "../../components";
import Image from "../../components/Image";
import { Form, Input, TextArea, FieldSet, Select } from "../../components/Form";

const ContactPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <Header title="About us" />
      <div className="container mt-small xl:max-w-five mx-auto">
        <PictureText
          fileName="suburban.jpeg"
          alt="Suburban Image"
          className="content-class"
          content="<h3>Commitment to Excellence</h3><p>Since our inception in 2011, Lamb Heating & Air Conditioning has been committed to providing superior HVAC services across South Jersey. As a family-owned and operated business, we bring a personal touch to every project, ensuring that each client receives the highest level of professionalism, courtesy, and honesty.</p>
          <br/><p>If you have issues with your HVAC system, call us immediately. Count on us to help! <strong>Contact us today for all your HVAC needs:</strong> <a href='tel:+18562174920'>(856)-217-4920</a>.</p>"
        />
        <div className="max-w-five mx-auto">
          <ContentSection
            className="content-class max-w-five mt-small"
            content=" <h2>Our Expertise</h2>
<p>
  With over a decade of experience, our team has successfully installed and maintained hundreds of HVAC systems. Our deep
  understanding of HVAC technology allows us to work efficiently with all makes and models. Whether you need a system upgrade or a brand-new installation, we are equipped to handle your requirements
  without disruption.
</p>
<br/>
<h2>Quality Workmanship and Customer Service</h2>
<p>
  We take pride in our craftsmanship and the quality of our service. Our technicians are highly skilled in every aspect of HVAC installation, including precision ductwork designed to optimize airflow
  and system efficiency. By installing modern, high-quality ducts, we ensure that your new system delivers optimal performance and energy efficiency.
</p>
<br/>
<h2>Choose Lamb Heating & Air Conditioning</h2>
<p>
  Trust us to keep your spaces comfortable and efficient, regardless of the season. Contact Lamb Heating & Air Conditioning today to discuss how we can help you with your HVAC needs and ensure your
  system performs at its best.
</p>
"
          />
        </div>
      </div>
      <div className="bg-[#f7f7f7] my-small overflow-hidden mt-large">
        <div className="relative w-full hidden md:block">
          <div className="absolute left-0 h-[915px] top-0 w-full blur-sm">
            <Image fileName="suburbanWideshot.jpg" alt="string" className="w-full h-[915px] blur-s" />
          </div>
        </div>
        <Form id="form" className="container border border-2 md:shadow-lg relative lg:max-w-4xl mx-auto px-10 py-12 bg-gray-100 border border-gray-300 rounded-lg shadows form-shadow my-16">
          <h1 className="kanit weight-500 text-5xl">Contact Us</h1>
          <p className="mb-4">
            Please fill out the form below, and a team member will contact you within 24 hours or the next business day to answer any questions you have. For emergencies and immediate assistance,
            please call <a href="tel:+18562174920">(856)-217-4920</a>
          </p>

          <FieldSet className="grid md:grid-cols-2 gap-x-4 gap-3">
            <Input label="Name" required />
            <Input label="Email" required />
            <Input label="Phone" required />
            <Select label="Services" options={["Choose One", "Air Conditioning", "Heating"]} />
          </FieldSet>
          <FieldSet>
            <TextArea label="Message" required className="h-32 mt-3" />
          </FieldSet>
          <button type="submit" className="py-2xsmall mt-2xsmall px-small rounded bg-lambblue text-small18 text-white font-semibold mr-3xsmall sm:mr-xsmall hover:brightness-110 shadow-md">
            Send
          </button>
        </Form>
      </div>
      <Footer className="mt-large" />
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
