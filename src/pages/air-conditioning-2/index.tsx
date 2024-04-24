import React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { Navbar, Header, Bullets, PictureText, Footer } from "../../components";

const AirConditioningPage: React.FC<PageProps> = () => {
  return (
    <>
      <Navbar />
      <Header title="" />
      <PictureText
        variant="50-50"
        fileName=""
        imgVariant="rounded"
        alt=""
        heading=""
        body="Discover Efficient and Reliable Air Conditioning Solutions At LambHVAC, we specialize in providing top-tier air conditioning systems that cater to the diverse needs of our clients in South Jersey. Understanding the importance of a comfortable indoor environment, we deliver solutions that are not only efficient but also reliable. Our systems are designed to ensure your space remains cool and pleasant, regardless of the outdoor temperatures."
      />
      <section>
        <h3 className="text">Our Air Conditioning Services</h3>
        <p className="text">LambHVAC offers a comprehensive range of air conditioning services designed to meet the specific needs of every customer. Our product lineup includes:</p>
        <Bullets
          variant="round"
          array={[
            "Residential air conditioning units for homes of all sizes.",
            "Commercial air conditioning systems for businesses and large facilities.",
            "State-of-the-art ductless air conditioning options for spaces where traditional ducted systems aren't feasible.",
            "Portable and window air conditioning units for flexible, temporary cooling solutions.",
            " Every product we offer is backed by our commitment to quality and durability, ensuring that you receive the best value for your investment.",
          ]}
        />
      </section>
      <section>
        <h3 className="text">Maintenance and Support</h3>
        <p className="text"></p>
      </section>
      <section>
        <h3 className="text"></h3>
        <p className="text"></p>
      </section>
      <section>
        <h3 className="text"></h3>
        <p className="text"></p>
      </section>
      <section>
        <h3 className="text"></h3>
        <p className="text"></p>
      </section>
      <Footer></Footer>
    </>
  );
};

export default AirConditioningPage;

export const Head: HeadFC = () => (
  <>
    <meta name="description" content="South Jersey trusts LambHVAC for superior HVAC services - from precise installation to thorough repairs and maintenance." />
    <title>LambHVAC - Reliable Heating & Cooling in South Jersey</title>;
  </>
);
