import React from 'react';

const ContactFormSection = () => {
  return (
    <form className=" rounded-2xl p-6 shadow-xl space-y-4">
      <input
        type="text"
        placeholder="Full Name"
        className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none"
      />
      <input
        type="email"
        placeholder="Email Address"
        className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none"
      />
      <textarea
        rows="5"
        placeholder="Your Message"
        className="w-full p-3 rounded-xl border border-gray-300 focus:outline-none"
      />
      <button
        type="submit"
        className="w-full text-white bg-cyan-600 hover:bg-cyan-700 transition-colors p-3 rounded-xl font-semibold"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactFormSection;
