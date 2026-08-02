import { useState, useCallback, useEffect } from "react";
import { fetchConditions, geocodeLocation, type ConditionsData } from "@/lib/weather";
import { getMoonPhase } from "@/lib/moon";
import { calculateFishingScore, type ScoreResult } from "@/lib/fishing-score";
import { generateAdvice, generateFallbackAdvice, type AdviceSet } from "@/lib/advice";
import { saveLocation, getSavedLocation, saveMode, getSavedMode } from "@/lib/storage";
import LocationInput from "./LocationInput";

type DashboardState = "empty" | "loading" | "results" | "error";

export default function ConditionsDashboard() {
  const [state, setState] = useState<DashboardState>("empty");
  const [mode, setMode] = useState<string>(getSavedMode());
  const [conditions, setConditions] = useState<ConditionsData | null>(null);
  const [score, setScore] = useState<ScoreResult | null>(null);
  const [advice, setAdvice] = useState<AdviceSet | null>(null);
  const [lastUpdated, setLastUpdated] = useState<string>("");
  const [showLocationInput, setShowLocationInput] = useState(false);
  const [currentLat, setCurrentLat] = useState<number | null>(null);
  const [currentLon, setCurrentLon] = useState<number | null>(null);
  const [locationLabel, setLocationLabel] = useState<string>("");

  const loadConditions = useCallback(
    async (lat: number, lon: number, label?: string) => {
      setState("loading");
      setCurrentLat(lat);
      setCurrentLon(lon);
      if (label) setLocationLabel(label);

      try {
        const data = await fetchConditions(lat, lon);
        setConditions(data);

        const moon = getMoonPhase();
        const scoreResult = calculateFishingScore(
          data.tempF,
          data.windMph,
          data.weather.precipitation,
          moon
        );
        setScore(scoreResult);

        const adviceResult = generateAdvice(
          data.tempF,
          data.windMph,
          data.weather.precipitation,
          mode,
          data.sunrise,
          data.sunset
        );
        setAdvice(adviceResult);

        setLastUpdated(
          new Date().toLocaleTimeString([], { hour: "numeric", minute: "2-digit" })
        );

        saveLocation({ lat, lon, label: label || "Your dock", mode });
        setState("results");
      } catch (err) {
        console.error("Failed to load conditions:", err);
        setAdvice(generateFallbackAdvice());
        setScore(null);
        setConditions(null);
        setState("error");
      }
    },
    [mode]
  );

  useEffect(() => {
    const saved = getSavedLocation();
    if (saved) {
      setMode(saved.mode || "fresh");
      setLocationLabel(saved.label);
      loadConditions(saved.lat, saved.lon, saved.label);
    }
  }, []);

  const handleGetLocation = useCallback(() => {
    if (navigator.geolocation) {
      setState("loading");
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          loadConditions(pos.coords.latitude, pos.coords.longitude);
        },
        () => {
          setState("empty");
          setShowLocationInput(true);
        }
      );
    } else {
      setShowLocationInput(true);
    }
  }, [loadConditions]);

  const handleManualLocation = useCallback(
    async (query: string) => {
      setShowLocationInput(false);
      setState("loading");
      try {
        const result = await geocodeLocation(query);
        if (result) {
          setLocationLabel(result.name);
          await loadConditions(result.lat, result.lon, result.name);
        } else {
          setState("empty");
        }
      } catch {
        setState("empty");
      }
    },
    [loadConditions]
  );

  const handleModeSwitch = useCallback(
    (newMode: string) => {
      setMode(newMode);
      saveMode(newMode);
      if (currentLat !== null && currentLon !== null) {
        loadConditions(currentLat, currentLon, locationLabel);
      }
    },
    [currentLat, currentLon, locationLabel, loadConditions]
  );

  const handleRefresh = useCallback(() => {
    if (currentLat !== null && currentLon !== null) {
      loadConditions(currentLat, currentLon, locationLabel);
    }
  }, [currentLat, currentLon, locationLabel, loadConditions]);

  const moon = getMoonPhase();

  return (
    <>
      <div className="dock-texture rounded-3xl shadow-2xl p-6 sm:p-8 mb-16 border-t-8 border-sunset">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl font-display font-bold text-ocean">
              Conditions at the Dock
            </h2>
            <p className="text-ocean/70">
              {locationLabel
                ? `Showing conditions near ${locationLabel}`
                : "Real-time guidance right where you are"}
            </p>
          </div>

          <div className="flex items-center gap-4">
            <div className="inline-flex bg-ocean/10 rounded-2xl p-1 text-sm">
              <button
                onClick={() => handleModeSwitch("fresh")}
                className={`px-4 sm:px-6 py-2 rounded-[14px] font-medium transition-all duration-200 ${
                  mode === "fresh"
                    ? "bg-ocean text-canvas"
                    : "text-ocean/70 hover:text-ocean"
                }`}
              >
                Freshwater
              </button>
              <button
                onClick={() => handleModeSwitch("salt")}
                className={`px-4 sm:px-6 py-2 rounded-[14px] font-medium transition-all duration-200 ${
                  mode === "salt"
                    ? "bg-ocean text-canvas"
                    : "text-ocean/70 hover:text-ocean"
                }`}
              >
                Saltwater
              </button>
            </div>

            {(state === "results" || state === "error") && (
              <button
                onClick={handleRefresh}
                className="flex items-center gap-2 px-4 sm:px-6 py-2 bg-ocean text-canvas rounded-2xl text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 4v5h.582m15.356 2a8 8 0 01-15.357-2m15.357 2H15"
                  />
                </svg>
                Refresh
              </button>
            )}
          </div>
        </div>

        {state === "empty" && <EmptyState onGetLocation={handleGetLocation} onManual={() => setShowLocationInput(true)} />}
        {state === "loading" && <LoadingState />}
        {state === "results" && conditions && score && advice && (
          <ResultsState
            conditions={conditions}
            score={score}
            advice={advice}
            moon={moon}
            lastUpdated={lastUpdated}
            onRefresh={handleRefresh}
          />
        )}
        {state === "error" && advice && (
          <ErrorState advice={advice} onRefresh={handleRefresh} />
        )}
      </div>

      <LocationInput
        isOpen={showLocationInput}
        onSubmit={handleManualLocation}
        onClose={() => setShowLocationInput(false)}
      />
    </>
  );
}

function EmptyState({
  onGetLocation,
  onManual,
}: {
  onGetLocation: () => void;
  onManual: () => void;
}) {
  return (
    <div className="text-center py-12 sm:py-16">
      <div className="text-7xl mb-6 animate-fade-in">{"\uD83C\uDF05"}</div>
      <h3 className="text-2xl font-display mb-3 text-ocean animate-fade-in animate-delay-100">
        Let me check the dock for you
      </h3>
      <p className="max-w-md mx-auto text-ocean/70 mb-8 animate-fade-in animate-delay-200">
        Click below and I'll pull today's weather, moon phase, and water conditions.
        Then I'll tell you exactly what I'd do if I were heading out right now.
      </p>
      <button
        onClick={onGetLocation}
        className="px-8 py-4 bg-sunset hover:bg-sunset/90 text-white rounded-2xl text-lg font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg animate-fade-in animate-delay-300"
      >
        Check Conditions at My Location
      </button>
      <div className="mt-4">
        <button
          onClick={onManual}
          className="text-sm text-ocean/60 hover:text-ocean underline transition-colors animate-fade-in animate-delay-400"
        >
          or enter a town or ZIP code
        </button>
      </div>

      <div className="mt-12 bg-white/70 rounded-2xl p-6 max-w-lg mx-auto text-left animate-fade-in animate-delay-500">
        <p className="uppercase text-xs tracking-widest text-wood mb-2 font-semibold">
          Dad's example advice
        </p>
        <p className="italic text-ocean/80">
          "Listen closely — if the barometer is dropping and the wind is light,
          the fish are moving shallow. I'm proud of you for checking before you
          even left the house."
        </p>
      </div>
    </div>
  );
}

function LoadingState() {
  return (
    <div className="py-16 text-center">
      <div className="inline-block w-10 h-10 border-4 border-sunset border-t-transparent rounded-full animate-spin mb-6" />
      <p className="text-ocean/70 text-lg">
        Finding your dock... pulling weather and moon phase...
      </p>
    </div>
  );
}

function ResultsState({
  conditions,
  score,
  advice,
  moon,
  lastUpdated,
  onRefresh,
}: {
  conditions: ConditionsData;
  score: ScoreResult;
  advice: AdviceSet;
  moon: ReturnType<typeof getMoonPhase>;
  lastUpdated: string;
  onRefresh: () => void;
}) {
  return (
    <div className="animate-fade-in">
      <div className="summary-banner rounded-lg p-5 mb-8">
        <div className="text-lg md:text-xl font-medium">{score.summary}</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-7">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <MetricCard
              value={`${conditions.tempF}\u00B0F`}
              label="Air Temp"
              delay="animate-delay-100"
            />
            <MetricCard
              value={`${conditions.windMph} mph`}
              label="Wind"
              delay="animate-delay-200"
            />
            <MetricCard
              value={moon.emoji}
              label={moon.name}
              isEmoji
              delay="animate-delay-300"
            />
            <MetricCard
              value={conditions.waterTempF !== null ? `${conditions.waterTempF}\u00B0F` : "\u2014"}
              label="Water Temp"
              dimmed={conditions.waterTempF === null}
              delay="animate-delay-400"
            />
          </div>

          {conditions.sunrise && conditions.sunset && (
            <div className="grid grid-cols-2 gap-4 mt-4 animate-fade-in animate-delay-300">
              <div className="bg-white/70 rounded-2xl p-3 text-center">
                <div className="text-2xl mb-1">{"\uD83C\uDF05"}</div>
                <div className="text-lg font-medium text-ocean">
                  {formatTime(conditions.sunrise)}
                </div>
                <div className="text-xs uppercase tracking-widest text-ocean/60">Sunrise</div>
              </div>
              <div className="bg-white/70 rounded-2xl p-3 text-center">
                <div className="text-2xl mb-1">{"\uD83C\uDF07"}</div>
                <div className="text-lg font-medium text-ocean">
                  {formatTime(conditions.sunset)}
                </div>
                <div className="text-xs uppercase tracking-widest text-ocean/60">Sunset</div>
              </div>
            </div>
          )}

          <div className="mt-8 animate-fade-in animate-delay-400">
            <div className="flex items-center justify-between mb-3">
              <span className="uppercase text-xs font-medium text-wood">
                Fishing Score Today
              </span>
              <div className="flex items-baseline gap-2">
                <span className="font-display text-4xl font-bold text-ocean">
                  {score.score}
                </span>
                <span className={`text-sm font-semibold px-2 py-0.5 rounded-full ${
                  score.score >= 8 ? "bg-green-100 text-green-700" :
                  score.score >= 6 ? "bg-lime-100 text-lime-700" :
                  score.score >= 4 ? "bg-yellow-100 text-yellow-700" :
                  "bg-red-100 text-red-700"
                }`}>
                  {score.label}
                </span>
              </div>
            </div>
            <div className="fishing-score-meter">
              <div
                className={`fishing-score-fill ${score.className}`}
                style={{ width: `${score.score * 10}%` }}
              />
            </div>
            <p className="text-sm mt-2 text-ocean/70">{score.explanation}</p>
          </div>
        </div>

        <div className="md:col-span-5 bg-white rounded-3xl p-6 sm:p-8 animate-fade-in-up animate-delay-200">
          <h3 className="font-display text-2xl mb-6 flex items-center gap-2 text-ocean">
            <span className="text-sunset">{"\uD83D\uDC68\u200D\uD83E\uDDB3"}</span> Dad says...
          </h3>
          <AdviceSection label="Fishing outlook" text={advice.outlook} />
          <AdviceSection label="Best window today" text={advice.window} />
          <AdviceSection label="Likely fish behavior" text={advice.behavior} />
          <AdviceSection label="Tactical suggestion" text={advice.tactic} />
          <AdviceSection label="Clothing / gear note" text={advice.gear} />
          <div className="border-l-3 border-sunset pl-4 text-sunset font-medium">
            <div className="advice-label">Dad's encouragement</div>
            <p>{advice.encourage}</p>
          </div>
        </div>
      </div>

      {/* Share fishing score — viral growth driver, zero ongoing cost */}
      <div className="mt-6 flex items-center justify-center">
        <ShareScoreButton score={score.score} label={score.label} />
      </div>

      <div className="mt-4 text-xs text-ocean/60 flex items-center justify-between">
        <span>Last updated {lastUpdated}</span>
        <button
          onClick={onRefresh}
          className="cursor-pointer hover:text-ocean transition-colors"
        >
          Refresh conditions
        </button>
      </div>
    </div>
  );
}

/**
 * ShareScoreButton — lets users share their fishing score on social media.
 * Uses Web Share API when available (mobile), falls back to Twitter/X URL.
 * Each share = organic traffic to the site → more affiliate clicks.
 */
function ShareScoreButton({ score, label }: { score: number; label: string }) {
  const shareText = `I just checked Deep Sea Dad and got a ${score}/10 fishing score — ${label} conditions today! 🎣 Check yours at deepseadad.com`;
  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}`;

  const handleShare = async () => {
    // Use native Web Share API on mobile/supported browsers
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Deep Sea Dad — Fishing Conditions",
          text: shareText,
          url: "https://deepseadad.com",
        });
        return;
      } catch {
        // User cancelled or API failed — fall through to Twitter
      }
    }
    // Desktop fallback: open Twitter/X share dialog in new tab
    window.open(twitterUrl, "_blank", "noopener,noreferrer,width=550,height=420");
  };

  return (
    <button
      onClick={handleShare}
      className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-ocean/8 border border-ocean/15 text-ocean/70 text-sm font-medium hover:bg-ocean/15 hover:text-ocean transition-all duration-150"
    >
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.259 5.63 5.905-5.63Zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
      Share my {score}/10 score
    </button>
  );
}

function ErrorState({
  advice,
  onRefresh,
}: {
  advice: AdviceSet;
  onRefresh: () => void;
}) {
  return (
    <div className="animate-fade-in">
      <div className="summary-banner rounded-lg p-5 mb-8">
        <div className="text-lg md:text-xl font-medium">
          Couldn't reach the dock — but the fish are still out there.
        </div>
      </div>

      <div className="bg-white rounded-3xl p-6 sm:p-8">
        <h3 className="font-display text-2xl mb-6 flex items-center gap-2 text-ocean">
          <span className="text-sunset">{"\uD83D\uDC68\u200D\uD83E\uDDB3"}</span> Dad says...
        </h3>
        <AdviceSection label="Fishing outlook" text={advice.outlook} />
        <AdviceSection label="Best window today" text={advice.window} />
        <AdviceSection label="Likely fish behavior" text={advice.behavior} />
        <AdviceSection label="Tactical suggestion" text={advice.tactic} />
        <AdviceSection label="Clothing / gear note" text={advice.gear} />
        <div className="border-l-3 border-sunset pl-4 text-sunset font-medium">
          <div className="advice-label">Dad's encouragement</div>
          <p>{advice.encourage}</p>
        </div>
      </div>

      <div className="mt-6 text-center">
        <button
          onClick={onRefresh}
          className="px-6 py-3 bg-sunset text-white rounded-2xl font-medium transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}

function MetricCard({
  value,
  label,
  isEmoji,
  dimmed,
  delay = "",
}: {
  value: string;
  label: string;
  isEmoji?: boolean;
  dimmed?: boolean;
  delay?: string;
}) {
  return (
    <div
      className={`bg-white/70 rounded-2xl p-4 text-center animate-fade-in ${delay} ${
        dimmed ? "opacity-40" : ""
      }`}
    >
      <div className={`${isEmoji ? "text-5xl" : "text-3xl sm:text-4xl font-light text-ocean"}`}>
        {value}
      </div>
      <div className="text-xs uppercase tracking-widest text-ocean/60 mt-1">{label}</div>
    </div>
  );
}

function AdviceSection({ label, text }: { label: string; text: string }) {
  return (
    <div className="border-l-3 border-sunset pl-4 mb-5">
      <div className="advice-label">{label}</div>
      <p className="text-ocean/80 text-sm">{text}</p>
    </div>
  );
}

function formatTime(isoString: string): string {
  try {
    const d = new Date(isoString);
    return d.toLocaleTimeString([], { hour: "numeric", minute: "2-digit" });
  } catch {
    return "";
  }
}
