import React from "react";
import { Headphones, Truck, Package, CreditCard } from "lucide-react"; // example icons

const features = [
  {
    id: 1,
    icon: <Headphones size={40} className="text-orange-500" />,
    title: "Help and Support",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 2,
    icon: <Truck size={40} className="text-orange-500" />,
    title: "Order Tracking",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    icon: <Package size={40} className="text-orange-500" />,
    title: "Returns and Refunds",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 4,
    icon: <CreditCard size={40} className="text-orange-500" />,
    title: "Flexible Payments",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

export default function Features() {
  return (
    <div className="bg-orange-50">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex flex-col items-center text-center p-6 rounded-lg"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm tracking-tight">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="md:hidden flex gap-6 overflow-x-auto scrollbar-hide">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="min-w-[250px] flex-shrink-0 flex flex-col items-center text-center p-6  rounded-lg "
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-white mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm tracking-tight">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
