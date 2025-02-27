import React from "react";

const services = [
  { title: "Web Development", desc: "Modern, responsive websites.", icon: "🌐" },
  { title: "Machine Learning", desc: "AI-powered solutions.", icon: "🤖" },
  { title: "UI/UX Design", desc: "User-friendly & engaging designs.", icon: "🎨" }
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-background text-white">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-accent">Our Services</h2>
        <p className="text-lg mt-3">We provide top-notch tech solutions</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-10">
        {services.map((service, index) => (
          <div key={index} className="p-6 bg-primary rounded-lg shadow-lg transform transition hover:scale-105">
            <div className="text-4xl">{service.icon}</div>
            <h3 className="text-2xl mt-4">{service.title}</h3>
            <p className="mt-2 text-gray-300">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
