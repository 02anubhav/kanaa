// Banner.jsx
import React from "react";

function Banner({ children }) {
  return (
    <div className="bg-green-900 text-white flex flex-col sm:flex-row sm:items-center sm:justify-between px-4 py-3 gap-2 sm:gap-0 text-center sm:text-left">
      {children}
    </div>
  );
}

function Arrow({ direction = "left" }) {
  return (
    <button className="text-white px-2 hover:text-gray-300 hidden sm:block">
      {direction === "left" ? "‹" : "›"}
    </button>
  );
}

function Text({ children }) {
  return <span className="text-sm text-white">{children}</span>;
}

function Link({ children, href }) {
  return (
    <a
      href={href}
      className="underline ml-1 hover:text-gray-300 block sm:inline"
    >
      {children}
    </a>
  );
}

Banner.Arrow = Arrow;
Banner.Text = Text;
Banner.Link = Link;

export default Banner;
