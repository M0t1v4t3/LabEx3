import React from "react";
import Navbar from "./components/Navbar";
import Feed from "./components/Feed";
import Sidebar from "./components/Sidebar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Navbar />
      <main className="flex max-w-6xl mx-auto mt-6 px-4 gap-4">
        <Sidebar />
        <Feed />
      </main>
    </div>
  );
}
