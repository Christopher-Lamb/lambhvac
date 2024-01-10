import React, { useEffect, useRef, useState } from "react";
import type { HeadFC, PageProps } from "gatsby";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import { Form, Input, TextArea, FieldSet, Select } from "../../components/Form";
import Button from "../../components/Button";
import FlAMEANDSNOW from "../../assets/flameAndSnow.svg";
import Footer from "../../components/Footer";
import Trapezoid from "../../components/Trapezoid";
import useDebouncedResize from "../../hooks/useDebounceResize";
import Carousel from "../../components/Carousel/Carousel";

const ContactPage: React.FC<PageProps> = () => {
  const formRef = useRef<HTMLDivElement | null>(null);
  const contactInfoRef = useRef<HTMLDivElement | null>(null);
  const [trapezoidObj, setTrapezoidObj] = useState({ longHeight: 618, shortHeight: 578, width: 43 });
  const handleResize = () => {
    const leftHeight = formRef.current?.clientHeight;
    const rightHeight = contactInfoRef.current?.clientHeight;
    if (leftHeight && rightHeight) {
      setTrapezoidObj({ longHeight: leftHeight, shortHeight: rightHeight + 8, width: 43 });
    }
  };
  useDebouncedResize(handleResize, 100);
  useEffect(() => {
    handleResize();
  }, []);
  return (
    <>
      <Navbar />
      <div className="grid gap-20">
        <Header title="Contact" />
        <section className=" px-4 container xl:max-w-6xl mx-auto">
          <p className="text-md lg:text-lg">
            Welcome to our HVAC service center, where your comfort is our top priority! We specialize in expert installation, meticulous repair, and regular maintenance of all your heating,
            ventilation, and air conditioning needs. Our team is dedicated to ensuring your environment is perfect, whether it's the peak of summer heat or the chill of winter. Have questions or need
            assistance? We're just a message or phone call away. Reach out to us today for friendly, professional service tailored to your unique HVAC needs!
          </p>
        </section>
        <section className="flex flex-col-reverse xl:flex-row items-center max-w-screen-2xl mx-auto">
          {/* Form */}
          <div ref={formRef} className="">
            <Form className="px-10 pl-16 py-12 max-w-8xl bg-[#E5E5E5]">
              <h1 className="kanit weight-500 text-5xl">Contact Us</h1>
              <p className="mb-4">
                Please fill out the form below, and a team member will contact you within 24 hours or the next business day to answer any questions you have. For emergencies and immediate assistance,
                please call (856)-217-4920
              </p>
              <FieldSet className="grid md:grid-cols-2 gap-x-4 gap-3">
                <Input label="Name" />
                <Input label="Email" />
                <Input label="Phone" />
                <Select label="Services" options={["Choose One", "Air Conditioning", "Heating"]} />
              </FieldSet>
              <FieldSet>
                <TextArea label="Message" className="h-32 mt-3" />
              </FieldSet>
              <Button type="submit" className="text-xl mt-3 px-12">
                Send
              </Button>
            </Form>
          </div>
          <div className="relative hidden xl:block" aria-hidden="true">
            <Trapezoid {...trapezoidObj} />
          </div>
          <div ref={contactInfoRef} className="bg-[#FCFCFC] border border-[#d9d9d9] w-10/12 h-[578px] border-4 flex items-center">
            <div className="max-w-2xl mx-auto bg-bladck">
              <ContactInfo />
            </div>
          </div>
        </section>
        <section className="bg-[var(--lambblue)] text-white border border-[--peach] xl:max-w-6xl mx-auto container p-4 px-10 rounded-3xl shadow-lg flex items-center flex-col md:flex-row ">
          <div>
            <h3 className="kanit text-2xl weight-500">Ready for Year-Round Comfort?</h3>
            <p>Schedule Your Seasonal HVAC Maintenance Today!</p>
            <p>
              Don't wait for extreme weather to find out your heating or cooling system isn't up to the task. Ensure your home or business stays comfortable all year long with our expert HVAC
              maintenance services.
            </p>
          </div>

          <img src={FlAMEANDSNOW} alt="Flame and Snowflake Icon" className="hidsden md:blsock" />
        </section>
        {/* <iframe
        width="600"
        height="450"
        style={{ border: 0 }}
        className="w-full"
        loading="lazy"
        allowFullScreen
        referrerPolicy="origin"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyB0bJo1hiqqXkcyQAzPrKPGvypdOD0MYZA
        &q=847MonmouthSt.`}
      ></iframe> */}
        <div className="bg-green-600 h-[450px] flex items-center justify-center">
          <h1 className="text-7xl text-white">Map</h1>
          <div className="absolute left-[0px] bg-blue-500 w-32 h-32">
            <div className="bg-white absolute w-5 h-5 top-[20px] left-[32px]" />
            <div className="bg-black absolute w-3 h-3 top-[25px] left-[36px]" />
            <div className="bg-white absolute w-5 h-5 top-[20px] left-[73px]" />
            <div className="bg-black absolute w-3 h-3 top-[25px] left-[76px]" />
            <div className="bg-white absolute w-24 h-5 top-[90px] left-[16px]" />
            <div className="bg-white absolute w-5 h-5 top-[70px] left-[16px]" />
            <div className="bg-white absolute w-5 h-5 top-[70px] left-[92px]" />
          </div>
          <div className="absolute left-[128px] bg-red-600 w-32 h-32">
            <div className="bg-white absolute w-5 h-5 top-[20px] left-[32px]" />
            <div className="bg-black absolute w-3 h-3 top-[25px] left-[36px]" />
            <div className="bg-white absolute w-5 h-5 top-[20px] left-[73px]" />
            <div className="bg-black absolute w-3 h-3 top-[25px] left-[76px]" />
            <div className="bg-white absolute w-24 h-5 top-[90px] left-[16px]" />
            <div className="bg-white absolute w-5 h-5 top-[70px] left-[16px]" />
            <div className="bg-white absolute w-5 h-5 top-[70px] left-[92px]" />
          </div>
          <div className="absolute left-[256px] bg-violet-600 w-32 h-32">
            <div className="bg-white absolute w-5 h-5 top-[20px] left-[32px]" />
            <div className="bg-black absolute w-3 h-3 top-[25px] left-[36px]" />
            <div className="bg-white absolute w-5 h-5 top-[20px] left-[73px]" />
            <div className="bg-black absolute w-3 h-3 top-[25px] left-[76px]" />
            <div className="bg-white absolute w-24 h-5 top-[90px] left-[16px]" />
            <div className="bg-white absolute w-5 h-5 top-[70px] left-[16px]" />
            <div className="bg-white absolute w-5 h-5 top-[70px] left-[92px]" />
          </div>
        </div>
        <Carousel height="400px" variant="reviews" interval={false} />
      </div>
      <Footer className="mt-16" />;
    </>
  );
};

const ContactInfo: React.FC = () => {
  return (
    <>
      <h3 className="text-3xl kanit weight-500 mb-2">Contact Info</h3>
      <div className="flex gap-4 ml-6 mb-3">
        <div className="lamb-bullet mt-3" />
        <div>
          <span className="block text-xl font-bold">Phone:</span>
          <p className="underline text-2xl">
            <a href="tel:+18562174920">(856)-217-4920</a>
          </p>
        </div>
      </div>
      <div className="flex gap-4 ml-6 mb-3">
        <div className="lamb-bullet mt-3" />
        <div>
          <span className="block text-xl font-bold">Email:</span>
          <p className="text-2xl hover:underline">
            <a href="mailto:blamb@lambhvac.com">blamb@lambhvac.com</a>
          </p>
        </div>
      </div>
      <div className="flex gap-4 ml-6 mb-3">
        <div className="lamb-bullet mt-3" />
        <div>
          <span className="block text-xl font-bold">Address:</span>
          <p className="text-2xl">1010 Rose Ave. Unit D</p>
          <p className="text-2xl">Runnemede, NJ 08078</p>
        </div>
      </div>
      <div className="flex gap-4 ml-6">
        <div className="lamb-bullet mt-3" />
        <div>
          <span className="block text-xl font-bold">Owner:</span>
          <p className="text-2xl">Bill Lamb</p>
        </div>
      </div>
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
