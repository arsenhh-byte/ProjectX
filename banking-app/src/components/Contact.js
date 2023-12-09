import React, { useState } from "react";
import { HiMail, HiPhone, HiLockClosed } from "react-icons/hi";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    accountNumber: "", // New field for account number
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic for a banking app here
    console.log(formData);
  };

  return (
    <section id="contact" className="text-gray-700 body-font relative">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
            Contact Our Banking Team
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Reach out for account inquiries, financial advice, or any banking queries.
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit} className="flex flex-wrap -m-2">
            {/* Name and Email fields remain the same */}
            <div className="p-2 w-1/2">
              <input
                className="w-full bg-gray-100 rounded border border-gray-400 focus:outline-none focus:border-blue-500 text-base px-4 py-2"
                placeholder="Account Number"
                type="text"
                name="accountNumber"
                onChange={handleChange}
                value={formData.accountNumber}
                required
              />
            </div>
            {/* Message field remains the same */}
            <div className="p-2 w-full">
              <button
                className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg"
                type="submit"
              >
                Submit Inquiry
              </button>
            </div>
          </form>
          <div className="p-4 mt-8 lg:w-1/2 md:w-full mx-auto text-center border-t border-gray-300">
            <div className="flex justify-center items-center">
              <HiMail className="text-blue-500 w-6 h-6 mr-2" />
              <span className="text-gray-600">support@yourbank.com</span>
            </div>
            <div className="flex justify-center items-center mt-3">
              <HiPhone className="text-blue-500 w-6 h-6 mr-2" />
              <span className="text-gray-600">(800) 123-4567</span>
            </div>
            <div className="flex justify-center items-center mt-3">
              <HiLockClosed className="text-blue-500 w-6 h-6 mr-2" />
              <span className="text-gray-600">Secure Banking Support</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
