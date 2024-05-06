import React, { useEffect } from "react";
import "../styles/homepage.css";
import type { HeadFC, PageProps } from "gatsby";
import { graphql } from "gatsby";
import Navbar from "../components/Navbar/Navbar";
import HomeHeader from "../components/HomeHeader/HomeHeader";
import LinkBox, { LinkBoxContainer } from "../components/LinkBox/LinkBox";
// import IMAGE from "../images/icon.png";
import LOGO from "../images/lamb_logox192.png";
// import PictureText from "../components/PictureText";
import PictureText from "../components/PictureText";
import Button from "../components/Button";
import Carousel from "../components/Carousel/Carousel";
import { ImageCard, ImageCardContainer } from "../components/ImageCard/ImageCard";
import { Form, Input, TextArea, FieldSet, Select } from "../components/Form";
import Image from "../components/Image";
import AnimatedComponent from "../components/AnimatedComponent/AnimatedComponent";
import "../styles/text.css";
import Footer from "../components/Footer";
import SolutionCard from "../components/SolutionCard";

function determineHVACMode(): string {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth(); // getMonth returns a zero-based index (0 = January, 11 = December)

  // Check if it's May to September (4 to 8 in zero-based index)
  if (currentMonth >= 4 && currentMonth <= 8) {
    return "cooling";
  }
  // Otherwise, it's October to April
  return "heating";
}

const IndexPage: React.FC<PageProps> = () => {
  useEffect(() => {
    const arr = ["https://unpkg.com/vue@2", "https://cdnjs.cloudflare.com/ajax/libs/webcomponentsjs/1.2.0/webcomponents-loader.js", "https://widget.creditforcomfort.com/prod/comfort-button.js"];
    const scripts = arr.map((src) => {
      const script = document.createElement("script");
      script.src = src;
      script.async = false;
      document.body.appendChild(script);
      return script;
    });
    return () => {
      scripts.forEach((script) => {
        document.body.removeChild(script);
      });
    };
  }, []);
  return (
    <main>
      <Navbar />
      <HomeHeader />
      <comfort-button guid="ff419aa230f870606f5fd0bfd0483dff"></comfort-button>

      <div className="max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl grid sm:grid-cols-2 md:grid-cols-4 mx-auto gap-4 mt-4">
        <LinkBoxContainer variantArr={["cooling", "heating", "contact", "about"]} />
      </div>
      <div className={"sjgasWrapper"}>
        <Image fileName="SJG_Participating_Contractor_Logo.jpg" alt="South Jersey Gas Participating Contractor" className={"sjgas"} />
        <div className={"somethingWrapper"}>
          <span className={"something"}>PSEG & AC Electric</span>Participating Contractor
        </div>
      </div>
      <div className="mb-med first-picture-text py-med">
        <PictureText variant="40-60" fileName="comfort.jpg" color="#000" alt="Logo">
          <div className="px-8 section-class mt-xsmall lg:mt-0">
            <AnimatedComponent animationClassName="textSlideFromRight">
              <h3 className="text mb-2">Welcome to LambHVAC: Where Comfort Meets Reliability</h3>
              <p className="mb-2 text">
                At LambHVAC, we believe that everyone deserves to live and work in environments that offer optimum comfort and efficiency. Since our inception, we have dedicated ourselves to providing
                top-tier HVAC services that not only meet but exceed our clients' expectations. Our mission is simple: to deliver high-quality, innovative climate solutions tailored to the unique
                needs of each customer.
              </p>
              <p className="mb-2 text">
                With decades of combined experience, our team of certified professionals is at the forefront of HVAC technology, ensuring your space is equipped with the most efficient and reliable
                systems available. Our core values of integrity, professionalism, and unwavering customer support drive us to achieve excellence in every project we undertake.
              </p>
              <p className="mb-2 text">
                Whether you’re in need of routine maintenance, emergency repairs, or a complete system overhaul, LambHVAC is here to ensure your indoor climate is nothing short of perfect. We’re not
                just your HVAC contractors; we’re your neighbors, committed to keeping your homes and businesses comfortable and energy-efficient.
              </p>
              <div className="mt-xsmall">
                <a href="#form" className="py-2xsmall px-xsmall rounded bg-lambblue text-small18 text-white font-semibold mr-xsmall hover:brightness-150">
                  Contact Us
                </a>
                <a href="tel:+18562174920" className="py-2xsmall px-xsmall rounded bg-white text-gray-900 border border-gray-900 border-px text-small18 font-semibold hover:brightness-150">
                  Call Us (856)-217-4920
                </a>
              </div>
            </AnimatedComponent>
          </div>
        </PictureText>
      </div>
      <h2 className="text-med lg:text-large kanit mx-auto text-center mt-small">Service Fee $79</h2>
      <div className="max-w-7xl mx-auto spacing">
        <AnimatedComponent animationClassName="slamEffect">
          <PictureText reverse variant="50-50" className="p-small gradient" fileName="workerOne.jpg" color="#000" alt="Logo">
            <div className="section-class h-full mr-xsmall mt-xsmall lg:mt-0">
              <h3 className="text">Services Offered by LambHVAC</h3>
              <h4 className="text mt-1 mb-2">Expert Installation and Maintenance for Optimal Comfort</h4>
              <ul className="list-disc ml-4">
                <li className="text">
                  <strong>HVAC System Installation:</strong> Specializing in the installation of central air systems for both residential and commercial spaces. Our skilled team ensures your new
                  system is installed efficiently, guaranteeing peak performance and comfort.
                </li>
                <li className="text">
                  <strong>Service Calls for Repair and Maintenance:</strong> Quick response to all service calls, providing professional repair and routine maintenance to keep your HVAC systems
                  running smoothly. Our proactive approach minimizes downtime and extends the lifespan of your equipment.
                </li>
              </ul>
              <div className="mt-xsmall">
                <a
                  href={determineHVACMode() + "/installs"}
                  className="py-2xsmall shadow-md mr-2xsmall px-xsmall rounded bg-white text-gray-900 border border-gray-900 border-px text-small18 font-semibold hover:brightness-150"
                >
                  Installs
                </a>
                <a href={determineHVACMode() + "/service-calls"} className="py-2xsmall shadow-md px-xsmall rounded bg-lambblue text-small18 text-white font-semibold mr-xsmall hover:brightness-150">
                  Service Calls
                </a>
              </div>
            </div>
          </PictureText>
        </AnimatedComponent>
      </div>
      <div className="bg-[#f7f7f7] py-med spacing-2">
        <div className="xl:max-w-7xl mx-auto container">
          <PictureText variant="40-60" fileName="ac.jpg" color="#000" alt="Logo" imgVariant="square">
            <AnimatedComponent animationClassName="textSlideFromRight">
              <div className="w-full px-4 section-class mt-xsmall lg:mt-0">
                <h3 className="text">Ready to Elevate Your Comfort? Let LambHVAC Guide You!</h3>
                <p className="text mt-2">
                  <strong>Don't let HVAC troubles disrupt your peace of mind.</strong> With LambHVAC, expert help is just a click away. Whether you're looking to install a brand-new{" "}
                  <a href="central-air-conditioning" className="underline text-blue-600 hover:text-blue-400">
                    central air system
                  </a>
                  , need a quick{" "}
                  <a href={determineHVACMode() + "/service-calls"} className="underline text-blue-600 hover:text-blue-400">
                    service call
                  </a>
                  , or simply want{" "}
                  <a href={determineHVACMode()} className="underline text-blue-600 hover:text-blue-400">
                    more information
                  </a>
                  , we're here to ensure your environment is perfectly tailored to your needs.
                </p>
                <ul className="list-disc ml-4 mb-3">
                  <li className="text">
                    <a className="underline text-blue-600 hover:text-blue-400" href="/request-service">
                      Schedule a Service
                    </a>{" "}
                    - Immediate assistance from our certified technicians.
                  </li>
                  <li className="text">
                    <a className="underline text-blue-600 hover:text-blue-400" href="/request-estimate">
                      Request a Quote
                    </a>{" "}
                    - Transparent pricing for your HVAC needs.
                  </li>
                  <li className="text">
                    <a className="underline text-blue-600 hover:text-blue-400" href="/contact/">
                      Contact Us
                    </a>{" "}
                    - Have questions? We're here to help.
                  </li>
                </ul>
              </div>
            </AnimatedComponent>
          </PictureText>
        </div>
      </div>

      <section className="spacing-2">
        <div className="w-full bg-lambblue">
          <h2 className="kanit px-4 lg:px-0 text-large text-white container xl:max-w-five pt-small mx-auto">Testimonials</h2>
        </div>
        <Carousel height="400px" variant="reviews" interval={false}></Carousel>
      </section>
      <section className="flex spacing-2  flex-col text-center items-center py-xsmall justify-center ">
        <h2 className="text-med lg:text-large kanit">Stay Comfortable Year-Round with Our HVAC Service Contract</h2>
        <p className="max-w-four text-small lg:text-small18 mt-3xsmall mx-auto">
          Ensure your heating and cooling systems are always in top condition with our exclusive HVAC Service Contract. Sign up today and enjoy bi-annual cleanings
        </p>
        <a
          href="/service-contracts"
          className="py-2xsmall px-xsmall w-fit rounded bg-lambblue text-small18 md:text-med text-white font-semibold hover:brightness-75 mt-2xsmall shadow-md shadow-lambblye"
        >
          Sign Up Now
        </a>
      </section>
      {/* <div className="spacing-2 grid gap-6 container lg:max-w-4xl mx-auto md:grid-cols-2 lg:grid-cols-3 justify-center ">
        <ImageCard
          className="border rounded-xl shadow-lg max-w-[21.875rem]"
          src={LOGO}
          alt=""
          title="How to Use a Plumbus"
          body="Velit excepteur duis veniam fugiat fugiat culpa nostrud id in do culpa..."
        />
        <ImageCard
          className="border rounded-xl shadow-lg  max-w-[21.875rem]"
          src={LOGO}
          alt=""
          title="How to Use a Plumbus"
          body="Velit excepteur duis veniam fugiat fugiat culpa nostrud id in do culpa..."
        />
        <ImageCard
          className="border rounded-xl shadow-lg max-w-[21.875rem]"
          src={LOGO}
          alt=""
          title="How to Use a Plumbus"
          body="Velit excepteur duis veniam fugiat fugiat culpa nostrud id in do culpa..."
        />
      </div> */}
      <div className="lg:flex spacing-2 home-form-gradient">
        <div className="w-1/2 bg-gray-500s py-24 px-10 text-white kanit hidden lg:block">
          <h3 className="text-6xl">Get Expert HVAC Service Now</h3>
          <ul className="text-2xl list-[square] ml-8 mt-2 mx-auto">
            <li>
              <strong className="font-semibold">Phone:</strong> <a href="tel:+18562174920">(856)-217-4920</a>
            </li>
            <li>
              <strong className="font-semibold">Email:</strong> <a href="mailto:blamb@lambhvac.com">blamb@lambhvac.com</a>
            </li>
            <li>
              <strong className="font-semibold">Location:</strong> 1010 Rose Ave, Runnemede, NJ
            </li>
          </ul>
        </div>
        <div className="bg-gray-500s  lg:w-1/2 lg:py-0 py-12">
          <AnimatedComponent animationClassName="slamEffect">
            <Form id="form" className="container hiddend lg:max-w-4xl mx-auto px-10 py-12 bg-gray-100 border border-gray-300 rounded-lg shadows form-shadow my-16">
              <h1 className="kanit weight-500 text-5xl">Contact Us</h1>
              <p className="mb-4">
                Please fill out the form below, and a team member will contact you within 24 hours or the next business day to answer any questions you have. For emergencies and immediate assistance,
                please call <a href="tel:+18562174920">(856)-217-4920</a>
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
              <button type="submit" className="py-2xsmall mt-2xsmall px-small rounded bg-lambblue text-small18 text-white font-semibold mr-3xsmall sm:mr-xsmall hover:brightness-110 shadow-md">
                Send
              </button>
            </Form>
          </AnimatedComponent>
        </div>
      </div>

      <Footer className="mt-two" />
    </main>
  );
};

// export const query = graphql`
//   query ImageQuery($fileName: String!) {
//     file(relativePath: { eq: $fileName }) {
//       childImageSharp {
//         gatsbyImageData(width: 600, placeholder: BLURRED, formats: [AUTO, WEBP, AVIF])
//       }
//     }
//   }
// `;

export default IndexPage;

export const Head: HeadFC = () => (
  <>
    <meta name="description" content="South Jersey trusts LambHVAC for superior HVAC services - from precise installation to thorough repairs and maintenance." />
    <title>LambHVAC - Reliable Heating & Cooling in South Jersey</title>;
  </>
);
