import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";

export function BreadCrumbs({ children }) {
  return (
    <nav className="flex items-center bg-green-50 py-2 mx-6 px-2 text-gray-600 text-sm space-x-2">
      {children}
    </nav>
  );
}

BreadCrumbs.Back = function Back({ to = "/" }) {
  return (
    <Link to={to} className="flex items-center text-green-600 hover:underline">
      ← Back
    </Link>
  );
};

BreadCrumbs.Item = function Item({ to, children }) {
  return (
    <>
      <span className="text-gray-400">/</span>
      {to ? (
        <Link to={to} className="hover:underline">
          {children}
        </Link>
      ) : (
        <span>{children}</span>
      )}
    </>
  );
};

BreadCrumbs.Home = function HomeIcon({ to = "/" }) {
  return (
    <>
      <span className="text-gray-400">|</span>
      <Link to={to} className="flex items-center hover:underline">
        <Home className="w-4 h-4 mr-1" />
      </Link>
    </>
  );
};
