import React from "react";
import { FaPiggyBank, FaUniversity, FaChartLine, FaHandshake } from "react-icons/fa";

const ServiceCard = ({ title, description, Icon }) => (
  <div className="flex flex-col items-center justify-center w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4">
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out p-6 flex flex-col items-center">
      <Icon className="w-12 h-12 text-blue-500 mb-4" />
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  </div>
);

const servicesData = [
  {
    title: "Savings Accounts",
    description:
      "Secure savings solutions with competitive interest rates and easy access.",
    Icon: FaPiggyBank,
  },
  {
    title: "Business Banking",
    description:
      "Comprehensive services for businesses, including accounts, loans, and advisory.",
    Icon: FaUniversity,
  },
  {
    title: "Investment Services",
    description:
      "Expert financial planning and investment services to grow your wealth.",
    Icon: FaChartLine,
  },
  {
    title: "Personal Loans",
    description:
      "Flexible personal loan options with competitive rates and simple applications.",
    Icon: FaHandshake,
  },
];

const Services = () => {
  return (
    <section id="services" className="text-gray-700 body-font bg-white">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap justify-center text-center mb-24">
          <div className="w-full lg:w-2/3">
            <h2 className="text-2xl font-medium title-font mb-4 text-gray-900 sm:text-3xl">
              Banking Services Tailored for You
            </h2>
            <p className="lg:w-1/2 mx-auto leading-relaxed text-base">
              Our range of banking services is designed to meet all your financial needs, from personal banking to business solutions.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
