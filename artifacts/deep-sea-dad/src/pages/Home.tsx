import { useState } from "react";
import ConditionsDashboard from "@/components/ConditionsDashboard";
import dockSilhouette from "@assets/image_1775965053670.png";

interface HomeProps {
  onNavigate: (page: string) => void;
}

const VIDEOS = [
  {
    title: "How to Rig a Carolina Rig",
    description: "Dad walks you through the simplest, most effective bass setup you'll ever tie. No fancy stuff — just results.",
    emoji: "\uD83C\uDFA3",
  },
  {
    title: "Sunset Striper Run — Full Trip",
    description: "Hop on the boat for a golden-hour striper session. Spoiler: the kid catches a bigger one than Dad.",
    emoji: "\uD83C\uDF05",
  },
  {
    title: "Beginner's First Saltwater Trip",
    description: "Took a first-timer offshore and he landed a 30lb mahi. The look on his face? Priceless.",
    emoji: "\uD83D\uDEA4",
  },
  {
    title: "Dad's Secret Bait Tricks",
    description: "Three bait hacks I learned the hard way so you don't have to. You'll thank me later, kiddo.",
    emoji: "\uD83E\uDEB1",
  },
];

const SPONSORS = [
  { name: "Coastal Tackle Co.", description: "Premium rods and reels built for the long haul." },
  { name: "SunShield SPF Gear", description: "UV protection that actually stays on — even in the spray." },
  { name: "Tideline Charters", description: "Book your next offshore adventure with Captain Mike." },
  { name: "Reel Fresh Apparel", description: "Fishing gear you can wear to dinner and nobody bats an eye." },
  { name: "AquaMap Electronics", description: "Fish finders and GPS units that won't let you down." },
  { name: "Dockside Bait & Supply", description: "Fresh bait, cold drinks, and everything in between." },
];

export default function Home({ onNavigate }: HomeProps) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const [signupError, setSignupError] = useState("");
  const [signingUp, setSigningUp] = useState(false);

  /**
   * Submits email to /api/subscribe — stored in DB for owned list.
   * Idempotent: existing emails return success silently.
   */
  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSigningUp(true);
    setSignupError("");
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: "home" }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        setEmail("");
      } else {
        setSignupError(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setSignupError("Couldn't connect. Check your internet and try again.");
    } finally {
      setSigningUp(false);
    }
  };

  return (
    <section className="animate-fade-in">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-6">
          <img
            src={dockSilhouette}
            alt="Deep Sea Dad - fishing from the dock at sunset"
            className="w-32 sm:w-40 h-auto rounded-xl shadow-md"
          />
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold leading-none mb-6 text-ocean">
          Grab a chair, kiddo.
          <br />
          Let's talk fishing.
        </h1>
        <p className="text-lg sm:text-xl text-ocean/80 max-w-2xl mx-auto">
          Forty years on the water and I'm still learning every dawn. Come sit a
          spell — I'll share what I know, no rush, no judgment.
        </p>
      </div>

      <ConditionsDashboard />

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
        <button
          onClick={() => onNavigate("freshwater")}
          className="group bg-white rounded-3xl p-6 sm:p-8 border border-wood/10 flex flex-col text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
        >
          <div className="text-5xl sm:text-6xl mb-6">{"\uD83C\uDFDE\uFE0F"}</div>
          <h3 className="font-display text-2xl sm:text-3xl mb-2 text-ocean">Freshwater Fishing</h3>
          <p className="flex-1 text-ocean/70">
            Lakes, rivers, bass, trout — the quiet spots where patience pays off.
          </p>
          <div className="text-sunset font-medium mt-6 group-hover:translate-x-1 transition-transform">
            Listen to Dad's advice {"\u2192"}
          </div>
        </button>

        <button
          onClick={() => onNavigate("saltwater")}
          className="group bg-white rounded-3xl p-6 sm:p-8 border border-wood/10 flex flex-col text-left transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl"
        >
          <div className="text-5xl sm:text-6xl mb-6">{"\uD83C\uDF0A"}</div>
          <h3 className="font-display text-2xl sm:text-3xl mb-2 text-ocean">
            Saltwater & Deep Sea
          </h3>
          <p className="flex-1 text-ocean/70">
            Marlin, tuna, redfish — where the ocean meets the sky.
          </p>
          <div className="text-sunset font-medium mt-6 group-hover:translate-x-1 transition-transform">
            Listen to Dad's advice {"\u2192"}
          </div>
        </button>

        <button
          onClick={() => onNavigate("tackle-box")}
          className="group bg-gradient-to-br from-canvas to-white border-2 border-sunset rounded-3xl p-6 sm:p-8 flex flex-col text-left relative overflow-hidden transition-all duration-200 hover:-translate-y-0.5 hover:shadow-xl sm:col-span-2 md:col-span-1"
        >
          <div className="absolute top-4 right-4 text-xs bg-sunset text-white px-3 py-1 rounded-3xl font-medium">
            INSIDER ONLY
          </div>
          <div className="text-5xl sm:text-6xl mb-6">{"\uD83D\uDD10"}</div>
          <h3 className="font-display text-2xl sm:text-3xl mb-2 text-ocean">Secret Tackle Box</h3>
          <p className="flex-1 text-ocean/70">
            The dusty old tricks nobody shares unless they really know you.
          </p>
          <div className="text-sunset font-medium mt-6 group-hover:translate-x-1 transition-transform">
            Open the box {"\u2192"}
          </div>
        </button>
      </div>

      <div className="mt-16 sm:mt-20">
        <div className="text-center mb-8">
          <h2 className="font-display text-3xl sm:text-4xl text-ocean mb-3">
            {"\uD83C\uDFA5"} Watch Dad Fish
          </h2>
          <p className="text-ocean/60 max-w-xl mx-auto">
            Pull up a seat and watch along. Tips, trips, and the kind of fishing stories you can't make up.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {VIDEOS.map((video) => (
            <a
              key={video.title}
              href="#"
              className="group bg-white rounded-2xl overflow-hidden border border-wood/10 hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
            >
              <div className="aspect-video bg-gradient-to-br from-ocean/90 to-ocean flex items-center justify-center relative">
                <span className="text-5xl">{video.emoji}</span>
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-sunset/90 flex items-center justify-center shadow-lg">
                    <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h4 className="font-display text-lg text-ocean mb-1 group-hover:text-sunset transition-colors">{video.title}</h4>
                <p className="text-sm text-ocean/60 leading-relaxed">{video.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0d2137] via-ocean to-[#1a3a5c] p-8 sm:p-12 border border-wood/10">
          <div className="absolute top-0 right-0 w-72 h-72 bg-sunset/8 rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-56 h-56 bg-canvas/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-8">
            <div className="flex-shrink-0 flex flex-col items-center">
              <div className="w-20 h-20 rounded-2xl bg-canvas/10 border border-canvas/20 flex items-center justify-center mb-3">
                <span className="text-4xl">{"\uD83D\uDCF0"}</span>
              </div>
              <span className="text-xs uppercase tracking-widest text-sunset font-semibold">Recommended Reading</span>
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="font-display text-2xl sm:text-3xl text-canvas mb-3">
                The Fisherman Magazine
              </h2>
              <p className="text-canvas/75 text-base sm:text-lg leading-relaxed mb-2">
                If you fish the Northeast like I do, you need this magazine in your life. <em>The Fisherman</em> covers Long Island, New Jersey, Delaware Bay, and New England — all my home waters. Their regional fishing reports are the real deal.
              </p>
              <p className="text-canvas/60 text-sm leading-relaxed mb-5">
                I've been reading it for years. It's one of the few publications I'd recommend to my own kids. Give it a look — you'll thank me later.
              </p>
              <a
                href="https://thefisherman.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-sunset hover:bg-sunset/90 text-white font-semibold rounded-full transition-colors shadow-lg hover:shadow-xl"
              >
                Visit The Fisherman
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-20">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-ocean via-ocean/95 to-[#1a3a5c] p-8 sm:p-12">
          <div className="absolute top-0 right-0 w-64 h-64 bg-sunset/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-sunset/5 rounded-full blur-2xl translate-y-1/2 -translate-x-1/4" />

          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <div className="text-4xl mb-4">{"\u2693"}</div>
            <h2 className="font-display text-3xl sm:text-4xl text-canvas mb-3">
              Join the Inner Circle
            </h2>
            <p className="text-canvas/70 mb-6 text-lg">
              Get Dad's best stuff delivered straight to your inbox. No spam — just the good stuff, I promise.
            </p>

            <div className="grid sm:grid-cols-2 gap-3 text-left mb-8 max-w-md mx-auto">
              <div className="flex items-center gap-2 text-canvas/80 text-sm">
                <span className="text-sunset">{"\u2713"}</span> Exclusive tips & techniques
              </div>
              <div className="flex items-center gap-2 text-canvas/80 text-sm">
                <span className="text-sunset">{"\u2713"}</span> Seasonal fishing reports
              </div>
              <div className="flex items-center gap-2 text-canvas/80 text-sm">
                <span className="text-sunset">{"\u2713"}</span> Early access to new guides
              </div>
              <div className="flex items-center gap-2 text-canvas/80 text-sm">
                <span className="text-sunset">{"\u2713"}</span> Member-only tackle box secrets
              </div>
            </div>

            {submitted ? (
              <div className="bg-sunset/20 border border-sunset/40 rounded-2xl p-6 animate-fade-in">
                <p className="text-canvas font-display text-xl">{"\uD83C\uDF89"} Thanks, welcome aboard!</p>
                <p className="text-canvas/70 text-sm mt-1">Keep an eye on your inbox — Dad's got some good stuff coming your way.</p>
              </div>
            ) : (
              <form onSubmit={handleSignup} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 px-5 py-3 rounded-full bg-canvas/10 border border-canvas/20 text-canvas placeholder:text-canvas/40 focus:outline-none focus:border-sunset focus:ring-1 focus:ring-sunset"
                />
                <button
                  type="submit"
                  disabled={signingUp}
                  className="px-8 py-3 bg-sunset hover:bg-sunset/90 text-white font-semibold rounded-full transition-colors shadow-lg hover:shadow-xl disabled:opacity-60"
                >
                  {signingUp ? "Joining…" : "Sign Up"}
                </button>
              </form>
            )}
            {signupError && (
              <p className="mt-3 text-red-300 text-sm">{signupError}</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-16 sm:mt-20 mb-4">
        <div className="text-center mb-8">
          <p className="text-xs uppercase tracking-widest text-wood font-semibold mb-2">Sponsored</p>
          <h2 className="font-display text-2xl sm:text-3xl text-ocean mb-2">
            Partners & Sponsors
          </h2>
          <p className="text-ocean/50 text-sm max-w-lg mx-auto">
            Brands Dad trusts and actually uses on the water. They help keep the lights on around here.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {SPONSORS.map((sponsor) => (
            <div
              key={sponsor.name}
              className="bg-white rounded-2xl p-5 border border-wood/10 flex flex-col"
            >
              <div className="w-10 h-10 rounded-xl bg-ocean/5 flex items-center justify-center mb-3">
                <span className="text-ocean/40 font-display text-lg">{sponsor.name.charAt(0)}</span>
              </div>
              <h4 className="font-display text-lg text-ocean mb-1">{sponsor.name}</h4>
              <p className="text-sm text-ocean/60 flex-1">{sponsor.description}</p>
              <a href="#" className="text-sunset text-sm font-medium mt-3 hover:underline inline-flex items-center gap-1">
                Learn More {"\u2192"}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
