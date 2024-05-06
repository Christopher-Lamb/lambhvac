import React, { useEffect, useState } from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import TextBlock from "../../components/TextBlock";
import Bullets from "../../components/Bullets/Bullets";
import Footer from "../../components/Footer";
import { ContentSection } from "../../components/ComponentsTest";

const ServiceContractsPage: React.FC<PageProps> = () => {
  const [height, setHeight] = useState(20);

  const handleScroll = (event: Event) => {
    // Assert event type if needed
    const target = event.target as Element;
    let scrollTop = target.children[0].scrollTop;

    if (scrollTop < 1500 && scrollTop > 200) {
      // console.log("scroll", scrollTop);
      setHeight(scrollTop - 200);
    } else if (scrollTop < 50) {
      setHeight(20);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Navbar />
      <Header title="Service Contracts" />
      <section className="cont mx-auto flex gap-xsmall mt-small">
        <div className="w-full lg:w-8/12">
          <ContentSection
            content="<h2>What is a Service Contract?</h2><p>During the heat of Summer or the long cold days of the winter, it is crucial that your heating and cooling systems are working properly. A heating and cooling protection plan offers protection and preventative treatments to your system to avoid any unforeseen problems.</p><br/><h2>Is my System qualified for this Protection Plan?</h2><p>This plan covers electric central air conditioner split systems that utilize R22 or R410A refrigerant and are rated five tones (60,000 BTUs) or less by the manufacturer. Air Conditioning systems that share components or controls with an oil-fired furnace are not eligible for coverage.</p>"
            className="content-class"
          />
          <br />
          <span className="text-2xl kanit">Covered Air Conditioning Components:</span>
          <Bullets
            variant="snowflake"
            layout="grid"
            array={[
              "Belts",
              "Blower Motors",
              "Blower Wheels",
              "Capacitors",
              "Circuit Boards",
              "Cleaning Outdoor Condenser Coils",
              "Clearing and Repairing Accessible Condensate Pumps",
              "Condenser Fan Motors",
              "Contactors",
              "Fuses",
              "Hard Start Kits",
              "High and Low-Pressure Switches",
              "Low Ambient Temperature Controls",
              "Low Voltage Wiring",
              "Motor Speed Controls",
              "Relays",
              "Service Port Valve Caps",
              "Standard Area/Room Thermostats",
              "Thermostat Back Plates",
              "Thermostat Batteries (Hard Wired Only)",
              "Time Delay Controls",
              "Transformers",
              "Valve Cores (Schrader Type)",
              "Labor to Replace R-22 and R410A (Limited to One Visit per Season)",
            ]}
          />
          <br />
          <span className="text-2xl kanit">Covered Heater Components:</span>
          <Bullets
            layout="grid"
            variant="fire"
            array={[
              "Automatic Ignition System Components",
              "Blower Motors",
              "Blower Wheels",
              "Burners (Main)",
              "Capacitors",
              "Circuit Boards",
              "Condensate Pump",
              "Drawers",
              "ECO Safeties",
              "Electric Switches",
              "Fan and Limit Controls",
              "Fusible Links",
              "Gas Valve A",
              "Induced Draft Motor",
              "Ignitor",
              "Pilot and Burner Tubing",
              "Pilot Safeties",
              "Pressure Switches",
              "Spill Switches",
              "Standard Area/Room Thermostats (Note: Remote temperature sensors are not included)",
              "Thermocouples",
              "Thermostat Back Plates",
              "Transformers",
              "Vent Pipe",
            ]}
          />
        </div>
        <div style={{ top: `${height}px` }} className="relative h-fit ease-in-out duration-500 hidden lg:block w-4/12 max-w-[18.75rem]">
          <PriceDiv />
        </div>
      </section>
      <div className="px-small block lg:hidden my-small">
        <PriceDiv />
      </div>
      <section className="cont mx-auto mb-16">
        <ContentSection
          className="content-class"
          content="<h2>Also Included</h2><ul><li>One Springe Service</li><li>One Fall Service</li></ul><br/><h2>What does servicing a system consist of?</h2><p>It consists of one of our technicians relieving your system of any build-up that formed over the previous season. Necessary parts are cleaned, and carbon build-up is removed. This process is vital for the health and longevity of HVAC units. We pride ourselves in our preventative measures. In order to make sure your unit is running at maximum efficiency, it needs to be cleaned before each Winter and Summer. Therefore, we will send a technician to your house in Spring and Fall to ensure your system's ability to carry out its task. Maintaining your system greatly decreases the likelihood of unexpected breaks during the times of the year when there is high demand for HVAC technicians.</p>"
        />
      </section>
      <Footer />
    </>
  );
};

const inactiveBtnStyle = {
  background: "#D3D3D3",
  color: "#727272",
};
const activeBtnStyle = {
  background: "rgb(50, 179, 93)",
  color: "#fff",
};

const PriceDiv: React.FC = () => {
  const [subscriptionType, setSubscriptionType] = useState("monthly");
  // Define a type for the subscription options
  type SubscriptionOption = "monthly" | "yearly";

  // State to track the selected option
  const [selectedOption, setSelectedOption] = useState<SubscriptionOption>("monthly");

  // Event handlers for button clicks
  const handleMonthlyClick = () => {
    setSelectedOption("monthly");
    setSession("monthly");
  };
  const handleYearlyClick = () => {
    setSelectedOption("yearly");
    setSession("yearly");
  };

  const setSession = (type: string): void => {
    sessionStorage.setItem("subscription-type", type);
  };
  const getSession = (): SubscriptionOption => {
    const savedType = sessionStorage.getItem("subscription-type");

    if (savedType === "monthly" || savedType === "yearly") {
      return savedType;
    } else {
      sessionStorage.setItem("subscription-type", "monthly");
      return "monthly";
    }
  };

  useEffect(() => {
    const type = getSession();
    setSelectedOption(type);
  }, []);

  return (
    <div className="shadow-md border">
      <div className="bg-[var(--lambblue)] text-white text-center min-h-[8.25rem] flex justify-center flex-col">
        <span className="block shrink-0 text-4xl kanit weight-500">{selectedOption === "yearly" ? "$499.95" : "$44.95"}</span>
        <span className="block shrink-0 text-xl">{selectedOption === "yearly" ? "for 12 months" : "a month"}</span>
      </div>
      <div className="flex">
        <button className="bg-gray-100 w-full flex justify-center py-4" onClick={handleMonthlyClick} style={selectedOption === "monthly" ? activeBtnStyle : inactiveBtnStyle}>
          Monthly
        </button>
        <button className="bg-gray-100 w-full flex justify-center py-4" onClick={handleYearlyClick} style={selectedOption === "yearly" ? activeBtnStyle : inactiveBtnStyle}>
          One Year
        </button>
      </div>
      <div className="mt-10" aria-hidden />
      <Link to="/service-contracts/location-check/">
        <div className="flex justify-center py-4 text-xl bg-[#337ab7] text-white font-bold">Click here to Sign Up</div>
      </Link>
    </div>
  );
};

export default ServiceContractsPage;

export const Head: HeadFC = () => (
  <>
    <meta name="description" content="Reach out to our expert HVAC team for top-notch heating, cooling, and ventilation solutions. Contact us today for reliable service and professional advice" />
    <title>Service Contract - Professional HVAC Services & Support</title>;
  </>
);
