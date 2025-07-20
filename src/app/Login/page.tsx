'use client';
import React, { useContext, useState } from 'react';
import { useRouter } from "next/navigation";
import { ContextTheme } from '../../Context/ThemeContext'
import Styles from '../../Styles/styles.module.css';


export default function LoginForm() {
  const { themeValue } = useContext(ContextTheme);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false)
  const router = useRouter();

  const handleSubmit = async  (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true)
    const res = await fetch("/api/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("token", data.token);
      router.push("/Admin"); 
      setLoading(false)
    } else {
      alert(data.message || "Login failed");
    }
  };

  return (
    <div
      className={`w-full min-h-screen flex items-center justify-center px-4 py-20 ${
        themeValue ? '' : Styles.DarkTheme
      }`}
    >
      <form
        onSubmit={handleSubmit}
        className={`w-full max-w-md border ${
          themeValue ? 'border-gray-300' : 'border-gray-600'
        } rounded-2xl p-8 flex flex-col gap-4`}
      >
        <h2
          className={`text-2xl text-center font-semibold mb-4 ${
            Styles.FontOvo
          } ${themeValue ? 'text-gray-800' : 'text-gray-100'}`}
        >
          Admin Login
        </h2>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="email"
            className={`text-sm ${
              themeValue ? 'text-gray-700' : 'text-gray-300'
            }`}
          >
            Email
          </label>
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`w-full rounded-lg border px-3 py-2 outline-none ${
              themeValue
                ? 'border-gray-400 bg-white text-gray-900'
                : 'border-gray-600 bg-transparent text-white'
            }`}
          />
        </div>

        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className={`text-sm ${
              themeValue ? 'text-gray-700' : 'text-gray-300'
            }`}
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={`w-full rounded-lg border px-3 py-2 outline-none ${
              themeValue
                ? 'border-gray-400 bg-white text-gray-900'
                : 'border-gray-600 bg-transparent text-white'
            }`}
          />
        </div>

        <button
          type="submit"
          className={`w-full mt-4 py-2 rounded-lg font-semibold ${
            themeValue
              ? 'bg-gray-900 text-white hover:bg-gray-700'
              : 'bg-white text-gray-900 hover:bg-gray-300'
          } duration-300`}
        >
          {loading ? 'Loading...' : 'Login'}
        </button>
      </form>
    </div>
  );
}
