"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/api/firebase";

function ContactMessages() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const snapshot = await getDocs(collection(db, "contact_messages"));
        const messages = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        setData(messages);
        console.log("Fetched messages:", messages);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (!data.length) return <p>No contact messages yet.</p>;

  return (
    <table className="w-full border text-sm">
      <thead className="bg-gray-100">
        <tr>
          <th className="p-2 text-left">Name</th>
          <th className="p-2 text-left">Email</th>
          <th className="p-2 text-left">Subject</th>
          <th className="p-2 text-left">Message</th>
        </tr>
      </thead>
      <tbody>
        {data.map((msg) => (
          <tr key={msg.id} className="border-t">
            <td className="p-2">{msg.name}</td>
            <td className="p-2">{msg.email}</td>
            <td className="p-2">{msg.subject}</td>
            <td className="p-2">{msg.message}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default ContactMessages;
