import React from "react";
import { motion } from "framer-motion";

type Props = {
  prices: {
    name: string;
    value: number;
    options: [string];
  };
}[];

const prices = [
  {
    name: "Basic Membership",
    value: 50,
    options: [
      "Access to gym facilities and equipment",
      "Group fitness classes",
    ],
  },
  {
    name: "Premium Membership",
    value: 75,
    options: [
      "Access to gym facilities and equipment",
      "Group fitness classes",
      "One personal training session per month",
      "10% discount on additional personal training sessions",
    ],
  },
  {
    name: "Platinum Membership",
    value: 100,
    options: [
      "Access to gym facilities and equipment",
      "Group fitness classes",
      "Three personal training session per month",
      "20% discount on additional personal training sessions",
      "Access to premium amenities such as sauna, steam room, and pool",
    ],
  },
  {
    name: "Student Membership",
    value: 30,
    options: [
      "Access to gym facilities and equipment",
      "Group fitness classes",
    ],
  },
  {
    name: "Family Membership",
    value: 100,
    options: [
      "Access to gym facilities and equipment",
      "Group fitness classes",
      "10% discount on personal training sessions",
    ],
  },
];

function Pricing() {
  return (
    <div className="min-h-screen relative max-w-7xl mx-auto pb-28" id="pricing">
      <h1 className="md:text-[38px] text-[24px] text-white tracking-[10px] text-center pt-[80px] mb-6">
        <span className="border-x border-[#FE9E16] rounded-md px-3">
          PRICING
        </span>
      </h1>
      <div className="grid md:grid-cols-4 justify-center gap-3 mx-3 ">
        {prices.map((plan) => (
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            key={plan.name}
            className="w-full max-w-sm p-4 border rounded-lg shadow-md sm:p-8 dark:border-gray-700">
            <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">
              {plan.name}
            </h5>
            <div className="flex items-baseline text-gray-900 dark:text-white">
              <span className="text-3xl font-semibold">$</span>
              <span className="text-5xl font-extrabold tracking-tight">
                {plan.value}
              </span>
              <span className="ml-1 text-xl font-normal text-gray-500 dark:text-gray-400">
                /month
              </span>
            </div>
            <ul className="space-y-5 my-7">
              {plan.options.map((option) => (
                <li key={option} className="flex space-x-3">
                  <svg
                    aria-hidden="true"
                    className="flex-shrink-0 w-5 h-5 text-blue-600 dark:text-blue-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg">
                    <title>Check icon</title>
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"></path>
                  </svg>
                  <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                    {option}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Pricing;
