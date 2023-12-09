import React from "react";
import bankImage from "../assets/bank-image.jpg"; // Replace with your actual image path

const About = () => {
  return (
    <section id="about" className="bg-gray-100 p-8 md:p-12 lg:p-16">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 lg:w-2/5 flex justify-center mb-6 md:mb-0">
            <img
              src={bankImage}
              alt="BankX Headquarters"
              className="max-w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 lg:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-6 md:mb-10">
              About Our Bank
            </h2>
            <p className="text-lg text-gray-700">
              At BankX, we are committed to providing secure and reliable
              financial services. Established in [Year], we've been a trusted
              partner in the community, offering a range of personal and
              business banking solutions.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Our dedication to excellence is reflected in our customer service,
              innovative products, and commitment to providing tailored
              financial solutions. We understand the importance of financial
              stability and work tirelessly to ensure our clients receive the
              best possible support and advice.
            </p>
            <p className="mt-4 text-lg text-gray-700">
              Our team of experienced professionals is always ready to assist
              you with any banking needs, ensuring your financial goals are met
              with the highest level of integrity and expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
