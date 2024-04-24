import React, { useEffect, useState } from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import Navbar from "../../components/Navbar/Navbar";
import Header from "../../components/Header/Header";
import TextBlock from "../../components/TextBlock";
import Bullets from "../../components/Bullets/Bullets";
import Footer from "../../components/Footer";

const ServiceContractsPage: React.FC<PageProps> = () => {
  const [height, setHeight] = useState(20);

  const handleScroll = (event: Event) => {
    // Assert event type if needed
    const target = event.target as Element;
    let scrollTop = target.children[0].scrollTop;

    if (scrollTop < 1550 && scrollTop > 200) {
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
      <section className="cont mx-auto flex gap-4">
        <div className="w-8/12">
          <TextBlock heading="What is a Service Contract?" className="kanit">
            Laboris sint tempor Lorem in ullamco anim exercitation sunt id nulla velit. Ex reprehenderit amet nulla Lorem. Nisi nostrud consectetur sunt magna reprehenderit exercitation minim sit sunt
            quis. Ex dolore minim est duis adipisicing culpa fugiat occaecat tempor exercitation exercitation incididunt consectetur nisi. Consectetur voluptate adipisicing reprehenderit proident do
            aliqua excepteur sunt enim aliquip labore dolor nulla. Voluptate quis ut do exercitation fugiat velit Lorem ut enim laboris id in.
          </TextBlock>
          <br />
          <TextBlock heading="Is my System qualified for this Protection Plan?" className="kanit">
            Laboris sint tempor Lorem in ullamco anim exercitation sunt id nulla velit. Ex reprehenderit amet nulla Lorem. Nisi nostrud consectetur sunt magna reprehenderit exercitation minim sit sunt
            quis. Ex dolore minim est duis adipisicing culpa fugiat occaecat tempor exercitation exercitation incididunt consectetur nisi. Consectetur voluptate adipisicing reprehenderit proident do
            aliqua excepteur sunt enim aliquip labore dolor nulla. Voluptate quis ut do exercitation fugiat velit Lorem ut enim laboris id in.
          </TextBlock>
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
        <div style={{ top: `${height}px` }} className="relative ease-in-out duration-500 w-4/12 max-w-[18.75rem]">
          <PriceDiv />
        </div>
      </section>
      <section className="cont mx-auto mt-16">
        <h3 className="text mb-1">Also Included</h3>
        <Bullets array={["One Spring Service", "One Fall Service"]} variant="round" margin="6" />
        <h3 className="text kanit">What does servicing a system consist of?</h3>
        <p className="text">
          It consists of one of our technicians relieving your system of any build-up that formed over the previous season. Necessary parts are cleaned, and carbon build-up is removed. This process is
          vital for the health and longevity of HVAC units. We pride ourselves in our preventative measures. In order to make sure your unit is running at maximum efficiency, it needs to be cleaned
          before each Winter and Summer. Therefore, we will send a technician to your house in Spring and Fall to ensure your system's ability to carry out its task. Maintaining your system greatly
          decreases the likelihood of unexpected breaks during the times of the year when there is high demand for HVAC technicians.
        </p>
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
        <span className="block shrink-0 text-4xl kanit weight-500">{selectedOption === "yearly" ? "$313.15" : "$29.95"}</span>
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
