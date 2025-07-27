import React from "react";

const offers = [
  {
    title: "🔥 Today’s Deals",
    desc: "Flat 50% off on selected items across all categories. Don’t miss out!",
    validTill: "Ends Tonight",
    minOrder: "No min. order",
    color: "bg-yellow-50 text-yellow-900",
    icon: "🔥"
  },
  {
    title: "🎉 Offers & Promotions",
    desc: "Buy 1 Get 1 Free on fresh fruits and bakery products.",
    validTill: "Till Sunday",
    minOrder: "₹149 min. order",
    color: "bg-pink-50 text-pink-900",
    icon: "🎉"
  },
  {
    title: "🚚 Free Delivery",
    desc: "No delivery charges above ₹299. Fast & secure delivery.",
    validTill: "This Month Only",
    minOrder: "₹299 min. order",
    color: "bg-green-50 text-green-900",
    icon: "🚚"
  },
  {
    title: "🧊 Cold Storage Items",
    desc: "Freezer-packed essentials for summer with guaranteed freshness.",
    validTill: "Limited Stock",
    minOrder: "₹199 min. order",
    color: "bg-blue-50 text-blue-900",
    icon: "🧊"
  },
  {
    title: "💰 Cashback Offers",
    desc: "Earn ₹50 cashback on prepaid orders using PayNow wallet.",
    validTill: "Offer ends 31st July",
    minOrder: "₹250 min. order",
    color: "bg-purple-50 text-purple-900",
    icon: "💰"
  }
];

const OfferSlider = () => {
  const allOffers = [...offers, ...offers]; // Doubled for looping

  return (
    <div className="overflow-hidden bg-[#c0a7e5] py-4">
      <div className="flex w-max animate-scroll gap-6 px-6">
        {allOffers.map((offer, index) => (
          <div
            key={index}
            className={`min-w-[280px] sm:min-w-[320px] ${offer.color} rounded-2xl p-6 shadow-md hover:shadow-lg hover:scale-[1.02] transition-all duration-300`}
          >
            <div className="text-lg font-semibold flex items-center gap-2 mb-2">
              <span>{offer.icon}</span>
              <span>{offer.title}</span>
            </div>
            <p className="text-sm text-[#2e2e2e] mb-3 leading-relaxed">
              {offer.desc}
            </p>
            <div className="text-xs text-[#7c7c7c] mt-auto">
              <p>📅 <strong>Valid:</strong> {offer.validTill}</p>
              <p>🛒 <strong>Min Order:</strong> {offer.minOrder}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OfferSlider;
