/**
 * Secret Tackle Box — email-gated premium content.
 * Revenue model: email list capture → affiliate newsletter → repeat purchases.
 * Gate mechanic: first 2 tips free (teaser), rest unlocked after email signup.
 * Uses localStorage "dsd_tackle_unlocked" flag — no backend session needed.
 * Email stored via /api/subscribe for Russell's owned list.
 */
import { useState, useEffect } from "react";

const STORAGE_KEY = "dsd_tackle_unlocked";

const TIPS = [
  {
    label: "Pro Tip #1",
    title: "The dead drift",
    description:
      "Let your bait float exactly like the current. Fish can't resist something that looks natural. No twitching, no reeling — just trust the water.",
  },
  {
    label: "Pro Tip #2",
    title: "Moon phase magic",
    description:
      "New moon = aggressive bites. Full moon = spooky fish. Plan your trip around the calendar. The old-timers knew this before anyone had an app.",
  },
  {
    label: "Pro Tip #3",
    title: "Coffee can trick",
    description:
      "Toss a handful of old coffee grounds in the water before you start. Attracts baitfish like crazy. My granddad swore by it.",
  },
  {
    label: "Old-school superstition",
    title: "Never tell your spot",
    description:
      "Some secrets stay between me and the water. Find your own honey hole, kiddo. That's half the adventure.",
  },
  {
    label: "Pro Tip #4",
    title: "The figure-eight",
    description:
      "When a muskie follows your lure to the boat, don't pull it out. Trace a big figure-eight in the water. They'll commit at the last second.",
  },
  {
    label: "Pro Tip #5",
    title: "Match your line to the water",
    description:
      "Clear water = fluorocarbon. Stained water = braid with a leader. The fish can see more than you think, especially on calm days.",
  },
  {
    label: "Dad's secret",
    title: "The first cast curse",
    description:
      "If you catch a fish on your first cast, throw it back gently and say 'thank you.' The water remembers.",
  },
  {
    label: "Pro Tip #6",
    title: "Barometric pressure tells all",
    description:
      "Falling pressure = fish feeding aggressively, get out fast. Rising pressure = slow bite, go finesse. Steady high pressure = consistent, predictable fishing.",
  },
];

// Free preview: show first N tips without email gate
const FREE_TIPS = 2;

export default function TackleBox() {
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  // Track whether user has unlocked the full box via email signup
  const [unlocked, setUnlocked] = useState(false);
  const [email, setEmail] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  // Restore unlock state from localStorage on mount — persists across sessions
  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === "true") {
      setUnlocked(true);
    }
  }, []);

  const toggleReveal = (index: number) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  };

  /**
   * Handles email gate form submission.
   * Posts to /api/subscribe → stores in DB → unlocks full box in localStorage.
   * No user action needed after this — the box stays unlocked forever.
   */
  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim(), source: "tackle-box" }),
      });
      const data = await res.json();

      if (res.ok && data.success) {
        // Persist unlock flag so it survives page refreshes
        localStorage.setItem(STORAGE_KEY, "true");
        setUnlocked(true);
      } else {
        setError(data.error || "Something went wrong. Try again.");
      }
    } catch {
      setError("Couldn't reach the server. Check your connection and try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Tips visible without unlock = first FREE_TIPS items
  const visibleTips = unlocked ? TIPS : TIPS.slice(0, FREE_TIPS);

  return (
    <section className="animate-fade-in">
      <div className="max-w-4xl mx-auto bg-gradient-to-br from-canvas to-white border-4 border-wood rounded-3xl p-8 sm:p-12 text-center relative">
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-sunset text-white px-8 py-1 rounded-b-3xl text-sm font-bold shadow-inner">
          DUSTY OLD BOX
        </div>
        <div className="text-7xl mb-4">🔐</div>
        <h1 className="font-display text-4xl sm:text-5xl mb-4 text-ocean">The Secret Tackle Box</h1>
        <p className="max-w-md mx-auto mb-10 text-ocean/70">
          {unlocked
            ? "You're in, kiddo. These are the tricks I've kept for decades. Use them wisely."
            : "Only the ones who show up and listen get to see inside. The first two are on me."}
        </p>

        {/* Free preview tips */}
        <div className="grid sm:grid-cols-2 gap-6 text-left">
          {visibleTips.map((tip, i) => (
            <button
              key={i}
              onClick={() => toggleReveal(i)}
              className={`bg-white rounded-2xl p-6 sm:p-8 text-left transition-all duration-300 hover:shadow-xl cursor-pointer ${
                revealed.has(i)
                  ? "ring-4 ring-sunset shadow-lg"
                  : "hover:-translate-y-0.5"
              } animate-fade-in`}
            >
              <div className="uppercase text-xs text-wood mb-2 font-semibold">{tip.label}</div>
              <h4 className="font-semibold text-ocean text-lg">{tip.title}</h4>
              <p
                className={`mt-3 text-sm text-ocean/70 transition-all duration-300 ${
                  revealed.has(i) ? "opacity-100 max-h-40" : "opacity-60 max-h-12 overflow-hidden"
                }`}
              >
                {tip.description}
              </p>
              {!revealed.has(i) && (
                <span className="text-xs text-sunset mt-2 inline-block">
                  Tap to reveal →
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Email gate — shown only when user hasn't unlocked yet */}
        {!unlocked && (
          <div className="mt-10 bg-gradient-to-br from-ocean to-ocean/80 rounded-3xl p-8 text-white text-center animate-fade-in">
            <div className="text-4xl mb-3">🔒</div>
            <h3 className="font-display text-2xl mb-2">
              {TIPS.length - FREE_TIPS} more secrets inside
            </h3>
            <p className="text-white/75 mb-2 text-sm max-w-sm mx-auto">
              Drop your email and I'll open the rest of the box — plus send you my best
              tips straight to your inbox. No spam, I promise.
            </p>
            <p className="text-white/50 text-xs mb-6 max-w-xs mx-auto">
              By signing up you agree to receive occasional emails from Deep Sea Dad.
              Unsubscribe any time.
            </p>

            <form
              onSubmit={handleUnlock}
              className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                disabled={submitting}
                className="flex-1 px-5 py-3 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-sunset focus:ring-1 focus:ring-sunset disabled:opacity-60"
              />
              <button
                type="submit"
                disabled={submitting}
                className="px-7 py-3 bg-sunset hover:bg-sunset/90 text-white font-semibold rounded-full transition-colors shadow-lg hover:shadow-xl disabled:opacity-60 whitespace-nowrap"
              >
                {submitting ? "Opening…" : "Open the Box"}
              </button>
            </form>

            {error && (
              <p className="mt-3 text-red-300 text-sm">{error}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
