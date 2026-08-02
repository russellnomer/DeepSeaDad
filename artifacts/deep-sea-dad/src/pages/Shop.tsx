import { useState } from "react";
import captainBadge from "@assets/image_1775965037017.png";

type Tab = "merch" | "digital";

interface MerchItem {
  name: string;
  description: string;
  price: string;
  category: string;
  badge?: "Best Seller" | "New";
}

interface DigitalItem {
  title: string;
  description: string;
  format: string;
  pages: string;
  price: string;
}

const MERCH_ITEMS: MerchItem[] = [
  {
    name: "Deep Sea Dad Captain Hat",
    description: "The same style I wear on every trip. Sweat-stained not included — you gotta earn that yourself, kiddo.",
    price: "$34.99",
    category: "Hats & Caps",
    badge: "Best Seller",
  },
  {
    name: "\"Reel Legend\" Snapback",
    description: "Mesh back for those hot summer days when the fish are biting and the sun ain't forgiving.",
    price: "$29.99",
    category: "Hats & Caps",
  },
  {
    name: "Deep Sea Dad Logo Tee",
    description: "Soft cotton, ocean blue. Wear it proud — you're part of the crew now.",
    price: "$27.99",
    category: "T-Shirts & Hoodies",
    badge: "Best Seller",
  },
  {
    name: "\"Gone Fishin'\" Hoodie",
    description: "For those early morning launches when the fog's still on the water. Warm as a dad hug.",
    price: "$49.99",
    category: "T-Shirts & Hoodies",
    badge: "New",
  },
  {
    name: "\"I'd Rather Be Fishing\" Tee",
    description: "Honest clothing for honest folks. Pair it with cargo shorts and you're set for life.",
    price: "$24.99",
    category: "T-Shirts & Hoodies",
  },
  {
    name: "Deep Sea Dad Bumper Sticker",
    description: "Slap it on the cooler, the truck, the tackle box — let 'em know who taught you.",
    price: "$4.99",
    category: "Stickers & Decals",
  },
  {
    name: "Fish Species Sticker Pack",
    description: "Six waterproof stickers of the most popular catches. Great for water bottles and laptops.",
    price: "$9.99",
    category: "Stickers & Decals",
    badge: "New",
  },
  {
    name: "\"Tight Lines\" Vinyl Decal",
    description: "A classic fishing blessing for your boat, truck, or anywhere that needs good luck.",
    price: "$6.99",
    category: "Stickers & Decals",
  },
  {
    name: "Deep Sea Dad Travel Mug",
    description: "Keeps your coffee hot through the whole morning bite. Double-walled, spill-proof, Dad-approved.",
    price: "$22.99",
    category: "Drinkware",
    badge: "Best Seller",
  },
  {
    name: "\"Hooked on Dad\" Pint Glass",
    description: "For the end-of-day stories. Fill it up, sit back, and tell me about the one that got away.",
    price: "$14.99",
    category: "Drinkware",
  },
];

const DIGITAL_ITEMS: DigitalItem[] = [
  {
    title: "Deep Sea Dad's Fishing Playbook",
    description: "My seasonal guide covering what to fish, where to go, and what gear to bring — spring through winter. Everything I wish someone told me 30 years ago.",
    format: "PDF",
    pages: "48 pages",
    price: "$12.99",
  },
  {
    title: "The Knot Bible",
    description: "Illustrated step-by-step for every knot you'll ever need. From the Palomar to the Bimini Twist — if I can tie it with these old hands, you can too.",
    format: "PDF",
    pages: "32 pages",
    price: "$8.99",
  },
  {
    title: "Species Cheat Sheets",
    description: "Printable ID cards organized by region. Take 'em on the boat, laminate 'em, impress your buddies. Know what you caught before you have to ask.",
    format: "PDF",
    pages: "24 cards",
    price: "$6.99",
  },
  {
    title: "Trip Planner Template",
    description: "My personal fishing log template. Track the date, weather, moon phase, what worked, what didn't. A year from now you'll thank me.",
    format: "Printable PDF",
    pages: "12 pages",
    price: "$4.99",
  },
];

const CATEGORIES = ["All", "Hats & Caps", "T-Shirts & Hoodies", "Stickers & Decals", "Drinkware"];

export default function Shop() {
  const [tab, setTab] = useState<Tab>("merch");
  const [category, setCategory] = useState("All");

  const filteredMerch =
    category === "All" ? MERCH_ITEMS : MERCH_ITEMS.filter((item) => item.category === category);

  return (
    <section className="animate-fade-in">
      <div className="text-center mb-10 sm:mb-14">
        <div className="flex justify-center mb-4">
          <img
            src={captainBadge}
            alt="Deep Sea Dad badge"
            className="w-20 h-20 sm:w-24 sm:h-24 rounded-full shadow-xl border-4 border-sunset/30"
          />
        </div>
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-ocean mb-4">
          The Deep Sea Dad Shop
        </h1>
        <p className="max-w-xl mx-auto text-ocean/70 text-lg">
          Gear up like Dad. Whether it's a hat for the boat or a guide for the tackle box,
          everything here is hand-picked by yours truly.
        </p>
      </div>

      <div className="flex justify-center gap-2 mb-8 sm:mb-10">
        <button
          onClick={() => setTab("merch")}
          className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
            tab === "merch"
              ? "bg-ocean text-canvas shadow-lg"
              : "bg-white text-ocean/70 hover:bg-ocean/10 border border-ocean/20"
          }`}
        >
          Merch & Gear
        </button>
        <button
          onClick={() => setTab("digital")}
          className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 ${
            tab === "digital"
              ? "bg-ocean text-canvas shadow-lg"
              : "bg-white text-ocean/70 hover:bg-ocean/10 border border-ocean/20"
          }`}
        >
          Digital Products
        </button>
      </div>

      {tab === "merch" && (
        <div className="animate-fade-in">
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${
                  category === cat
                    ? "bg-sunset text-white shadow"
                    : "bg-wood/10 text-ocean/60 hover:bg-wood/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMerch.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 border border-wood/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
              >
                {item.badge && (
                  <span
                    className={`self-start px-3 py-0.5 rounded-full text-xs font-bold mb-3 ${
                      item.badge === "Best Seller"
                        ? "bg-sunset/15 text-sunset"
                        : "bg-ocean/10 text-ocean"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
                <div className="uppercase text-xs text-wood tracking-wider mb-2 font-semibold">
                  {item.category}
                </div>
                <h3 className="font-semibold text-ocean text-lg mb-2">{item.name}</h3>
                <p className="text-sm text-ocean/60 leading-relaxed flex-1">{item.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-ocean">{item.price}</span>
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="bg-sunset hover:bg-sunset/90 text-white px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 shadow-md hover:shadow-lg"
                  >
                    Get Yours
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-sm text-ocean/50 italic">
              All merch ships from our print partner — quality guaranteed by Dad
            </p>
          </div>
        </div>
      )}

      {tab === "digital" && (
        <div className="animate-fade-in">
          <div className="max-w-3xl mx-auto">
            <div className="grid sm:grid-cols-2 gap-6">
              {DIGITAL_ITEMS.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-wood/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex flex-col"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <span className="bg-ocean/10 text-ocean px-2.5 py-0.5 rounded-full text-xs font-semibold">
                      {item.format}
                    </span>
                    <span className="bg-wood/10 text-wood px-2.5 py-0.5 rounded-full text-xs font-semibold">
                      {item.pages}
                    </span>
                  </div>
                  <h3 className="font-semibold text-ocean text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-ocean/60 leading-relaxed flex-1">{item.description}</p>
                  <div className="mt-5 flex items-center justify-between">
                    <span className="text-xl font-bold text-ocean">{item.price}</span>
                    <a
                      href="#"
                      onClick={(e) => e.preventDefault()}
                      className="bg-ocean hover:bg-ocean/90 text-canvas px-5 py-2 rounded-full text-sm font-semibold transition-colors duration-200 shadow-md hover:shadow-lg"
                    >
                      Download
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
