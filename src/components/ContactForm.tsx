"use client";

import { useState, FormEvent } from "react";

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    // Simulate form submission (replace with actual API call)
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      setSubmitStatus({
        type: "success",
        message: "Thank you for your message! We'll get back to you soon.",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Something went wrong. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6">
      <div className="flex flex-col gap-2">
        <label
          htmlFor="name"
          className="font-mono text-sm font-normal text-[#001f33] uppercase"
        >
          Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="border border-[#a3a3a3] px-4 py-3 font-sans text-base font-normal text-[#001f33] focus:outline-none focus:border-[#001f33] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="email"
          className="font-mono text-sm font-normal text-[#001f33] uppercase"
        >
          Email *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="border border-[#a3a3a3] px-4 py-3 font-sans text-base font-normal text-[#001f33] focus:outline-none focus:border-[#001f33] transition-colors"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="subject"
          className="font-mono text-sm font-normal text-[#001f33] uppercase"
        >
          Subject *
        </label>
        <select
          id="subject"
          name="subject"
          required
          value={formData.subject}
          onChange={handleChange}
          className="border border-[#a3a3a3] px-4 py-3 font-sans text-base font-normal text-[#001f33] focus:outline-none focus:border-[#001f33] transition-colors bg-white"
        >
          <option value="">Select a subject</option>
          <option value="general">General Inquiry</option>
          <option value="research">Research Collaboration</option>
          <option value="opportunities">Join Us / Job Opportunities</option>
          <option value="media">Media Inquiry</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label
          htmlFor="message"
          className="font-mono text-sm font-normal text-[#001f33] uppercase"
        >
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={6}
          value={formData.message}
          onChange={handleChange}
          className="border border-[#a3a3a3] px-4 py-3 font-sans text-base font-normal text-[#001f33] focus:outline-none focus:border-[#001f33] transition-colors resize-none"
        />
      </div>

      {submitStatus.type && (
        <div
          className={`p-4 ${
            submitStatus.type === "success"
              ? "bg-green-50 text-green-800 border border-green-200"
              : "bg-red-50 text-red-800 border border-red-200"
          }`}
        >
          <p className="font-sans text-sm">{submitStatus.message}</p>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#001f33] text-white px-8 py-4 font-mono text-sm font-normal hover:bg-opacity-90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed self-start"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}

