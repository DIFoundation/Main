<<<<<<< HEAD
"use client";

import React, { useState } from "react";
import { Send } from "lucide-react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/api/firebase";

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
=======
'use client';

import React, { useState } from 'react';
import { Send } from 'lucide-react';

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
>>>>>>> 8d7c86bb82be9e3a09e36e25e19728c6799c3d82
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

<<<<<<< HEAD
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
=======
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
>>>>>>> 8d7c86bb82be9e3a09e36e25e19728c6799c3d82
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

<<<<<<< HEAD
    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.interest
    ) {
      alert("Please fill all required fields.");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "volunteer_submissions"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      alert("Your message has been sent successfully!");
      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        interest: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      setSuccess(false);
      alert("Failed to send message.");
=======
    if (!formData.name || !formData.email || !formData.phone || !formData.interest) {
      alert('Please fill all required fields.');
      return;
    }

    try {
      setLoading(true);

      const res = await fetch('/api/volunteer', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setSuccess(true);
        setFormData({
          name: '',
          email: '',
          phone: '',
          interest: '',
          message: '',
        });
      } else {
        alert('There was an error submitting your volunteer request.');
      }
    } catch (err) {
      console.error('Error:', err);
>>>>>>> 8d7c86bb82be9e3a09e36e25e19728c6799c3d82
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-3xl mx-auto py-10 px-4 md:px-8">
<<<<<<< HEAD
      <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">
        Become a Volunteer
      </h2>
      <p className="text-gray-600 mb-8">
        Join us in making a difference. Fill out the form below and we’ll get in
        touch with you soon.
=======
      <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">Become a Volunteer</h2>
      <p className="text-gray-600 mb-8">
        Join us in making a difference. Fill out the form below and we’ll get in touch with you soon.
>>>>>>> 8d7c86bb82be9e3a09e36e25e19728c6799c3d82
      </p>

      {success && (
        <div className="mb-6 p-4 bg-green-100 text-green-700 rounded-md">
          Thank you for volunteering! We will contact you soon.
        </div>
      )}

<<<<<<< HEAD
      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full Name
          </label>
=======
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
>>>>>>> 8d7c86bb82be9e3a09e36e25e19728c6799c3d82
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
            required
          />
        </div>

        <div>
<<<<<<< HEAD
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
=======
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
>>>>>>> 8d7c86bb82be9e3a09e36e25e19728c6799c3d82
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
            required
          />
        </div>

        <div>
<<<<<<< HEAD
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
=======
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
>>>>>>> 8d7c86bb82be9e3a09e36e25e19728c6799c3d82
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
            required
          />
        </div>

        <div>
<<<<<<< HEAD
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Area of Interest
          </label>
=======
          <label className="block text-sm font-medium text-gray-700 mb-1">Area of Interest</label>
>>>>>>> 8d7c86bb82be9e3a09e36e25e19728c6799c3d82
          <select
            name="interest"
            value={formData.interest}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
            required
          >
            <option value="">-- Select an area --</option>
            <option value="Community Outreach">Community Outreach</option>
            <option value="Fundraising">Fundraising</option>
            <option value="Event Planning">Event Planning</option>
            <option value="Social Media">Social Media</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <div>
<<<<<<< HEAD
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Message (optional)
          </label>
=======
          <label className="block text-sm font-medium text-gray-700 mb-1">Message (optional)</label>
>>>>>>> 8d7c86bb82be9e3a09e36e25e19728c6799c3d82
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)]"
          ></textarea>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[var(--color-primary)] text-white px-4 py-2 rounded-md font-medium hover:bg-[var(--color-primary)]/90 transition flex items-center justify-center gap-2"
        >
<<<<<<< HEAD
          {loading ? (
            "Submitting..."
          ) : (
=======
          {loading ? 'Submitting...' : (
>>>>>>> 8d7c86bb82be9e3a09e36e25e19728c6799c3d82
            <>
              <Send size={16} />
              Submit Volunteer Request
            </>
          )}
        </button>
      </form>
    </section>
  );
}
