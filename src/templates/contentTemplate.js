import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import "./contentTemplate.css";
import Navbar from "../components/Navbar/Navbar";
import { Form, Input, TextArea, FieldSet, Select } from "../components/Form";
import Image from "../components/Image.tsx";
import Footer from "../components/Footer.tsx";
import { ContentSection, Header, PictureText, CallToAction, Solution, RelatedLinks } from "../components/ComponentsTest";

const ComponentMap = {
  ContentSection,
  Header,
  PictureText,
  CallToAction,
  Solution,
  RelatedLinks,
};

export default function PageTemplate({ data }) {
  // console.log(props);
  const page = data.json;

  return (
    <main>
      <Helmet>
        <title>{page.pageDetails.title}</title>
        <meta name="description" content={page.pageDetails.description} />
      </Helmet>
      <Navbar />
      <div className="flex flex-col gap-small">
        {/* <h1>{page.pageDetails.title}</h1>
      <p>{page.pageDetails.description}</p> */}
        {page.components.map((component) => {
          const Component = ComponentMap[component.type];
          if (!Component) return null; // If no component found for the type, return null
          if (component.type === "ContentSection") {
            return (
              <div key={component.id} className="max-w-five mx-auto w-full">
                <Component {...JSON.parse(component.props)} />
              </div>
            );
          }

          return (
            <div key={component.id} className="w-full">
              <Component {...JSON.parse(component.props)} />
            </div>
          );
        })}
      </div>
      <div className="bg-[#f7f7f7] my-small overflow-hidden">
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
      <Footer />
    </main>
  );
}

export const pageQuery = graphql`
  query ($slug: String!) {
    json(pageDetails: { slug: { eq: $slug } }) {
      pageDetails {
        title
        description
        slug
      }
      components {
        id
        type
        props
      }
    }
  }
`;
