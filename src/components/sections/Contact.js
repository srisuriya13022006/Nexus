import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9oa4lea", // Your Service ID
        "template_5y2x61n", // Your Template ID
        form.current,
        "aKR7bmwGJAfMUtiiQ" // Your Public Key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          setIsSent(true);
          setTimeout(() => setIsSent(false), 3000); // Reset message after 3 sec
        },
        (error) => {
          console.log("Failed:", error.text);
        }
      );

    e.target.reset(); // Reset form fields
  };

  return (
    <section id="contact" className="py-20 bg-gray-800 text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-accent">Contact Us</h2>
        <p className="text-lg mt-3">We’d love to hear from you!</p>
      </div>
      <form ref={form} onSubmit={sendEmail} className="max-w-lg mx-auto bg-gray-900 p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Name</label>
          <input
            type="text"
            name="user_name"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Email</label>
          <input
            type="email"
            name="user_email"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-300 mb-2">Message</label>
          <textarea
            name="message"
            rows="4"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-accent"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full px-6 py-3 bg-accent text-white font-bold rounded-lg shadow-md hover:scale-105 transition"
        >
          Send Message
        </button>

        {isSent && (
          <p className="text-green-400 text-center mt-4">Message sent successfully!</p>
        )}
      </form>
    </section>
  );
};

export default Contact;
