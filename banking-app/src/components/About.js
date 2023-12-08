import React from "react";
import bank from "../Assests/bank.jpg"

const About = () => {
  return (
    <section id="about" className="bg-white">
      <div className="container mx-auto px-4 py-12 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-5 lg:col-span-4">
            <img
              src={bank}
              alt="About Our Bank"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div className="md:col-span-7 lg:col-span-8">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-6">
              About Our Bank
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              With over a century of commitment to customer service, our bank 
              offers secure, reliable, and innovative banking solutions. Our mission 
              is to empower personal and business financial success through 
              expert guidance and robust financial tools.
            </p>
            <p className="text-lg text-gray-700 mb-4">
              Our experienced team of banking professionals excels in areas such 
              as investment management, savings planning, and business financial 
              services. We prioritize security, confidentiality, and customer 
              satisfaction in all our operations.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Established in [Year], we've grown alongside our customers, adapting 
              to new technology and evolving markets while maintaining our core 
              values of integrity and trustworthiness.
            </p>
            <a
              href="#contact"
              className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-green-700 transition duration-300"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
