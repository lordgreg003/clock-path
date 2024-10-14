import Link from "next/link";
import { useState } from "react";
import { open_sans, playfair_Display } from "@/app/ui/fonts/fonts";
import { GrStatusGood } from "react-icons/gr";

const plans = [
  {
    mainTitle: "Current Plan",
    title: "Free Plan",
    price: "0 NGN",
    description: "Manage up to 10 employees",
    isActive: true,
  },
  {
    title: "Standard Plan",
    price: "10,000 NGN",
    description: "Manage up to 50 employees",
    buttonText: "Get Standard",
    isActive: false,
  },
  {
    title: "Premium Plan",
    price: "20,000 NGN",
    description: "Manage up to 100 employees",
    buttonText: "Get Premium",
    isActive: false,
  },
  {
    title: "Enterprise Plan",
    price: "Contact Sales",
    description: "Manage up to 100+ employees",
    buttonText: "Contact Sales",
    isActive: false,
  },
];

const PlanScreen = () => {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);

  const handlePlanSelection = (plan: (typeof plans)[0]) => {
    setSelectedPlan(plan);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f5] py-8 px-4">
      {/* Top navigation */}
      <div className="w-full flex justify-end mb-4">
        <Link href="/skip">
          <span className="text-purple-500 font-semibold hover:underline cursor-pointer">
            Skip &rarr;
          </span>
        </Link>
      </div>

      {/* Heading */}
      <h1
        className={`${playfair_Display.className} mb-5 font-bold text-[23px] leading-[25px] md:text-[30px]   lg:text-[36px]  `}
      >
        Choose your Subscription plan
      </h1>
      <p
        className={`${open_sans.className} font-normal text-[18px] text=[#5C5C5C] mb-10`}
      >
        Select the subscription plan that best suits your needs and continue
        with ClockPath.
      </p>

      {/* Plan Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 place-items-center lg:grid-cols-4 gap-6 w-full max-w-[64rem] ">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`border-2 w-[15rem] h-[20rem] rounded-xl shadow-md bg-white hover:shadow-lg cursor-pointer ${
              plan.isActive ? "border-[#6200EE]" : "border-gray-200"
            }`}
            onClick={() => handlePlanSelection(plan)}
          >
            {" "}
            <h1
              className={`${open_sans.className} mx-auto text-[#6200EE] rounded-t-xl font-normal text-[18px] w-full bg-[#EFE6FD] p-4`}
            >
              {plan.mainTitle || ""}
            </h1>
            <div className="h-[80%] bg-yellow-400">
              <h3
                className={`${open_sans.className} mx-4 font-normal text-[24px] text-[#333333]`}
              >
                {plan.title}
              </h3>
              <p
                className={`${open_sans.className} mx-4 font-normal text-[24px] text-[#6200EE]`}
              >
                {plan.price}{" "}
                <span className="text-[#333333] text-bold text-[24px]">/</span>{" "}
                <span className={`${open_sans} text-base text-[#333333]`}>
                  month
                </span>
              </p>
              <div className="flex mx-4 mt-5 flex-row gap-1 ">
                <GrStatusGood className="mt-1 text-[#6200EE]" />
                <p className="text-gray-600 mb-4">{plan.description}</p>
              </div>
              {plan.buttonText && (
                <button
                  className={`w-full py-2 px-4 rounded-md ${
                    plan.isActive
                      ? "bg-[#6200EE] text-white"
                      : "border border-[#6200EE] text-[#6200EE] hover:bg-purple-50"
                  }`}
                >
                  {plan.buttonText}
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Continue Button */}
      <div className="mt-8 w-full max-w-md">
        <button
          className="w-full py-3 bg-[#6200EE] text-white font-bold rounded-lg hover:bg-purple-700"
          onClick={() => console.log("Selected Plan: ", selectedPlan)}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default PlanScreen;
