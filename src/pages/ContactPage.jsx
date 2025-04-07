import React from "react";

const ContactPage = () => {
  return (
    <div className="bg-[#fdf7fc] min-h-screen px-4 py-40">
      {/* Header Section */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Contact</h2>
        <p className="text-gray-500 mt-2">
          <span className="font-semibold">Home</span> -{" "}
          <span className="text-purple-600 font-medium">Contact</span>
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Contact Info */}
        <div className="space-y-6">
          <p className="text-sm bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent font-semibold">Contact Us</p>
          <h2 className="text-3xl font-extrabold">
            Get In <span className="bg-gradient-to-r from-blue-500 to-green-500 bg-clip-text text-transparent">Touch</span>
          </h2>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
              📧
            </div>
            <div>
              <p className="font-semibold">Email-Us :</p>
              <p>edugenmail@email.com</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-green-100 rounded-lg text-green-600">
              📞
            </div>
            <div>
              <p className="font-semibold">Call Us :</p>
              <p>+123 456 8900</p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-lg text-purple-600">
              🏢
            </div>
            <div>
              <p className="font-semibold">Office :</p>
              <p>Mountain Green Road 2389, NY, USA</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 shadow-xl rounded-xl">
          <form className="space-y-4">
            <div className="flex gap-4 flex-col md:flex-row">
              <input
                type="text"
                placeholder="Name*"
                className="flex-1 border border-gray-200 p-3 rounded-lg focus:outline-purple-500 bg-gray-100"
              />
              <input
                type="email"
                placeholder="Email*"
                className="flex-1 border border-gray-200 p-3 rounded-lg focus:outline-purple-500 bg-gray-100"
              />
            </div>
            <input
              type="text"
              placeholder="Website Address"
              className="w-full border border-gray-200 p-3 rounded-lg focus:outline-purple-500 bg-gray-100"
            />
            <textarea
              rows="5"
              placeholder="Your Message*"
              className="w-full border border-gray-200 p-3 rounded-lg focus:outline-purple-500 bg-gray-100 resize-none"
            ></textarea>
            <button
              type="submit"
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-purple-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
         {/* Map Section */}
         <div className="mt-20 text-center">
  <h2 className="text-3xl font-bold mb-4">Our Location</h2>
  <p className="text-gray-500 mb-6">Check out where we’re located in London</p>
  <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-xl border border-gray-200">
    <iframe
      title="London Location"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9938.066740409486!2d-0.14158814999999997!3d51.5156174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761b323bc14cfd%3A0x67587d8a2d103c3d!2sSoho%2C%20London%2C%20UK!5e0!3m2!1sen!2sin!4v1712382912345!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</div>
    </div>
  );
};

export default ContactPage;
