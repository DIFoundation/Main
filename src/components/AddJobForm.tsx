"use client";

import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/api/firebase";

export default function AddJobForm() {
  const [formData, setFormData] = useState({
    title: "",
    location: "",
    type: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await addDoc(collection(db, "jobs"), {
        ...formData,
        createdAt: serverTimestamp(),
      });
      alert("Job posted successfully!");
      setFormData({
        title: "",
        location: "",
        type: ""
      });
    } catch (error) {
      console.error("Error posting job:", error);
      alert("Failed to post job.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl">
      <div>
        <label className="block text-sm font-medium mb-1">Job Title</label>
        <input
          type="text"
          name="title"
          placeholder="e.g., Software Engineer, Product Manager"
          value={formData.title}
          onChange={handleChange}
          required
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Location</label>
        <input
          type="text"
          name="location"
          placeholder="e.g., Remote, New York, etc."
          value={formData.location}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-1">Type</label>
        <input
          type="text"
          name="type"
          placeholder="e.g., Full-time, Part-time, Internship"
          value={formData.type}
          onChange={handleChange}
          className="w-full border rounded px-3 py-2"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? "Posting..." : "Post Job"}
      </button>
    </form>
  );
}
