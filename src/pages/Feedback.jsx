import React, { useState } from "react";

function Feedback() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Feedback submitted! Thank you.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section id="feedback" className="py-20 bg-white text-center">
      <h2 className="text-3xl font-bold mb-6 text-cyan-700">Feedback</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-sky-50 p-6 rounded-xl shadow space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          className="w-full p-3 rounded border"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-3 rounded border"
          required
        />
        <textarea
          name="message"
          placeholder="Your Feedback"
          value={form.message}
          onChange={handleChange}
          className="w-full p-3 rounded border"
          rows="4"
          required
        />
        <button type="submit" className="bg-cyan-500 text-white px-6 py-3 rounded-xl font-medium hover:bg-cyan-600">
          Submit
        </button>
      </form>
    </section>
  );
}

export default Feedback;
