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
    <aside className="h-screen w-64 bg-white/10 dark:bg-gray-900/60 backdrop-blur-lg border-r border-gray-300/10 dark:border-gray-700/20 shadow-xl">
      <div className="p-6 text-2xl font-bold tracking-tight text-gray-800 dark:text-white border-b border-gray-300/10 dark:border-gray-700/20">
        <span className="bg-gradient-to-r from-indigo-500 to-purple-500 text-transparent bg-clip-text">
          GitHub Panel
        </span>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.label}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 p-3 rounded-xl transition-all group ${
                    isActive
                      ? "bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-md"
                      : "text-gray-700 dark:text-gray-300 hover:bg-white/10 dark:hover:bg-gray-700/30 hover:shadow-md"
                  }`}
                >
                  <div className="transition-transform group-hover:scale-110 group-hover:text-indigo-400">
                    {item.icon}
                  </div>
                  <span className="font-medium">{item.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-4 text-xs text-center text-gray-500 dark:text-gray-400 border-t border-gray-300/10 dark:border-gray-700/20">
        © {new Date().getFullYear()} GitHub UI
      </div>
    </aside>
  );
}
