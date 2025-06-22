"use client";

import React, { useEffect, useState } from "react";
import { LogIn } from "lucide-react";
import { useRouter } from "next/navigation"; // If using App Router
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { auth, app } from "../api/firebase";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

export default function Admin() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const logIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);

    console.log("Form Data:", formData);

    try {
       if (!auth) return;

      const userCredential = await signInWithEmailAndPassword(
        auth,
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      console.log("Signed in user:", user);
      router.push(`/admin/${user.uid}`);
      alert(`Successfully signed in! Welcome, ${user.email}!`);
    } catch (err) {
      alert(`Login failed: ${err}`);
    } finally {
      setIsLoggingIn(false);
    }
  };

  useEffect(() => {
     if (!auth) return;
     
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("User is already signed in:", user);
        setLoading(true);
        router.push(`/admin/${user.uid}`);
        
      } else {
        console.log("No user signed in");
        setLoading(false);
      }
    });

    return () => unsubscribe(); 
  }, [router]);

  return (
    
    <section className="max-w-3xl mx-auto py-6 px-4 md:px-8">
        {loading ? (
            <div className="flex items-center justify-center h-screen">
            <p className="text-gray-600">Loading...</p>
            </div>
        ) : null}
      <h2 className="text-3xl font-bold mb-6">Admin Log In</h2>
      <p className="text-gray-600 mb-8">
        Log In as an admin to manage the database. Please enter your email and
        password below.
      </p>

      <form className="space-y-6" onSubmit={logIn}>
        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email Address"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-offset-1 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <div>
          <label className="block text-sm font-bold text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="Password"
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-[var(--color-primary)] focus:border-[var(--color-primary)] focus:outline-none focus:ring-2 focus:ring-offset-1 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          />
        </div>

        <button
          type="submit"
          disabled={isLoggingIn}
          className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-md font-medium hover:bg-[var(--color-primary)]/90 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoggingIn ? "Signing In..." : "Sign In"}
          <LogIn size={16} />
        </button>
      </form>
    </section>
  );
}
