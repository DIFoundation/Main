"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/api/firebase";

function JobApplications() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const snapshot = await getDocs(collection(db, "job_applications"));
        const applications = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(applications);
      } catch (error) {
        console.error("Error fetching job applications:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data.length) return <p>No job applications yet.</p>;

  return (
    <table className="w-full border text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">Name</th>
          <th className="p-2 text-left">Email</th>
          <th className="p-2 text-left">Position</th>
            <th className="p-2 text-left">Cover Letter</th>
          <th className="p-2 text-left">CV</th>
        </tr>
      </thead>
      <tbody>
        {data.map((app) => (
          <tr key={app.id} className="border-t">
            <td className="p-2">{app.name}</td>
            <td className="p-2">{app.email}</td>
            <td className="p-2">{app.position}</td>
            <td className="p-2">
              <a
                href={app.coverLetterUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View Cover Letter
              </a>
            </td>
            <td className="p-2">
              <a
                href={app.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                View CV
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default JobApplications;