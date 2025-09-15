import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function MobileFooter() {
  const [open, setOpen] = useState(null);

  const toggle = (section) => {
    setOpen(open === section ? null : section);
  };

  return (
    <footer className="bg-gradient-to-r from-[#22283B] to-[#5D395F] text-white px-4 py-6">
      <div className="mb-6">
        <h3 className="font-semibold mb-2">Join our newsletter</h3>
        <p className="text-xs mb-3">
          Sign up to be the first to know about any updates!
        </p>
        <div className="flex flex-col gap-2">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-3 py-2 rounded-md text-black text-sm bg-white"
          />
          <button className="bg-[#D8662A] hover:bg-orange-700 px-4 py-2 rounded-2xl text-sm font-medium">
            Subscribe
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <div>
          <button
            className="w-full flex justify-between items-center py-2 border-b border-white/20"
            onClick={() => toggle("explore")}
          >
            <span className="font-semibold">Explore</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                open === "explore" ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === "explore" && (
            <ul className="pl-2 text-sm space-y-1 mt-2">
              <li>Gift Finder</li>
              <li>My Account</li>
              <li>Rentals</li>
              <li>Trade In</li>
              <li>Wallet & Gift Cards</li>
            </ul>
          )}
        </div>

        <div>
          <button
            className="w-full flex justify-between items-center py-2 border-b border-white/20"
            onClick={() => toggle("learn")}
          >
            <span className="font-semibold">Learn More</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                open === "learn" ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === "learn" && (
            <ul className="pl-2 text-sm space-y-1 mt-2">
              <li>About Us</li>
              <li>Careers</li>
              <li>Referrals</li>
              <li>Testimonials</li>
            </ul>
          )}
        </div>

        <div>
          <button
            className="w-full flex justify-between items-center py-2 border-b border-white/20"
            onClick={() => toggle("help")}
          >
            <span className="font-semibold">Need Help?</span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                open === "help" ? "rotate-180" : ""
              }`}
            />
          </button>
          {open === "help" && (
            <ul className="pl-2 text-sm space-y-1 mt-2">
              <li>Contact Us</li>
              <li>Returns & Refunds</li>
              <li>FAQs</li>
            </ul>
          )}
        </div>
      </div>
      <div className="mt-6 space-y-2">
        <div className="flex items-center  py-1 gap-3 max-w-[350px] mb-3">
          <img
            src="https://thekanaa.com/media/wysiwyg/footer/App_icon.svg"
            alt="logo"
            className="h-12"
            onClick={() => navigate("/")}
          />
          <p className="text-xs tracking-wide text-neutral-300">
            Make sure to download our app for an enhanced shopping experience!
            and exclusive deals
          </p>
        </div>
        <div className="border py-4 px-2 flex flex-col gap-4 rounded-md">
          <button className="w-full border  px-4 py-2 rounded-2xl text-sm flex justify-center">
            App Store
          </button>
          <button className="w-full border px-4 py-2 rounded-2xl text-sm flex justify-center">
            Google Play Store
          </button>
          <button className="w-full border px-4 py-2 rounded-2xl text-sm flex justify-center">
            App Gallery
          </button>
        </div>
      </div>

      <div className="mt-6 text-center space-y-3">
        <div className="flex justify-center items-center">
          <img
            src="https://thekanaa.com/media/wysiwyg/footer/Client_logo.png"
            alt="logo"
            className="h-8"
            onClick={() => navigate("/")}
          />
        </div>
        <div className="flex justify-center gap-4 text-lg">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-youtube"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>

      <div className="mt-6 flex justify-center gap-3 flex-wrap">
        <img
          src="https://download.logo.wine/logo/Visa_Inc./Visa_Inc.-Logo.wine.png"
          alt="Visa"
          className="h-6 w-10 bg-white rounded-md"
        />
        <img
          src="https://logos-world.net/wp-content/uploads/2020/09/Mastercard-Logo.png"
          alt="Mastercard"
          className="h-6"
        />
        <img
          src="https://www.logo.wine/a/logo/Apple_Pay/Apple_Pay-White-Dark-Background-Logo.wine.svg"
          alt="Apple Pay"
          className="h-6 w-15 rounded-md"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxqPaBEfBfwKHUR17xTkktzcGrF8yf5kWQw&s"
          alt="Tamara"
          className="h-6 rounded-md"
        />
        <img
          src="https://www.pfgrowth.com/wp-content/uploads/2023/03/tabby-logo-1.png"
          alt="Tabby"
          className="h-6"
        />
      </div>

      <p className="text-xs text-center mt-4 opacity-75">
        © Kanaa 2024. All rights reserved.
      </p>
    </footer>
  );
}
