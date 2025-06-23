"use client";

import React, { useState, useEffect } from "react";
import { BriefcaseBusiness, X, Send } from "lucide-react";
import { db } from "@/app/api/firebase";
import { collection, getDocs, addDoc, serverTimestamp } from "firebase/firestore";

export default function Careers() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [jobs, setJobs] = useState<any[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    coverLetter: "",
    cv: null as File | null,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  // Fetch jobs on load
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const snapshot = await getDocs(collection(db, "jobs"));
        const jobList = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setJobs(jobList);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  const openModal = (jobTitle: string) => {
    setSelectedJob(jobTitle);
    setFormData((prev) => ({ ...prev, position: jobTitle }));
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedJob(null);
    setFormData({
      name: "",
      email: "",
      position: "",
      coverLetter: "",
      cv: null,
    });
    setSuccess(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({ ...prev, cv: file }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { name, email, position, coverLetter, cv } = formData;
    if (!name || !email || !position || !coverLetter || !cv) {
      alert("Please fill all required fields and upload your CV.");
      return;
    }

    try {
      setLoading(true);

      // Optional: handle CV file upload to Firebase Storage here if needed

      await addDoc(collection(db, "job_applications"), {
        name,
        email,
        position,
        coverLetter,
        cvName: cv.name, // Just filename for now
        createdAt: serverTimestamp(),
      });

      setSuccess(true);
      setTimeout(closeModal, 3000);
    } catch (error) {
      console.error("Error submitting application:", error);
      alert("Failed to submit application.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="max-w-4xl h-screen mx-auto py-5 px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-4 text-[var(--color-primary)]">Join Our Team</h2>
      <p className="text-gray-600 mb-8">
        We’re looking for passionate individuals to help us build the future. Browse available positions and apply.
      </p>

      <h3 className="text-xl font-semibold mb-4">Open Positions</h3>

      <div className="space-y-4">
        {jobs.length ? (
          jobs.map((job) => (
            <div
              key={job.id}
              className="border border-gray-200 rounded-md p-4 hover:shadow-sm flex flex-col sm:flex-row sm:items-center justify-between"
            >
              <div>
                <h4 className="text-lg font-medium">{job.title}</h4>
                <p className="text-sm text-gray-500">
                  {job.location || "Remote"} ({job.type || "Full-Time"})
                </p>
              </div>
              <button
                onClick={() => openModal(job.title)}
                className="mt-3 sm:mt-0 bg-[var(--color-primary)] text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-[var(--color-primary)]/90"
              >
                <BriefcaseBusiness size={16} />
                Apply
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No open positions available at the moment.</p>
        )}
      </div>

      {/* Modal for job application */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center px-4 z-50">
          <div className="bg-white p-6 rounded-lg w-full max-w-md shadow-lg relative">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              <X size={20} />
            </button>

            <h3 className="text-xl font-bold mb-4">Apply for {selectedJob}</h3>

            {success ? (
              <div className="text-green-600 text-center font-medium">
                Application submitted successfully!
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
                  <input
                    type="text"
                    name="position"
                    value={formData.position}
                    readOnly
                    className="w-full bg-gray-100 border border-gray-300 rounded-md px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Cover Letter</label>
                  <textarea
                    name="coverLetter"
                    value={formData.coverLetter}
                    onChange={handleChange}
                    rows={3}
                    required
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Upload CV</label>
                  <input
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="w-full border border-gray-300 rounded-md px-3 py-2"
                    required
                  />
                  {formData.cv && (
                    <p className="text-sm text-green-600 mt-1">Selected: {formData.cv.name}</p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[var(--color-primary)] text-white px-4 py-2 rounded-md font-medium hover:bg-[var(--color-primary)]/90 flex items-center justify-center gap-2"
                >
                  {loading ? "Submitting..." : (
                    <>
                      <Send size={16} />
                      Submit Application
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
}
