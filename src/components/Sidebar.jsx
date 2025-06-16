import React from "react";
import { Home, BookOpen, Users, Settings } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", icon: <Home className="w-5 h-5" />, path: "/" },
  { label: "Repositories", icon: <BookOpen className="w-5 h-5" />, path: "/repos" },
  { label: "Organizations", icon: <Users className="w-5 h-5" />, path: "/orgs" },
  { label: "Settings", icon: <Settings className="w-5 h-5" />, path: "/settings" },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col border-r border-gray-800">
      <div className="p-6 text-2xl font-bold tracking-tight border-b border-gray-800">
        GitHub Panel
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => (
            <li key={item.label}>
              <Link
                to={item.path}
                className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-800 transition ${
                  location.pathname === item.path ? "bg-gray-800 font-semibold" : ""
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
