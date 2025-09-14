import React from "react";

function Banner({ children }) {
  return (
    <div className="bg-green-900 text-white flex flex-col sm:flex-row items-center justify-center px-4 py-3 gap-2 text-center">
      {children}
    </div>
  );
}

function Text({ children }) {
  return <span className="text-sm text-white">{children}</span>;
}

function Link({ children, href }) {
  return (
    <a href={href} className="underline ml-1 hover:text-gray-300">
      {children}
    </a>
  );
}

Banner.Text = Text;
Banner.Link = Link;

export default Banner;
