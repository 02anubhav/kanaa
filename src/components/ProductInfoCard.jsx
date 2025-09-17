// ProductInfoCard.jsx
import { Check, CheckCheck, Recycle, Replace } from "lucide-react";
import React from "react";
import { BsRecycle } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
import { GrReturn } from "react-icons/gr";
import { PiBrandy } from "react-icons/pi";

export default function ProductInfoCard() {
  return (
    <aside className="w-full bg-white rounded-2xl  shadow-[0_3px_10px_rgb(0,0,0,0.1)] p-4  font-sans">
      <div className="space-y-3">
        <Benefit
          title="Free Delivery by Thurs 04 July"
          component={<CiDeliveryTruck size={15}/>}
        />
        <Benefit title="Hassle Free Returns" component={<BsRecycle size={15}/>} />
        <Benefit title="12-Month Warranty" component={<Check size={15}/>} />
      </div>

      <div className="my-3 border-t border-gray-200" />

      <h3 className="mb-3 font-semibold text-sm  text-gray-800">
        Buy now, Pay later!
      </h3>

      <div className="space-y-2">
        <PayLaterCard src="https://www.pfgrowth.com/wp-content/uploads/2023/03/tabby-logo-1.png" />
        <PayLaterCard src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIxqPaBEfBfwKHUR17xTkktzcGrF8yf5kWQw&s" />
      </div>

      <div className="my-3 border-t border-gray-200" />

      <h4 className="mb-3 font-semibold text-sm  text-gray-800">
        We’ve Got You Covered
      </h4>

      <div className="flex items-center justify-between -ml-2">
        <div className="flex-1  flex items-center justify-between ">
          <Feature
            title="Free Delivery"
            subtitle={null}
            component={<CiDeliveryTruck />}
          />
          <Feature
            title="15 days"
            subtitle="Replacement"
            component={<Replace />}
          />
          <Feature title="Top Brand" component={<PiBrandy />} />
        </div>
      </div>
    </aside>
  );
}

function Benefit({ title ,component}) {
  return (
    <div className="flex items-start sm:items-center gap-3">
      <div className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 rounded-full bg-green-50 flex items-center justify-center border border-green-100 flex-shrink-0">
        <div className="text-green-600 text-sm sm:text-xs ">{component}</div>
      </div>

      <div className="flex-1">
        <div className="text-sm sm:text-xs text-gray-800 font-medium">
          {title}
        </div>
      </div>
    </div>
  );
}

function PayLaterCard({ src }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-100 p-3">
      <div className="flex items-start sm:items-center gap-3">
        <img src={src} alt="Tabby" className="h-6" />

        <div className="text-[12px] text-gray-500 leading-tight">
          Split in 4 payments. No interest.
          <span className="underline ml-1  text-black">Learn More</span>
        </div>
      </div>

      <div className="hidden sm:block text-gray-400">
        <svg className="w-4 h-4 md:w-5 md:h-5" viewBox="0 0 24 24" fill="none">
          <path
            d="M9 6l6 6-6 6"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function Feature({ title, subtitle, component }) {
  return (
    <div className="flex flex-col items-center text-center text-xs sm:text-sm md:text-base w-16 sm:w-20 md:w-24 ">
      <div className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-md bg-gray-100 flex items-center justify-center mb-2">
        {component}
      </div>

      <div className="text-gray-800 font-medium text-xs ">{title}</div>

      {subtitle && (
        <div className="text-gray-500 text-[10px] sm:text-xs">{subtitle}</div>
      )}
    </div>
  );
}
