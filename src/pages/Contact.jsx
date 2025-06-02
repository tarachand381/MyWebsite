import { useState } from "react";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((i) => ({
      ...i,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you, ${formData.name}! Your message has been received.`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-10 px-4 max-w-7xl mx-auto text-gray-800" >
      <h1 className="text-3xl font-bold mb-12 text-center text-pink-600 drop-shadow">
        Contact Us
      </h1>

      <div className="grid md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white shadow-2xl rounded-xl p-8 space-y-6"
        >
          <div>
            <label
              htmlFor="name"
              className="block font-semibold text-gray-700 mb-2"
            >
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full border border-gray-400 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-semibold text-gray-700 mb-2"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Your email address"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block font-semibold text-gray-700 mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              value={formData.message}
              onChange={handleChange}
              rows="5"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="bg-pink-700 text-white font-semibold px-6 py-3 rounded hover:bg-green-700 transition"
          >
            Send Message
          </button>
        </form>

        {/* Right Side: Map + Contact Info */}
        <div className="flex flex-col gap-6">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-[0_0_25px_rgba(34,197,94,0.4),_0_0_25px_rgba(236,72,153,0.3)] min-h-[250px] h-[250px]">
            <iframe
              title="Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019040336466!2d-122.40135028468104!3d37.789722679756526!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064cb9a6821%3A0x2f4ef90424f8f7c7!2s123%20Architect%20Street%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1685444669246!5m2!1sen!2sus"
              width="100%"
              height="100%"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>

          {/* Contact Info */}
          <div className="bg-white p-6 rounded-lg  shadow-[0_0_25px_rgba(236,72,153,0.3),_0_0_25px_rgba(34,197,94,0.4)] text-center text-gray-700">
            <p className="text-xl font-bold italic text-green-500">Office Adders No. 1</p>
            <p className="mt-2 font-medium">123 Ram Nagar, Jaipur</p>
            <p>
              Email:{" "}
              <a
                href="mailto:ktarachand381@gmail.com"
                className="text-blue-600 hover:underline"
              >
                ktarachand381@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+919782468792"
                className="text-blue-600 hover:underline"
              >
                (+91) 97824 68792
              </a>
            </p><hr /><br /><hr />

              <p className="text-xl font-bold italic text-red-500">Office Address No. 2</p>
            <p className="mt-2 font-medium">Gokulpura, Jaipur</p>
            <p>
              Email:{" "}
              <a
                href="mailto:ktarachand381@gmail.com"
                className="text-blue-600 hover:underline"
              >
                pawankumawat@gmail.com
              </a>
            </p>
            <p>
              Phone:{" "}
              <a
                href="tel:+919978765314"
                className="text-blue-600 hover:underline "
              >
                (+91) 9978765314
              </a>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Contact;
