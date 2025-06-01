import React from 'react';

const ContactInfoSection = () => {
  return (
    <div className=" rounded-2xl p-6 shadow-xl flex flex-col justify-center space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-1">📍 Location:</h3>
        <p className="text-gray-400">India</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">📧 Email:</h3>
        <p className="text-gray-400">contact@techverse.com</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold mb-1">📞 Phone:</h3>
        <p className="text-gray-400">+91 9876543210</p>
      </div>
      <div className="flex space-x-4 pt-4">
        <a href="#" className="text-gray-400 hover:text-white text-xl">🌐</a>
        <a href="#" className="text-gray-400 hover:text-white text-xl">🐦</a>
        <a href="#" className="text-gray-400 hover:text-white text-xl">🔗</a>
      </div>
    </div>
  );
};

export default ContactInfoSection;
