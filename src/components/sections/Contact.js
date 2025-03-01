import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    // Validate form fields
    const formData = new FormData(form.current);
    const name = formData.get("user_name");
    const email = formData.get("user_email");
    const phone = formData.get("user_phone");
    const message = formData.get("message");

    if (!name || !email || !phone || !message) {
      setError("⚠️ Please fill out all fields.");
      return;
    }

    // Validate phone number (10 digits only)
    if (!/^\d{10}$/.test(phone)) {
      setError("⚠️ Please enter a valid 10-digit phone number.");
      return;
    }

    setIsSending(true);
    setError("");

    emailjs
      .sendForm(
        "service_j2a7llr", // Your Service ID
        "template_5y2x61n", // Your Template ID
        form.current,
        "aKR7bmwGJAfMUtiiQ" // Your Public Key
      )
      .then(
        () => {
          setIsSending(false);
          setIsSent(true);
          setTimeout(() => setIsSent(false), 3000);
        },
        () => {
          setIsSending(false);
          setError("❌ Failed to send message. Please try again.");
        }
      );

    e.target.reset(); // Reset form
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      {/* Section Heading */}
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-accent">Contact Us</h2>
        <p className="text-lg mt-3">We’d love to hear from you!</p>
      </div>

      {/* Contact Form */}
      <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Phone Number</label>
          <input
            type="tel"
            name="user_phone"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent"
            required
            pattern="[0-9]{10}"
            placeholder="Enter your phone number"
          />
        </div>

        {/* Message */}
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea
            name="message"
            rows="4"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>

        {/* Error Message */}
        {error && <p className="text-red-400 text-center mb-4">{error}</p>}

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-6 py-3 bg-accent text-white font-bold rounded-lg shadow-md hover:scale-105 transition flex justify-center items-center"
        >
          {isSending ? (
            <span className="loader"></span> // Loading spinner
          ) : (
            "Send Message"
          )}
        </button>

        {/* Success Message */}
        {isSent && <p className="text-green-400 text-center mt-4">✅ Message sent successfully!</p>}
      </form>

      {/* Contact Details */}
      <div className="text-center mt-10">
        <p className="text-lg text-gray-300">📧 Email: <a href="mailto:nexusedgetech@gmail.com" className="text-accent hover:underline">nexusedgetech@gmail.com</a></p>
        <p className="text-lg text-gray-300">📞 Phone: <a href="tel:+916383676973" className="text-accent hover:underline">+91 63836 76973</a></p>
      </div>
    </section>
  );
};

export default Contact;
