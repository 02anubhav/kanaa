// Navbar.jsx
import React from "react";

function Navbar({ children }) {
  return (
    <header className="w-full bg-white  px-6 py-3 flex items-center justify-between ">
      {children}
    </header>
  );
}

function Logo({ children }) {
  return <div className="flex items-center gap-5 cursor-pointer">{children}</div>;
}

function Location({ children }) {
  return <div className="flex flex-col items-center  text-xs">{children}</div>;
}

function Search({ children }) {
  return (
    <div className="flex-1 mx-8">
      <div className="flex items-center border border-neutral-300 rounded-lg px-3 py-2">
        {children}
      </div>
    </div>
  );
}

function Actions({ children }) {
  return <div className="flex items-center gap-2 rounded-4xl bg-neutral-100 px-3 py-2">{children}</div>;
}

function Item({ children , onClick }) {
  return <div onClick={onClick} className="flex items-center  gap-1 bg-white rounded-2xl px-2 py-1 text-[8px] sm:text-[10px] font-semibold cursor-pointer">{children}</div>;
}

Navbar.Logo = Logo;
Navbar.Location = Location;
Navbar.Search = Search;
Navbar.Actions = Actions;
Navbar.Item = Item;

export default Navbar;
