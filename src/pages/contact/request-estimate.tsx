import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Header, Navbar } from "../../components";
import { Form, Input, TextArea, FieldSet, Select } from "../../components/Form";

const RequestEstimatePage: React.FC<PageProps> = () => {
  return (
    <>
      <main>
        <Navbar />
        <Header title="Request Estimate" />
        <Form id="form" className="container hiddend lg:max-w-4xl mx-auto px-10 py-12 bg-gray-100 border border-gray-300 rounded-lg shadows form-shadow my-16">
          <h1 className="kanit weight-500 text-5xl">Estimate Form</h1>
          <p className="mb-4 mt-1">
            Please fill out the form below, and a team member will contact you within 24 hours or the next business day to answer any questions you have. For emergencies and immediate assistance,
            please call{" "}
            <a className="underline text-lambblue" href="tel:+18562174920">
              (856)-217-4920
            </a>
          </p>
          <FieldSet className="grid md:grid-cols-2 gap-x-4 gap-3">
            <input type="hidden" name="type" value="estimate-request" />
            <Input label="First Name" required />
            <Input label="Last Name" required />
            <Input label="Email" className="col-span-2" required />
            <Input label="Address" className="col-span-2" required />
            <Input label="Address 2" className="col-span-2" />
            <Input label="Phone" required />
            <Input label="City" required />
            <Input label="State" required />
            <Input label="Zip Code" required />
            <Select
              label="Services"
              options={["Choose One", "Air Conditioning", "Heating", "Heating and Air Conditioning", "Indoor Air Quality", "Boiler", "Duct", "Gas Furnace", "Ductless Mini-Split", "Water Heater"]}
            />
          </FieldSet>
          <FieldSet>
            <TextArea label="Message" className="h-32 mt-3" required />
          </FieldSet>
          <button type="submit" className="py-2xsmall mt-2xsmall px-small rounded bg-lambblue text-small18 text-white font-semibold mr-3xsmall sm:mr-xsmall hover:brightness-110 shadow-md">
            Send
          </button>
        </Form>
      </main>
    </>
  );
};

export const Head: HeadFC = () => (
  <>
    <meta name="description" content="South Jersey trusts LambHVAC for superior HVAC services - from precise installation to thorough repairs and maintenance." />
    <meta name="robots" content="noindex, nofollow" />
    <title>Request Service | LambHVAC</title>;
  </>
);

export default RequestEstimatePage;
