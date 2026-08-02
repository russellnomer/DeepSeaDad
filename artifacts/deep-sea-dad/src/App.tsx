import { useState, useCallback, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JokeModal from "@/components/JokeModal";
import Home from "@/pages/Home";
import Freshwater from "@/pages/Freshwater";
import Saltwater from "@/pages/Saltwater";
import TackleBox from "@/pages/TackleBox";
import TravelGuide from "@/pages/TravelGuide";
import GearShop from "@/pages/GearShop";
import CookYourCatch from "@/pages/CookYourCatch";
import About from "@/pages/About";
import Shop from "@/pages/Shop";
import FishingRegulations from "@/pages/FishingRegulations";
import { getRandomJoke } from "@/lib/jokes";

type Page = "home" | "freshwater" | "saltwater" | "tackle-box" | "travel-guide" | "gear-shop" | "cook-your-catch" | "about" | "shop" | "regulations";

function getPageFromHash(): Page {
  const hash = window.location.hash.slice(1);
  const valid: Page[] = ["home", "freshwater", "saltwater", "tackle-box", "travel-guide", "gear-shop", "cook-your-catch", "about", "shop", "regulations"];
  return valid.includes(hash as Page) ? (hash as Page) : "home";
}

function App() {
  const [currentPage, setCurrentPage] = useState<Page>(getPageFromHash);
  const [jokeOpen, setJokeOpen] = useState(false);
  const [joke, setJoke] = useState("");

  const handleNavigate = useCallback((page: string) => {
    setCurrentPage(page as Page);
    window.location.hash = page;
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    const onHashChange = () => {
      setCurrentPage(getPageFromHash());
    };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);

  const showJoke = useCallback(() => {
    setJoke(getRandomJoke());
    setJokeOpen(true);
  }, []);

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return <Home onNavigate={handleNavigate} />;
      case "freshwater":
        return <Freshwater />;
      case "saltwater":
        return <Saltwater />;
      case "tackle-box":
        return <TackleBox />;
      case "travel-guide":
        return <TravelGuide />;
      case "gear-shop":
        return <GearShop />;
      case "cook-your-catch":
        return <CookYourCatch />;
      case "about":
        return <About />;
      case "shop":
        return <Shop />;
      case "regulations":
        return <FishingRegulations />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-canvas">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex-1 w-full">
        {renderPage()}
      </main>
      <Footer onShowJoke={showJoke} />
      <JokeModal isOpen={jokeOpen} joke={joke} onClose={() => setJokeOpen(false)} />
    </div>
  );
}

export default App;
