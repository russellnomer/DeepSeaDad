import { useState, useCallback } from "react";
import logoBadge from "@assets/image_1775965037017.png";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const NAV_ITEMS = [
  { id: "home", label: "Home" },
  { id: "freshwater", label: "Freshwater" },
  { id: "saltwater", label: "Saltwater & Deep Sea" },
  { id: "tackle-box", label: "Secret Tackle Box" },
  { id: "travel-guide", label: "Travel Guide" },
  { id: "gear-shop", label: "Dad's Gear" },
  { id: "cook-your-catch", label: "Cook Your Catch" },
  { id: "regulations", label: "Regulations" },
  { id: "shop", label: "Shop" },
  { id: "about", label: "About Russell" },
];

const MOBILE_NAV_ITEMS = [
  { id: "home", label: "Home", mobileIcon: "\uD83C\uDFE0" },
  { id: "freshwater", label: "Freshwater", mobileIcon: "\uD83C\uDFDE\uFE0F" },
  { id: "saltwater", label: "Saltwater & Deep Sea", mobileIcon: "\uD83C\uDF0A" },
  { id: "tackle-box", label: "Secret Tackle Box", mobileIcon: "\uD83D\uDD10" },
  { id: "travel-guide", label: "Travel Guide", mobileIcon: "\uD83E\uDDED" },
  { id: "gear-shop", label: "Dad's Gear", mobileIcon: "\uD83D\uDECD\uFE0F" },
  { id: "cook-your-catch", label: "Cook Your Catch", mobileIcon: "🍽️" },
  { id: "regulations", label: "Regulations", mobileIcon: "📋" },
  { id: "shop", label: "Shop", mobileIcon: "\uD83D\uDED2" },
  { id: "about", label: "About Russell", mobileIcon: "\uD83D\uDC68\u200D\uD83E\uDDB3" },
];

export default function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNav = useCallback(
    (page: string) => {
      onNavigate(page);
      setMobileOpen(false);
    },
    [onNavigate]
  );

  return (
    <header className="bg-ocean text-canvas shadow-lg sticky top-0 z-40">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-3">
        <div className="flex items-center justify-between">
          <button
            onClick={() => handleNav("home")}
            className="flex items-center gap-2 sm:gap-3 text-xl sm:text-2xl font-display font-bold text-sunset focus:outline-none focus-visible:ring-2 focus-visible:ring-sunset focus-visible:ring-offset-2 focus-visible:ring-offset-ocean rounded"
          >
            <img
              src={logoBadge}
              alt="Deep Sea Dad logo"
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-sunset/30"
            />
            <span className="hidden sm:inline">Deep Sea Dad</span>
          </button>

          <div className="hidden md:flex items-center gap-6 lg:gap-8 text-sm font-medium">
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`relative transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-sunset focus-visible:outline-offset-4 rounded-sm hover:text-sunset ${
                  currentPage === item.id
                    ? "text-sunset after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:h-0.5 after:bg-sunset"
                    : "text-canvas/80"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-3xl focus:outline-none focus-visible:ring-2 focus-visible:ring-sunset rounded"
            aria-label="Toggle menu"
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? "\u2715" : "\u2630"}
          </button>
        </div>

        {mobileOpen && (
          <div className="mt-4 md:hidden flex flex-col gap-4 text-sm font-medium border-t border-canvas/30 pt-4 animate-fade-in">
            {MOBILE_NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNav(item.id)}
                className={`text-left transition-colors duration-200 py-1 ${
                  currentPage === item.id ? "text-sunset" : "text-canvas/80 hover:text-canvas"
                }`}
              >
                {item.mobileIcon} {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
