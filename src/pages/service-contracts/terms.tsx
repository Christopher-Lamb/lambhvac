import React, { useEffect, useState } from "react";
import { PageProps, HeadFC } from "gatsby";
import Header from "../../components/Header/Header";

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
      <span>{subscriptionOption}</span>
    </>
  );
};

export default TermsPage;

export const Head: HeadFC = () => (
  <>
    <meta name="description" content="Reach out to our expert HVAC team for top-notch heating, cooling, and ventilation solutions. Contact us today for reliable service and professional advice" />
    <title>Service Contract Terms - Professional HVAC Services & Support</title>;
  </>
);
