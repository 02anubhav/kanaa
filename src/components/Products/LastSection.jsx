import React from "react";

export default function ProductInfoCard() {
  return (
    <div className="max-w-sm mx-auto bg-white rounded-2xl shadow-sm p-4 font-sans">
      <div className="space-y-3">
        <Benefit
          icon={
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M3 12h18"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          title={"Free Delivery by Thurs 04 July"}
          meta={false}
        />

        <Benefit
          icon={
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M12 5v14"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          title={"Hastle Free Returns"}
          meta={false}
        />

        <Benefit
          icon={
            <svg
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <rect
                x="3"
                y="3"
                width="18"
                height="18"
                rx="2"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          title={"12-Month Warranty"}
          meta={false}
        />
      </div>

      <div className="my-3 border-t border-gray-200" />

      <div>
        <h3 className="text-gray-800 font-semibold mb-3">
          Buy now, Pay later!
        </h3>

        <div className="space-y-2">
          <PayLaterCard
            brandName="tamara"
            description="Split in 4 payments. No interest, late fees."
            pillStyle="bg-gradient-to-r from-yellow-200 to-red-200 text-sm font-semibold"
          />

          <PayLaterCard
            brandName="tabby"
            description="Split in 4 payments. No interest, late fees."
            pillStyle="bg-green-100 text-sm font-semibold"
          />
        </div>
      </div>

      <div className="my-3 border-t border-gray-200" />

      <div>
        <h4 className="text-gray-800 font-semibold mb-3">
          We’ve Got You Covered
        </h4>

        <div className="flex items-center justify-between">
          <button className="p-1 rounded-full border border-gray-200">
            <svg
              className="w-4 h-4 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M15 19l-7-7 7-7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>

          <div className="flex-1 mx-3 flex items-center justify-between">
            <Feature icon={TruckIcon()} title="Free Delivery" subtitle={null} />
            <Feature
              icon={ThumbIcon()}
              title="15 days"
              subtitle="Replacement"
            />
          </div>

          <button className="p-1 rounded-full border border-gray-200">
            <svg
              className="w-4 h-4 text-gray-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                d="M9 5l7 7-7 7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

function Benefit({ icon, title, meta }) {
  return (
    <div className="flex items-center gap-3">
      <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center border border-green-100">
        <div className="text-green-600">{icon}</div>
      </div>
      <div className="flex-1 text-sm">
        <div className="flex items-center gap-2">
          <span className="text-gray-800 font-medium">{title}</span>
          {meta && <span className="text-xs text-gray-400">{meta}</span>}
        </div>
      </div>
      <div className="text-gray-300">i</div>
    </div>
  );
}

function PayLaterCard({ brandName, description, pillStyle }) {
  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-100 p-3">
      <div className="flex items-center gap-3">
        <div className={`px-3 py-1 rounded-full text-xs ${pillStyle}`}>
          {brandName}
        </div>
        <div className="text-xs text-gray-500">
          {description} <span className="underline ml-2">Learn More</span>
        </div>
      </div>
      <div>
        <svg
          className="w-4 h-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            d="M9 6l6 6-6 6"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

function Feature({ icon, title, subtitle }) {
  return (
    <div className="flex flex-col items-center text-center text-xs w-20">
      <div className="w-12 h-12 rounded-md bg-gray-50 flex items-center justify-center mb-2">
        {icon}
      </div>
      <div className="text-gray-800 font-medium">{title}</div>
      {subtitle && <div className="text-gray-500 text-xs">{subtitle}</div>}
    </div>
  );
}

function TruckIcon() {
  return (
    <svg
      className="w-6 h-6 text-green-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M3 7h11v10H3z"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 12h4l3 3v2"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="18.5" r="1.5" />
      <circle cx="18.5" cy="18.5" r="1.5" />
    </svg>
  );
}

function ThumbIcon() {
  return (
    <svg
      className="w-6 h-6 text-yellow-500"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
    >
      <path
        d="M14 9V5a3 3 0 0 0-6 0v4"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 15h9l3 3V8"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
