"use client";

import { useState, useEffect } from "react";
import VolunteerSubmissions from "@/components/VolunteerSubmissions";
import ContactMessages from "@/components/ContactMessages";
import JobApplications from "@/components/JobApplications";
import { useRouter } from "next/navigation";
import { auth } from "@/app/api/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import AddJobForm from "@/components/AddJobForm";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState<
    "volunteer" | "contact" | "job" | "addjob"
  >("volunteer");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [user, setUser] = useState<any>(null);

  const signOutUser = async () => {
    try {
      await signOut(auth);
      setUser(null);
      router.push("../admin");
    } catch (error) {
      console.error("Sign out error:", error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        router.push("/admin");
      } else {
        setUser(firebaseUser);
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="w-full mx-auto py-8 px-4">
      <div className="p-6 flex flex-row items-center justify-between bg-white mb-6">
        <h2 className="text-2xl font-bold mb-2">Welcome, {user.email}</h2>

        <button
          onClick={signOutUser}
          className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
        >
          Sign Out
        </button>
      </div>
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Tabs */}
      <div className="flex gap-4 border-b mb-6">
        <button
          onClick={() => setActiveTab("volunteer")}
          className={`px-4 py-2 border-b-2 ${
            activeTab === "volunteer"
              ? "border-blue-600 text-blue-600 font-semibold"
              : "border-transparent text-gray-500"
          }`}
        >
          Volunteer Submissions
        </button>
        <button
          onClick={() => setActiveTab("contact")}
          className={`px-4 py-2 border-b-2 ${
            activeTab === "contact"
              ? "border-blue-600 text-blue-600 font-semibold"
              : "border-transparent text-gray-500"
          }`}
        >
          Contact Messages
        </button>
        <button
          onClick={() => setActiveTab("job")}
          className={`px-4 py-2 border-b-2 ${
            activeTab === "job"
              ? "border-blue-600 text-blue-600 font-semibold"
              : "border-transparent text-gray-500"
          }`}
        >
          Job Applications
        </button>
        <button
          onClick={() => setActiveTab("addjob")}
          className={`px-4 py-2 border-b-2 ${
            activeTab === "addjob"
              ? "border-blue-600 text-blue-600 font-semibold"
              : "border-transparent text-gray-500"
          }`}
        >
          Post a Job
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === "volunteer" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">
              Volunteer Submissions
            </h2>
            {activeTab === "volunteer" && <VolunteerSubmissions />}
          </div>
        )}

        {activeTab === "contact" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Contact Messages</h2>
            {activeTab === "contact" && <ContactMessages />}
          </div>
        )}

        {activeTab === "job" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Job Applications</h2>
            {activeTab === "job" && <JobApplications />}
          </div>
        )}

        {activeTab === "addjob" && (
          <div>
            <h2 className="text-xl font-semibold mb-4">Post a New Job</h2>
            <AddJobForm />
          </div>
        )}
      </div>
    </div>
  );
}
