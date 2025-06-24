"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
<<<<<<< HEAD
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/api/firebase";
=======
>>>>>>> 8d7c86bb82be9e3a09e36e25e19728c6799c3d82

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [notSuccess, setNotSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
<<<<<<< HEAD
      await addDoc(collection(db, "contact_messages"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      alert("Your message has been sent successfully!");
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setNotSuccess(true);
      alert("Failed to send message.");
=======
      // Example POST request to /api/contact (replace with your actual endpoint)
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setNotSuccess(true);
        console.error("Failed to submit");
      }
    } catch (error) {
      console.error("Error submitting:", error);
>>>>>>> 8d7c86bb82be9e3a09e36e25e19728c6799c3d82
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto py-6 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-6">Contact Us</h2>
      <p className="text-gray-600 mb-8">
        Have a question, feedback, or just want to say hello? Fill out the form
        below and we’ll get back to you.
      </p>

      {success && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md border border-green-200">
          Thank you! Your message has been sent.
        </div>
      )}

      {notSuccess && (
        <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md border border-red-200">
          Oops! Something went wrong. Please try again later.
<<<<<<< HEAD
        </div>
      )}
=======
        </div>)}
>>>>>>> 8d7c86bb82be9e3a09e36e25e19728c6799c3d82

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-offset-1 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email Address"
            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-offset-1 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Subject
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            placeholder="Subject"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-offset-1 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Message
          </label>
          <textarea
            name="message"
            value={formData.message}
            placeholder="Enter your message"
            onChange={handleChange}
            rows={5}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-offset-1 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-md font-medium hover:bg-[var(--color-primary)]/90 cursor-pointer transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Send size={16} />
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </form>
    </section>
  );
}
