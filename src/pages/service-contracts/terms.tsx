import React, { FormEvent, useEffect, useState } from "react";
import { PageProps, HeadFC } from "gatsby";
import Header from "../../components/Header/Header";
import { Bullets, Footer } from "../../components";
import { ContentSection } from "../../components/ComponentsTest";

const TermsPage: React.FC<PageProps> = () => {
  const [subscriptionOption, setSubscriptionOption] = useState("monthly");
  const getSession = () => {
    const savedType = sessionStorage.getItem("subscription-type");

    if (savedType === "monthly" || savedType === "yearly") {
      return savedType;
    } else {
      sessionStorage.setItem("subscription-type", "monthly");
      return "monthly";
    }
  };

  useEffect(() => {
    const option = getSession();
    setSubscriptionOption(option);
  }, []);
  return (
    <>
      <Header title="Contract Terms of Service" />
      <div className="max-w-five mx-auto flex mt-small">
        <div className="w-2/5">
          <h2 className="text-med font-semibold mb-3xsmall">All Parts Covered</h2>
          <Bullets
            variant="check"
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
        <div className="w-3/5">
          {subscriptionOption === "monthly" ? (
            <>
              <ContentSection
                content="<h2>Monthly Service Contract</h2><p>This contract covers all parts of your HVAC system listed PLUS two preventative maintenance services.</p><br/><h2>Important Information:</h2><p>It is important to note that with this billing method, you will be charged monthly at the amount listed. Furthermore, if you wish to cancel your subscription, the remainder of that month will be covered, and you will not have coverage the following month. You will be sent a confirmation email confirming the subscription. Lastly, the subscription must be held for three months before; after that, you can cancel at any time.</p>"
                className="content-class"
              />
              <PaymentComponent type="monthly" />
            </>
          ) : (
            <>
              <ContentSection
                content="<h2>Monthly Service Contract</h2><p>This contract covers all parts of your HVAC system listed PLUS two preventative maintenance services.</p><br/><h2>Important Information:</h2><p>It is important to note that with this billing method, you will be charged monthly at the amount listed. Furthermore, if you wish to cancel your subscription, the remainder of that month will be covered, and you will not have coverage the following month. You will be sent a confirmation email confirming the subscription. Lastly, the subscription must be held for three months before; after that, you can cancel at any time.</p>"
                className="content-class"
              />
              <PaymentComponent type="yearly" />
            </>
          )}
        </div>
      </div>
      <Footer margin="10rem 0 0 0" />
    </>
  );
};

interface PaymentComponentProps {
  type: "monthly" | "yearly";
}
type PaymentObj = {
  amount: string;
  afterText: string;
};
const monthly: PaymentObj = {
  amount: "$44.95",
  afterText: "a month",
};
const year: PaymentObj = {
  amount: "$499.95",
  afterText: "for 12 months",
};

const PaymentComponent: React.FC<PaymentComponentProps> = ({ type }) => {
  const { amount, afterText } = type === "monthly" ? monthly : year;

  const redirectRoute = type === "monthly" ? "https://buy.stripe.com/cN23dH1jY6erbio5km" : "https://buy.stripe.com/7sIcOh0fU32f86c28b";

  const handleRedirect = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    window.location.href = redirectRoute;
  };

  return (
    <form className="mt-med border max-w-[512px] mx-auto shadow-md rounded-md" onSubmit={handleRedirect}>
      <div className="bg-lambblue text-center text-white py-xsmall">
        <span className="block text-xl">You pay</span>
        <span className="block text-3xl">{amount}</span>
        <span className="block text-xl">{afterText}</span>
      </div>
      <div className="pt-xsmall">
        <button className="bg-[#30b35d] text-white py-xsmall w-full text-xl" type="submit">
          Checkout
        </button>
      </div>
      <div className="flex items-center justify-center py-2xsmall">
        <input className="mr-3xsmall w-5 h-5" type="checkbox" required></input>
        <span className="block">Please check this box to agree to the terms of agreement</span>
      </div>
    </form>
  );
};

export default TermsPage;

export const Head: HeadFC = () => (
  <>
    <meta name="description" content="Reach out to our expert HVAC team for top-notch heating, cooling, and ventilation solutions. Contact us today for reliable service and professional advice" />
    <title>Service Contract Terms - Professional HVAC Services & Support</title>;
  </>
);
