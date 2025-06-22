"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/api/firebase";

function VolunteerSubmissions() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const snapshot = await getDocs(collection(db, "volunteer_submissions"));
        const volunteers = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(volunteers);
      } catch (error) {
        console.error("Error fetching volunteers:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVolunteers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data.length) return <p>No volunteer submissions found.</p>;

  return (
    <table className="w-full border text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">Name</th>
          <th className="p-2 text-left">Email</th>
          <th className="p-2 text-left">Phone Number</th>
          <th className="p-2 text-left">Interest</th>
          <th className="p-2 text-left">Message</th>
        </tr>
      </thead>
      <tbody>
        {data.map((v) => (
          <tr key={v.id} className="border-t">
            <td className="p-2">{v.name}</td>
            <td className="p-2">{v.email}</td>
            <td className="p-2">{v.phone}</td>
            <td className="p-2">{v.interest}</td>
            <td className="p-2">{v.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default VolunteerSubmissions
